# GİZLİLİK VE VERİ İŞLEME SÖZLEŞMESİ (DPA & KVKK UYUM)
**Ek Kodu:** EK-3 (AEG-NXR-DPA-2026-V1)  
**Ana Sözleşme:** AEG-NXR-MSA-2026-V1  
**Mevzuat Dayanağı:** 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK), Sigortacılık Kanunu md. 31/B, SEDDK Tebliğleri ve AB GDPR Standartları  

---

## 1. TANIMLAR VE ROLLER

İşbu Gizlilik ve Veri İşleme Sözleşmesi ("DPA"); AegisConnect Mobil Sigortacılık Projesi kapsamında işlenecek kişisel ve ticari verilerin güvenliğini temin etmek amacıyla akdedilmiştir.

* **1.1. Veri Sorumlusu (Data Controller):** Aegis Sigorta A.Ş. Sigortalıların, lehtarların ve çalışanların kişisel verilerinin işleme amaçlarını ve vasıtalarını belirleyen taraftır.
* **1.2. Veri İşleyen (Data Processor):** Nexora Yazılım ve Bilişim Teknolojileri A.Ş. Veri Sorumlusu adına ve onun verdiği açık talimatlara uygun olarak teknik altyapı, yazılım geliştirme ve veri tabanı entegrasyonu faaliyetlerini yürüten taraftır.
* **1.3. İlgili Kişi:** Aegis Sigorta müşterileri, acenteleri, eksperleri, hasar gören üçüncü şahıslar ve sigorta poliçesi lehtarlarıdır.

---

## 2. İŞLENECEK VERİ KATEGORİLERİ VE HASSASİYET SEVİYELERİ

Proje kapsamında mobil uygulama ve backend servisleri üzerinden aşağıdaki veri kategorileri işlenecektir:

```
+-----------------------------------------------------------------------------------------+
| KATEGORİ                 | VERİ TİPLERİ                               | HASSASİYET      |
+--------------------------+--------------------------------------------+-----------------+
| Kimlik & İletişim        | TC Kimlik No, Ad, Soyad, Doğum Tarihi,     | Genel Kişisel   |
|                          | Telefon No, E-posta Adresi, İkametgah      | Veri (KVKK m.5) |
+--------------------------+--------------------------------------------+-----------------+
| Finansal & Ödeme         | Maskelenmiş Kredi Kartı Tokenı (PCI-DSS),  | Yüksek Riskli   |
|                          | IBAN, Prim Tutarı, Poliçe Bedeli           | Finansal Veri   |
+--------------------------+--------------------------------------------+-----------------+
| Varlık & Poliçe          | Araç Plakası, Şasi/Motor No, DASK Bina     | Ticari & Yasal  |
|                          | Bilgileri, TRAMER Hasar Geçmişi            | Sigorta Sırrı   |
+--------------------------+--------------------------------------------+-----------------+
| Özel Nitelikli Sağlık    | Tamamlayıcı/Özel Sağlık teşhisleri,        | ÖZEL NİTELİKLİ  |
| Verileri (CRITICAL)      | ICD-10 tanı kodları, e-Reçeteler,          | HASSAS VERİ     |
|                          | doktor epikriz raporları, engellilik hali  | (KVKK m.6)      |
+--------------------------+--------------------------------------------+-----------------+
| Kaza & Görsel Delil      | Kaza yeri GPS koordinatı, hasar fotoğrafları| Biyometrik &    |
|                          | sürücü belgesi görüntüsü, NFC çip verisi   | Kimlik Doğrulama|
+-----------------------------------------------------------------------------------------+
```

---

## 3. VERİ İŞLEYEN OLARAK YÜKLENİCİ'NİN KESİN TAAHHÜTLERİ

* **3.1. Amaca Bağlılık ve Talimatlara Uygunluk:** YÜKLENİCİ, verileri münhasıran işbu Sözleşme'de tanımlanan mobil uygulama geliştirme ve entegrasyon amacıyla sınırlı olarak işleyecek; MÜŞTERİ'nin yazılı talimatı olmaksızın hiçbir veriyi kopyalamayacak, üçüncü taraflara aktarmayacak, ticari amaçla işlemeyecek veya profil çıkarma/AI model eğitimi amacıyla kendi bünyesinde tutmayacaktır.
* **3.2. Sır Saklama Yükümlülüğü:** 5684 sayılı Sigortacılık Kanunu m. 31/B gereğince; sigortalıların mali durumu, poliçe detayları ve hasar kayıtları "Sigortacılık Sırrı" kapsamındadır. YÜKLENİCİ personeli bu sırları görevden ayrılsalar dahi süresiz olarak korumakla yükümlüdür.
* **3.3. Test Ortamlarında Canlı Veri Yasağı:** Geliştirme (Development), Test (QA) ve Kullanıcı Kabul (UAT) ortamlarında canlı müşteri verisi kullanılması **kesinlikle yasaktır**. Tüm testler sentetik veya KVKK standartlarında geri döndürülemez biçimde maskelenmiş (anonymized/pseudonymized) verilerle icra edilecektir.
* **3.4. Loglama ve İz Takibi (Auditing) Kısıtlamaları:**
  * Uygulama loglarında (Console logs, Datadog, ELK, Sentry, Crashlytics) hiçbir şekilde açık TC Kimlik No, kredi kartı CVV/PAN numarası, sağlık tanısı veya şifre **yazılamaz**.
  * Hassas veriler hafızada tutulurken (In-memory) işlem biter bitmez temizlenecektir.
  * Tüm veri erişimleri 5651 sayılı Kanun ve SEDDK kriterlerine uygun olarak zaman damgalı ve değiştirilemez şekilde loglanacaktır.

