# İŞ EMRİ VE TEKNİK ŞARTNAME (SOW - STATEMENT OF WORK)
**Ek Kodu:** EK-1 (AEG-NXR-SOW-2026-V1)  
**Ana Sözleşme:** AEG-NXR-MSA-2026-V1  
**Proje Adı:** AegisConnect Yeni Nesil Mobil Sigortacılık Platformu  
**Proje Süresi:** 24 Hafta (6 Ay) + 12 Ay Garanti  

---

## 1. PROJE GENEL TANIMI VE İŞ HEDEFLERİ

İşbu Teknik Şartname ve İş Emri; Aegis Sigorta A.Ş.'nin ("MÜŞTERİ") müşterilerine yönelik iOS ve Android tabanlı modern, güvenli, yüksek performanslı ve regülasyonlara (SEDDK, MASAK, KVKK) tam uyumlu mobil uygulamasının YÜKLENİCİ tarafından uçtan uca anahtar teslim geliştirilmesine ilişkin teknik ve operasyonel şartları düzenler.

### Temel İş Hedefleri:
1. Bireysel poliçe satışlarının mobilden gerçekleştirilme oranını ilk 12 ayda %35 artırmak.
2. Hasar bildirim sürelerini (FNOL - First Notice of Loss) ortalama 45 dakikadan 3 dakikaya düşürmek.
3. Kaza yerinde anında çekici, ikame araç ve eksper koordinasyonunu dijitalleştirmek.
4. Tamamlayıcı ve Özel Sağlık Sigortası (TSS/ÖSS) provizyon ve anlaşmalı kurum süreçlerini şeffaflaştırmak.
5. MASAK tebliğlerine uygun olarak çipli TC Kimlik Kartı NFC okuma ve biyometrik canlılık doğrulamasıyla şubesiz müşteri edinimi (Digital Onboarding) sağlamak.

---

## 2. TEKNİK MİMARİ VE TEKNOLOJİ YIĞINI (TECH STACK)

Sistem; yüksek ölçeklenebilirlik, askeri düzeyde güvenlik ve düşük gecikme süresi hedefleriyle tasarlanacaktır.

```
+-----------------------------------------------------------------------+
|              AegisConnect Mobile App (iOS & Android)                  |
|  SwiftUI (iOS 17+) / Jetpack Compose (Android 14+) / Clean Arch       |
|  NFC Chip Reader / Metal-Vulkan AI Camera / Biometric Keystore        |
+------------------------------------+----------------------------------+
                                     |  mTLS (TLS 1.3) + Cert Pinning
                                     v
+------------------------------------+----------------------------------+
|      API Gateway & Cloud Armor WAF (Rate Limiting, DDoS Shield)       |
+------------------------------------+----------------------------------+
                                     |
                                     v
+------------------------------------+----------------------------------+
|   Backend-for-Frontend (BFF) Cluster (NestJS / Go, k8s, Redis Cache)  |
+---------+--------------------+---------------------+------------------+
          |                    |                     |
          v                    v                     v
   +--------------+     +--------------+      +--------------+
   | Core AS400   |     | SBM / TRAMER |      | PayU / 3D-S  |
   | Insurance DB |     | Entegrasyonu |      | PCI-DSS Gate |
   +--------------+     +--------------+      +--------------+
```

### 2.1. İstemci (Mobile Client) Mimarisi:
* **İşletim Sistemi Desteği:** iOS 16.0 ve üzeri (Swift 6, SwiftUI, Combine); Android 12.0 (API Level 31) ve üzeri (Kotlin 2.0, Jetpack Compose, Coroutines/Flow).
* **Mimari Desen:** Clean Architecture + MVI (Model-View-Intent). Ağ katmanı ile arayüz mantığı tamamen ayrık olacaktır.
* **Güvenlik Katmanı:** SSL Pinning (Public Key Pinning), Jailbreak/Root tespiti, Anti-Tampering, Kod Karıştırma (Obfuscation - ProGuard/R8 & Swift Shield), Güvenli Donanım Saklama (iOS Keychain Secure Enclave / Android Hardware-backed Keystore).
* **Çevrimdışı Çalışma (Offline Mode):** Aktif poliçeler, acil iletişim numaraları ve dijital sağlık kartı SQLCipher ile cihazda AES-256 şifreli olarak önbelleklenecek; internet yokken dahi görüntülenebilecektir.

### 2.2. Backend-for-Frontend (BFF) & Entegrasyon Katmanı:
* **Çatı:** Node.js (NestJS Enterprise) / Go mikroservisleri.
* **Mesajlaşma & Olay Güdümlü Mimari:** Apache Kafka (Asenkron hasar bildirimleri ve SMS/Push bildirim kuyrukları).
* **Önbellek:** Dağıtık Redis Cluster (Session yönetimi, poliçe önbellekleme).
* **Konteynerizasyon:** Red Hat OpenShift / Kubernetes.

---

