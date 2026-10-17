# BÖLÜM 1: SLA, SLO VE SENİN GECE UYKUN

Sözleşmenin **Ek-2 (SLA & SLO)** bölümünü açtığında şöyle havalı bir tablo göreceksin:
* *"Kullanılabilirlik (Uptime): %99.90"*
* *"Crash-Free Users: ≥ %99.80"*
* *"P1 İlk Yanıt Süresi: 15 Dakika (7/24)"*
* *"Aşılan her saat için 25.000 TL ceza"*

Peki bu rakamlar senin için ne ifade ediyor? Gel bunu kod ve yaşam tarzı seviyesinde inceleyelim.

---

## 1. %99.90 UPTIME NE DEMEKTİR? MATEMATİĞE BAKALIM!

Bir ayda **30 gün × 24 saat × 60 dakika = 43.200 dakika** vardır.

* Eğer sözleşmemiz **%99.90** uptime diyorsa:
  * Sistemimizin bir ay boyunca **en fazla kapalı kalabileceği toplam süre: 43 dakika 12 saniyedir!**
* Eğer sistem bir ayda toplam 1 saat kapalı kalırsa ne olur?
  * Sözleşmeyi ihlal etmiş oluruz.
  * Müşteri o ayki bakım hakedişimizden **%10 ila %25 arasında doğrudan ceza keser** (Şirket para kaybeder).
  * Arıza 14 saati geçerse, şirket o ay tek kuruş para alamaz!

---

## 2. MOBİL ÇÖKME ORANI: FORCE UNWRAP (`!`) YAPARSAN NE OLUR?

Sözleşmede bir madde var: **"Crash-Free Users ≥ %99.80"**.

Aegis Sigorta'nın **100.000 aktif mobil kullanıcısı** olduğunu varsayalım.
* %99.80 demek, ay boyunca bu 100.000 kişiden **en fazla 200 tanesi** uygulamada çökme (crash) yaşayabilir demektir!
* Eğer 201. kişi çökme yaşarsa, sözleşme hedefi kırılır (SLO ihlali).

### Junior Hatası Örneği (Swift & Kotlin):
Yeni bir kampanya ekranı yapıyorsun. Backend'den poliçe verisi bekliyorsun. Aceleyle şöyle bir satır yazdın:

```swift
// Swift'te ölümcül hata: Force Unwrap (!)
let policyEndDate = user.activePolicy!.expirationDate!
```
veya Kotlin'de:
```kotlin
// Kotlin'de ölümcül hata: Double Bang (!!)
val policyEndDate = user.activePolicy!!.expirationDate!!
```

Bir gün müşteri sisteme giriş yapıyor ama henüz hiçbir poliçesi yok (`activePolicy == nil` / `null`).
Ne oldu?
Uygulama anında **CRASH** oldu ve kapandı!

Pazartesi sabahı yeni güncelleme mağazaya çıktı. 10.000 yeni kullanıcı uygulamayı açtı ve 3.000 tanesinin henüz aktif poliçesi yoktu.
**Sonuç:** 3.000 kişi aynı anda çöktü. Crash-Free oranı %99.80'den bir anda **%97.00'ye düştü!**
Sözleşme ihlal edildi, P1 alarmı çaldı ve CTO masanıza doğru yürümeye başladı...

> **Altın Kural:** Asla ama asla force unwrap (`!`, `!!`) kullanma! Her zaman `guard let`, `if let`, optional chaining (`?.`) veya safe Elvis operatörleri (`?:`) kullan.

---

## 3. P1 - KRİTİK ALARMI: PAGERDUTY GECE 03:15'TE ÇALARSA...

Sözleşmenin 3. maddesindeki tabloyı hatırla:
* **P1 Arızası:** Mobil uygulamanın açılmaması, poliçe satın alınamaması, hasar bildiriminin çalışmaması.
* **İlk Yanıt Süresi:** **15 Dakika (7/24/365)**.
* **Kalıcı Çözüm:** **4 Saat**.

### On-Call (Nöbetçi) Mühendis Ne Yapar?
Bir gün sana nöbet sırası gelecek. Yanında şirket telefonu ve laptopunla gezeceksin.
Gece 03:15'te telefonun siren sesiyle çalar: **"CRITICAL: Payment Gateway 3DS verification returning 500 error!"**

1. **İlk 15 dakika içinde:** Yatağından fırlayıp bilgisayarı açacak, VPN'e bağlanacak ve PagerDuty'de **"Acknowledge" (Onayladım, inceliyorum)** butonuna basacaksın. Eğer basmazsan 15. dakikada sistem senin Takım Liderini, 30. dakikada ise Direktörü arar.
2. **Sorunu Tespiti (Triage):** Loglara bakacaksın. Neden 500 veriyor? Yeni bir banka POS entegrasyonu mu çöktü? Yoksa son attığımız PR mı bir değişkeni yanlış parse ediyor?
3. **Workaround (Geçici Çözüm - 2 Saat):** Eğer hata tek bir bankanın POS'undaysa, Remote Config'den o bankayı hemen pasife alıp trafiği Garanti veya İş Bankası POS'una yönlendireceksin.
4. **Patch (Kalıcı Düzeltme - 4 Saat):** Hatayı kodda düzeltecek, test edecek ve hotfix olarak canlıya çıkacaksın.

### Ya 4 Saati Geçerse?
Sözleşmeyi aç: **"Aşılan her saat için 25.000 TL cezai şart uygulanır."**
Yani sabah 07:15'e kadar düzeltemezsen, şirketin kasasından her 60 dakikada bir 25.000 TL eksilecek!

---

## 4. HATA BÜTÇESİ (ERROR BUDGET) NEDİR?

SLO hedefin %99.90 ise, geriye kalan **%0.10 senin "Hata Bütçendir" (Error Budget).**
* Bu bütçe senin yeni özellikler (features) denemen, cesur güncellemeler yapman için ayrılmış paydır.
* Ama eğer dikkatsiz kodlama yüzünden bu %0.10'luk bütçeyi ilk haftadan tüketirseniz:
  * Takım Lideri derhal **"Feature Freeze" (Yeni özellik geliştirmeyi durdurma)** ilan eder.
  * Tüm yeni ekranlar durur; tüm takım sadece teknik borç temizlemeye ve bug fix yapmaya başlar.

**Özetle:** Sözleşmedeki SLA rakamları soyut bir hukuk kuralı değildir; doğrudan senin kod yazarken gösterdiğin özenin, null-safety kontrolünün ve yazdığın birim testlerin yansımasıdır!