---

## 4. TEKNİK VE İDARİ TEDBİRLER

YÜKLENİCİ, işlediği kişisel verilerin hukuka aykırı olarak işlenmesini ve erişilmesini önlemek amacıyla aşağıdaki asgari teknik tedbirleri alacaktır:

1. **Uçtan Uca Kriptografi:**
   * Aktarım Sırasında (Data in Transit): TLS 1.3 zorunluluğu, SHA-256 SSL Pinning (Mobil istemci ile API Gateway arasında).
   * Durağan Halde (Data at Rest): Veritabanlarında ve mobil yerel önbellekte (SQLite/SQLCipher) AES-256 GCM şifreleme.
2. **Kimlik ve Erişim Yönetimi (IAM):** Geliştirici erişimlerinde Rol Tabanlı Yetkilendirme (RBAC), Çok Faktörlü Kimlik Doğrulama (MFA) ve VPN üzerinden IP kısıtlaması.
3. **Mobil Cihaz Güvenliği:** Mobil yerel depolamada biyometrik anahtarların iOS Keychain ve Android Keystore donanım güvenlik yongalarında (Secure Enclave / TEE) saklanması.

---

## 5. VERİ İHLALİ BİLDİRİMİ (DATA BREACH NOTIFICATION)

* **5.1. Acil Bildirim Süresi:** YÜKLENİCİ, proje bileşenlerini veya verilerini etkileyen herhangi bir güvenlik ihlali, yetkisiz erişim, fidye yazılımı atağı veya veri sızıntısı şüphesini tespit ettiği andan itibaren **en geç 24 (yirmi dört) saat içinde** MÜŞTERİ Veri Koruma İrtibat Kişisi'ne yazılı olarak bildirmekle yükümlüdür.
* **5.2. İhlal Raporu:** Bildirimde; ihlalin mahiyeti, etkilenen yaklaşık veri kaydı sayısı, sızan veri kategorileri, olası riskler ve alınan ivedi önlemler detaylandırılacaktır.
* **5.3. Yasal Bildirim Desteği:** KVKK Kurumu'na yapılacak 72 saatlik resmi ihlal bildirimi sürecinde YÜKLENİCİ tüm teknik log ve adli bilişim incelemelerini MÜŞTERİ'ye derhal sunacaktır.

---

## 6. DENETİM HAKKI VE VERİLERİN İADESİ/İMHASI

* **6.1. Denetim:** MÜŞTERİ veya onun adına hareket eden bağımsız denetçiler, YÜKLENİCİ'nin işbu DPA kapsamındaki yükümlülüklerine uyumunu yılda en az bir kez ve her veri ihlali şüphesinde haberli veya habersiz denetleme hakkına sahiptir.
* **6.2. Verilerin İadesi ve İmhası:** Sözleşmenin sona ermesi, feshi veya projenin kesin kabulünün tamamlanması halinde, YÜKLENİCİ elinde bulunan tüm MÜŞTERİ verilerini, test verilerini, şifreleme anahtarlarını 15 gün içinde MÜŞTERİ'ye güvenli kanaldan iade edecek ve kendi ortamlarındaki tüm kopyaları NIST 800-88 standardına uygun olarak güvenli biçimde yok ederek "İmha Tutanağı" tanzim edecektir.

---

## 7. CEZAİ VE HUKUKİ TAZMİNAT

YÜKLENİCİ veya personelinin işbu DPA hükümlerini, KVKK'yı veya Sigortacılık Kanunu sır saklama hükümlerini ihlal etmesi sebebiyle MÜŞTERİ aleyhine KVKK Kurulu, SEDDK veya adli mahkemelerce tesis edilecek her türlü idari para cezası, tazminat ve dava masrafları fer'ileriyle birlikte **YÜKLENİCİ'ye rücu edilir**. Bu maddede MSA'daki sorumluluk tavanı (liability cap) uygulanmaz.

---

İşbu DPA, Ana Hizmet Sözleşmesi'nin ayrılmaz Ek-3 parçası olarak taraflarca kabul edilmiştir.