## 3. MODÜL BAZLI FONKSİYONEL GEREKSİNİMLER

### MODÜL 1: Dijital Kimlik, MASAK Uyumlu Kayıt ve Biyometri
* **1.1. NFC Çipli Kimlik Okuma:** Yeni TC Kimlik Kartlarındaki temassız çipin ICAO 9303 standardında MRZ ve NFC ile okunması, Nüfus ve Vatandaşlık İşleri (NVİ) kriptografik veri doğrulaması.
* **1.2. Biyometrik Canlılık (Liveness Detection):** Kullanıcının gerçek zamanlı video kaydı üzerinden pasif/aktif göz kırpma ve baş hareketi ile 3D yüz eşleştirme testi (ISO 30107-3 uyumlu).
* **1.3. Hızlı Giriş:** TouchID, FaceID ve Android BiometricPrompt ile biyometrik oturum açma; cihaz değiştiğinde SMS OTP + cihaz eşleme (Device Binding) zorunluluğu.

### MODÜL 2: Poliçe Portföyü ve Dijital Cüzdan
* **2.1. Poliçe Listeleme:** Yürürlükteki (Kasko, Trafik, DASK, Konut, Sağlık, Ferdi Kaza) ve süresi bitmiş poliçelerin anlık sorgulanması.
* **2.2. Dijital Poliçe Kartı ve Cüzdan:** Apple Wallet ve Google Wallet'a eklenebilir sigorta kartı.
* **2.3. PDF İndirme ve Doğrulama:** Karekodlu (QR) resmi poliçe suretinin indirilebilmesi, e-posta veya mesajlaşma kanallarıyla paylaşımı.
* **2.4. Teminat ve Muafiyet Detayları:** Poliçe kapsamındaki kaza, çekici hakkı, cam kırılması, mini onarım kotalarının görsel sayaçlarla gösterimi.

### MODÜL 3: Anında Fiyat Teklifi ve Online Satın Alma
* **3.1. 3 Adımda Teklif:** Plaka ve TC Kimlik No ile SBM (TRAMER) üzerinden araç model, hasarsızlık kademesi ve kasko değer listesi çekilerek 5 saniye içinde dinamik teklif üretimi.
* **3.2. Çapraz Satış ve Ek Teminatlar:** İkame araç tipi, yol yardım paketi, yurt dışı teminatı gibi opsiyonların tek dokunuşla eklenip çıkarılması ve anlık prim güncellemesi.
* **3.3. PCI-DSS Uyumlu Ödeme:** PayU / Banka Sanal POS entegrasyonu, 3D Secure 2.2 desteği, kayıtlı kartlar (Masterpass / Troy uyumlu), taksit seçenekleri.

### MODÜL 4: Akıllı Mobil Hasar Yönetimi (FNOL - Mobil Kaza Bildirimi)
* **4.1. GPS Tabanlı Kaza Yeri Tespiti:** Kaza yerinin koordinatlarının otomatik alınması, ters jeokodlama (Reverse Geocoding) ile adres doldurulması.
* **4.2. Mobil Kaza Tespit Tutanağı (e-Kaza):** Çift taraflı kazalarda karşı tarafın QR kod ile tutanağa dahil olması, dijital imza atılması ve anında SBM'ye iletimi.
* **4.3. Fotoğraf ve Hasar Çekimi (Kamera Güvenliği):** Galeriden fotoğraf yükleme engellenecek, sadece uygulama içi kamera ile anlık çekilen fotoğrafların EXIF/Metadata ve GPS damgası doğrulanacaktır.
* **4.4. Yapay Zeka Ön Ekspertiz:** Çekilen parça fotoğraflarının (tampon, far, kaput vb.) AI servisi ile ön analizi ve yaklaşık hasar şiddeti tespiti.
* **4.5. Canlı Çekici ve Asistans Takibi:** Talep edilen çekici aracının Uber tarzı harita üzerinde anlık konumunun müşteriye gösterilmesi.

### MODÜL 5: Tamamlayıcı ve Özel Sağlık (TSS/ÖSS) Provizyon Modülü
* **5.1. Anlaşmalı Sağlık Kurumları Rehberi:** GPS bazlı en yakın hastane, poliklinik ve eczanelerin filtrelenmesi (branş, uzmanlık, muayene fark ücreti).
* **5.2. e-Reçete ve Fatura Geri Ödeme Talebi:** Ayakta tedavi fatura ve reçetelerinin mobil kamerayla taranıp OCR ile okunması, geri ödeme dosyasının tek tuşla açılması.
* **5.3. Provizyon Takibi:** Hastanede bekleyen onay taleplerinin canlı durum izleme çubuğu (Talep Alındı -> İnceleniyor -> Onaylandı/Reddedildi).

### MODÜL 6: Acil Durum, Asistans ve Bildirim Merkezi
* **6.1. Panik / Kaza Butonu:** Tek dokunuşla 112 Acil ve Aegis Acil Operasyon Merkezi'ne konum iletme.
* **6.2. Zengin Bildirimler (Rich Push):** Poliçe yenileme hatırlatmaları, dolu/fırtına meteorolojik hasar uyarıları ve kampanya bildirimleri.

