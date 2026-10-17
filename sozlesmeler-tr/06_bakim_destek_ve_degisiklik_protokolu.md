# BAKIM, DESTEK VE DEĞİŞİKLİK YÖNETİMİ PROTOKOLÜ (CR & MAINTENANCE)
**Ek Kodu:** EK-5 (AEG-NXR-MNT-2026-V1)  
**Ana Sözleşme:** AEG-NXR-MSA-2026-V1  
**Proje Adı:** AegisConnect Mobil Sigortacılık Ekosistemi  
**Kapsam:** Canlı Sonrası Garanti, İşletim Sistemi Uyumluluğu ve Değişiklik Yönetimi (CR)  

---

## 1. GARANTİ VE DÖNEMSEL BAKIM HİZMETLERİ

* **1.1. 12 Aylık Garanti Süresi:** Kesin Kabul tarihini takip eden ilk 12 ay boyunca sunulan tüm hata giderme, optimizasyon ve uyumluluk hizmetleri proje bedeline dahildir ve **ücretsizdir**.
* **1.2. Yıllık Bakım Sözleşmesi (Garanti Sonrası):** 12 aylık garanti süresinin bitiminde MÜŞTERİ'nin talebi halinde, ilk yılki toplam proje bedelinin yıllık **%18'i (on sekiz)** karşılığında 1'er yıllık periyotlarla SLA seviyelerini içeren Bakım ve Destek Sözleşmesi yenilenebilir.
* **1.3. Periyodik Sağlık Kontrolleri (Health Checks):** YÜKLENİCİ, her ay düzenli olarak sistem performansını, veritabanı indekslerini, Redis bellek kullanımını, Crashlytics çökme oranlarını ve API gecikmelerini analiz ederek MÜŞTERİ'ye aylık "Sistem Sağlık Raporu" sunacaktır.

---

## 2. İŞLETİM SİSTEMİ VE MAĞAZA UYUMLULUK TAAHHÜDÜ

Mobil ekosistem hızla değişen bir yapıya sahiptir. YÜKLENİCİ bakım süresince aşağıdaki uyumlulukları sağlamakla yükümlüdür:

* **2.1. Majör İşletim Sistemi Güncellemeleri:** Apple ve Google tarafından her yıl yayınlanan yeni ana sürümler (örn. iOS 19, Android 16) için beta döneminden itibaren uyumluluk testleri yapılacak; işletim sisteminin genel kullanıma sunulduğu (GA) gün veya en geç 15 gün içinde uygulamanın yeni işletim sisteminde hatasız çalıştığı güncel sürüm mağazalara yüklenecektir.
* **2.2. Hedef SDK Seviyesi Zorunlulukları (Target SDK):** Google Play Store'un her yıl Ağustos ayında zorunlu tuttuğu "Target SDK Level" güncellemeleri ve Apple'ın Xcode/iOS SDK asgari sürüm şartları gecikmeksizin yerine getirilecektir.
* **2.3. Üçüncü Taraf SDK ve API Değişiklikleri:** Firebase, SBM/TRAMER, SMS sağlayıcıları veya banka sanal POS altyapılarındaki zorunlu API sürüm değişiklikleri (deprecations) bakım kapsamında zamanında adapte edilecektir.

---

## 3. DEĞİŞİKLİK YÖNETİMİ (CHANGE REQUEST - CR) SÜRECİ

Proje şartnamesinde (SOW) yer almayan yeni bir işlev, ekran veya mimari değişiklik talep edildiğinde işletilecek resmi akış aşağıda belirlenmiştir:

```
+-----------------------------------------------------------------------------------------+
|                                DEĞİŞİKLİK YÖNETİM AKIŞI                                  |
|                                                                                         |
| 1. TALEP:           MÜŞTERİ resmi Değişiklik Talep Formu (CRF) iletir.                  |
|        |                                                                                |
|        v                                                                                |
| 2. ETKİ ANALİZİ:    YÜKLENİCİ 5 iş günü içinde teknik fizibilite, güvenlik, mimari etki|
|                     ve Adam/Gün (Man-Day) efor analizini sunar.                         |
|        |                                                                                |
|        v                                                                                |
| 3. TEKLİF & ONAY:   MÜŞTERİ efor ve maliyet teklifini yazılı olarak onaylar (veya ret). |
|        |                                                                                |
|        v                                                                                |
| 4. SPRINT DAHİLİ:   Onaylanan CR, en yakın uygun sprint planına alınarak kodlanır.       |
|        |                                                                                |
|        v                                                                                |
| 5. UAT & CANLI:     Test edilip onaylanan CR için ek hakediş faturası düzenlenir.       |
+-----------------------------------------------------------------------------------------+
```

