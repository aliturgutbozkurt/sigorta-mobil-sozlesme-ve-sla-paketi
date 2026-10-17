# BÖLÜM 4: KVKK, SAĞLIK VERİLERİ VE LOGLAMA FELAKETLERİ

Şimdi yazılım dünyasının en ciddi, en ağır cezai yaptırımlara sahip konusuna geldik: **Kişisel Verilerin Korunması (KVKK / GDPR)** ve **Hassas Sağlık Verileri**.

Sözleşmemizin **Ek-3 (DPA & KVKK Sözleşmesi)** ve **MSA Madde 7**'si bu konuyu düzenler.
Burada yapacağın bir hata, şirkete milyonlarca liralık idari para cezası kesilmesine, hatta Türk Ceza Kanunu (TCK md. 135-136) kapsamında hapis cezası riskine yol açabilir!

Gelin kod yazarken bu mayın tarlasına basmamanın yollarına bakalım.

---

## 1. HASSAS VERİ (ÖZEL NİTELİKLİ KİŞİSEL VERİ) NEDİR?

Bir sigorta uygulamasında iki tip veri vardır:

1. **Genel Kişisel Veriler (KVKK md. 5):**
   * Ad, Soyad, E-posta, Telefon Numarası, Araç Plakası.
2. **ÖZEL NİTELİKLİ KİŞİSEL VERİLER (KVKK md. 6 - EN TEHLİKELİ ALAN):**
   * Tamamlayıcı/Özel Sağlık Sigortası teşhisleri, ICD-10 tanı kodları (örn: Kanser, Psikiyatri, Kalp rahatsızlıkları),
   * Doktor epikriz raporları, e-Reçeteler, tahlil sonuçları,
   * Kaza tutanağındaki yaralanma ve vefat kayıtları,
   * Biyometrik yüz ve parmak izi verileri.

Kanun der ki: **"Bir insanın sağlık verisi, onun en mahrem sırrıdır. Bu veriyi açıkta bırakan, izinsiz işleyen veya sızdıran kişi en ağır şekilde cezalandırılır."**

---

## 2. MASUM GÖRÜNEN BİR SATIR KODUN FELAKETİ: `console.log`

Bir gün backend API'sinde veya mobil istemcide bir hata ayıklıyorsun (debug). Sağlık provizyonu neden onaylanmadı diye merak ettin ve şu satırı yazdın:

```typescript
// Backend (NestJS / Node.js) - ÖLÜMCÜL HATA:
@Post('health/pre-authorization')
async requestPreAuth(@Body() body: any) {
  // "Aman ne olacak, sonra silerim" dediğin log:
  console.log("DEBUG BODY:", JSON.stringify(body));
  
  return this.healthService.process(body);
}
```

Veya mobilde (Swift / Kotlin):
```swift
// iOS (Swift) - ÖLÜMCÜL HATA:
print("Gelen reçete verisi: \(prescriptionResponse)")
```

### Arka Planda Neler Oldu?
1. O `console.log` çıktısı sunucunun standart çıktısına (stdout) yazıldı.
2. Oradan AWS CloudWatch, Datadog veya Logstash'e aktarıldı.
3. Birkaç saat sonra şirketin stajyeri veya üçüncü taraf bir ajans analisti Datadog ekranını açtı.
4. Ekranda ne gördü?
   * Müşterinin açık TC Kimlik Numarası,
   * Hastanın tam adı,
   * Psikiyatrik teşhis raporu ve kullandığı ilaçlar!
5. Daha da kötüsü: Eğer mobil kütüphanede `Crashlytics`'e bu log düştüyse, Google sunucularına şifresiz sağlık verisi akmış oldu!

### Hukuki ve Mali Fatura:
* KVKK Kurulu'ndan **9.000.000 TL'ye varan idari para cezası**.
* Sigortacılık Kanunu md. 31/B (Sır Saklama Yükümlülüğü) ihlali.
* Sözleşmenin DPA 7. maddesi gereğince: **"Kesilen tüm cezalar doğrudan YÜKLENİCİ'ye (şirketimize) rücu edilir ve sorumluluk tavanı uygulanmaz!"**

---

## 3. LOG MASKELEME (DATA MASKING) NASIL YAPILIR?

Log yazmak yazılımcının hakkıdır; ama **asla açık veriyle değil!**

### Kural Tablosu:
* **TC Kimlik No:** Asla açık basılamaz! Sadece ilk 3 ve son 2 hane: `123******89`
* **Kredi Kartı Numarası (PAN):** Asla açık basılamaz! Sadece ilk 6 ve son 4 hane: `4543 60** **** 1234`
* **Kredi Kartı CVV/CVC Kodu:** ASLA VE ASLA HİÇBİR YERE LOGLANAMAZ VEYA KAYDEDİLEMEZ! (PCI-DSS İhlali)
* **Sağlık Teşhisi / Reçete:** Loglarda sadece işlem ID'si (Transaction ID) veya UUID basılır. Asla hastalık adı veya ilaç adı loglanamaz!

### Doğru Kodlama Örneği:

```typescript
// Güvenli Loglama Fonksiyonu
function sanitizeForLog(data: any) {
  return {
    transactionId: data.transactionId,
    maskedTckn: data.tckn ? data.tckn.substring(0, 3) + '******' + data.tckn.substring(9) : undefined,
    policyNumber: data.policyNumber,
    // Hassas alanları tamamen temizle:
    hasPrescription: !!data.prescriptionDetails,
    cvv: undefined,
    rawMedicalDiagnosis: undefined
  };
}

logger.info("Pre-auth request received", sanitizeForLog(body));
```

---

## 4. PROD VERİTABANI DUMP'INI LOCAL'E İNDİRME TUZAĞI

Bir gün staging ortamında bir bug'ı simüle edemiyorsun. Aklına harika (!) bir fikir geliyor:
> *"Abi canlı veritabanının (Prod DB) bir yedeğini alayım, kendi bilgisayarımdaki yerel PostgreSQL'e basayım, orada birebir test edeyim."*

**BU HAREKET SÖZLEŞMEYE VE KANUNA KESİNLİKLE AYKIRIDIR!** 🚫

Sözleşmenin DPA 3.3 maddesini oku:
> *"Test ortamlarında canlı müşteri verisi kullanılması KESİNLİKLE YASAKTIR. Tüm testler sentetik veya anonimleştirilmiş verilerle yapılacaktır."*

Eğer bilgisayarın çalınırsa, bir virüs bulaşırsa veya o veritabanı yedeği yanlışlıkla bir yere sızarsa, 100.000 sigortalının tüm verisi senin kişisel bilgisayarından sızmış olur!

> **Kural:** Test ortamlarında sadece Faker kütüphaneleriyle üretilmiş sentetik veriler (Ahmet Yılmaz, Test Hastanesi, 11111111110) kullanacaksın!