---

## 4. PROJE KİLOMETRE TAŞLARI VE TESLİMAT TAKVİMİ

Proje toplam 24 hafta (12 sprint) sürecek olup aşağıdaki ana kilometre taşlarından (Milestones) oluşur:

| Faz / Milestones | Hafta | Kapsam ve Çıktılar | Hakediş Oranı |
| :--- | :--- | :--- | :--- |
| **Milestone 0: Analiz & Mimari** | 1 - 4 | Sistem Mimari Tasarımı (SAD), Figma UI/UX Tasarım Sistemi, Core API Sözleşmeleri (Swagger/OpenAPI), DevSecOps CI/CD Kurulumu | %15 |
| **Milestone 1: Çekirdek Modüller** | 5 - 10 | Modül 1 (NFC/MASAK Giriş) + Modül 2 (Poliçe Portföyü) + Modül 3 (Teklif & Satış & Sanal POS). Staging ortamında uçtan uca demo. | %25 |
| **Milestone 2: Hasar & Sağlık** | 11 - 16 | Modül 4 (Hasar/Kaza, GPS, Kamera/AI) + Modül 5 (Sağlık Provizyon) + Modül 6 (Asistans & Push). Alfa sürümü yayını. | %25 |
| **Milestone 3: UAT & Güvenlik** | 17 - 20 | MÜŞTERİ Test Ekibi UAT Süreci, Bağımsız Akredite Pentest (Sızma Testi), Yük ve Stres Testleri (50.000 eşzamanlı kullanıcı), Bugfix sprinti. | %20 |
| **Milestone 4: Mağaza & Canlı** | 21 - 24 | App Store ve Google Play onayları, Soft Launch (%10 kullanıcı), Tam Canlıya Geçiş, Kesin Kabul ve 12 Aylık Garanti Başlangıcı. | %15 |

---

## 5. KABUL KRİTERLERİ (ACCEPTANCE CRITERIA) VE "BİTTİ" TANIMI (DOD)

Her bir kullanıcı hikayesi (User Story) ve sprint teslimatı aşağıdaki şartları sağlamak zorundadır:

1. **Birim Test Kapsamı (Unit Test Coverage):** İş mantığı (Business Logic) kodlarında test kapsamı **en az %85** olacaktır.
2. **Statik Kod Analizi (SonarQube):** SonarQube kalite kapısında (Quality Gate) sıfır "Security Hotspot", sıfır "Blocker/Critical Bug" ve maksimum %2 teknik borç oranı.
3. **Güvenlik & OWASP MASVS:** OWASP Mobile Application Security Verification Standard (MASVS Seviye L2) gereksinimleri karşılanacaktır.
4. **Performans Kriterleri:**
   * Soğuk Başlatma Süresi (Cold Start): < 1.5 saniye (Referans cihazlar: iPhone 13 ve Samsung Galaxy S22).
   * Sıcak Başlatma Süresi (Warm Start): < 0.5 saniye.
   * Ekran Geçiş Süreleri: < 300 ms (60/120 fps takılmasız akış - zero frame drops).
   * Bellek Sızıntısı (Memory Leak): LeakCanary ve Xcode Instruments ile doğrulanmış sıfır sızıntı.
5. **Dokümantasyon:** Tüm API uç noktaları OpenAPI 3.0 dokümantasyonuna sahip olacak; kurulum kılavuzları ve dağıtım betikleri (Fastlane) repoda yer alacaktır.

---

## 6. YÜKLENİCİ PERSONEL VE PROJE EKİBİ TAAHHÜDÜ

YÜKLENİCİ, proje süresince aşağıdaki asgari çekirdek ekibi projeye tam zamanlı (Full-Time Dedicated) tahsis edecektir:

* 1 x Proje Yöneticisi / Scrum Master (PMP / Agile Certified, Min 7 yıl deneyim)
* 1 x Baş Çözüm ve Güvenlik Mimarı (Min 10 yıl deneyim)
* 2 x Kıdemli iOS Mühendisi (Swift/SwiftUI, Min 5 yıl deneyim)
* 2 x Kıdemli Android Mühendisi (Kotlin/Compose, Min 5 yıl deneyim)
* 2 x Kıdemli Backend Mühendisi (NestJS/Go/Kafka, Min 5 yıl deneyim)
* 1 x Kıdemli UI/UX Tasarımcısı (Fintech/Insurtech uzmanlığı)
* 2 x QA & Test Otomasyon Mühendisi (Appium/Maestro)
* 1 x DevSecOps Mühendisi (Kubernetes/CI-CD/Security)

---

İşbu Teknik Şartname, Ana Hizmet Sözleşmesi'nin ayrılmaz bir parçası olup 6 ana bölümden ibarettir.