---

## 4. HATA (BUG) İLE DEĞİŞİKLİK TALEBİ (CR) ARASINDAKİ AYRIM

Sözleşme anlaşmazlıklarını önlemek amacıyla aşağıdaki kesin kıstaslar esas alınır:

* **HATA (BUG - Ücretsiz Kapsam):**
  * Teknik şartnamede (SOW) veya onaylı Figma tasarımlarında tanımlanmış bir fonksiyonun beklendiği gibi çalışmaması.
  * Mobil uygulamanın çökmesi (Crash / ANR), bellek tüketiminin aşırı yükselmesi, API bağlantısının kopması.
  * Veri tabanına kaydedilen verinin bozulması veya yanlış hesaplanması (örn: prim matrahının yanlış çarpılması).
* **DEĞİŞİKLİK TALEBİ (CR - Ücretli Kapsam):**
  * SOW ve onaylı tasarımlarda bulunmayan yeni bir sigorta ürününün (örn: Siber Güvenlik Sigortası) eklenmesi.
  * MÜŞTERİ'nin daha önce onayladığı bir ekran akışını veya kullanıcı deneyimini (UX) kökten değiştirmek istemesi.
  * MÜŞTERİ tarafındaki harici bir backend API'nin veri sözleşmesini (Request/Response şeması) tek taraflı değiştirmesi ve mobil istemcinin yeniden yazılmasını gerektirmesi.

---

## 5. ROL BAZLI ADAM/GÜN (MAN-DAY) RAYİÇ BEDELLERİ (2026-2027)

Onaylanan Değişiklik Taleplerinde uygulanacak tavan adam/gün birim fiyatları aşağıda belirtilmiştir (TÜİK Yurt İçi ÜFE oranında yıllık güncellenir):

| Uzmanlık Rolü | Seviye / Deneyim | Adam/Gün Rayiç Bedeli (TL + KDV) |
| :--- | :--- | :--- |
| Baş Çözüm Mimarı (Solution Architect) | Principal / 10+ Yıl | 28.000 TL |
| Kıdemli Mobil Yazılım Mühendisi | Senior iOS / Android (5+ Yıl) | 20.000 TL |
| Kıdemli Backend / Entegrasyon Mühendisi| Senior NestJS / Go (5+ Yıl) | 19.500 TL |
| UI/UX Ürün Tasarımcısı | Senior FinTech Designer | 16.500 TL |
| QA & Test Otomasyon Mühendisi | Senior SDET | 15.000 TL |
| DevSecOps & Siber Güvenlik Uzmanı | Senior DevSecOps | 22.000 TL |

---

## 6. SÜRÜM DAĞITIM VE AŞAMALI YAYIN POLİTİKASI (STAGED ROLLOUT)

Canlı ortam risklerini minimize etmek amacıyla mağaza güncellemelerinde aşamalı dağıtım uygulanacaktır:

* **Adım 1:** TestFlight / Google Play Internal Testing (İç Paydaşlar - 50 kullanıcı).
* **Adım 2:** Aşamalı Yaygınlaştırma (Google Play & Apple Phased Release):
  * 1. Gün: Kullanıcıların %5'i
  * 2. Gün: Kullanıcıların %10'u
  * 3. Gün: Kullanıcıların %20'si
  * 5. Gün: Kullanıcıların %50'si
  * 7. Gün: Kullanıcıların %100'ü (Tam Dağıtım)
* **Adım 3 (Acil Geri Alma / Kill-Switch):** Yeni bir sürümde beklenmedik bir kritik hata (P1) görülmesi durumunda uzaktan konfigürasyon (Firebase Remote Config) ile ilgili modül anında pasife alınacak veya mağazadan zorunlu eski sürüme dönüş (Force Update / Min Supported Version) tetiklenecektir.

---

İşbu Protokol, Ana Hizmet Sözleşmesi'nin ayrılmaz Ek-5 parçasıdır.
