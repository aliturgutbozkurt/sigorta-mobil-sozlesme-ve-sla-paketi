# BİLGİ GÜVENLİĞİ, DEVSECOPS VE SEDDK UYUM ŞARTNAMESİ
**Ek Kodu:** EK-4 (AEG-NXR-SEC-2026-V1)  
**Ana Sözleşme:** AEG-NXR-MSA-2026-V1  
**Mevzuat Dayanağı:** SEDDK Bilgi Sistemleri Yönetmeliği ve Tebliği, BDDK Bilgi Sistemleri Kılavuzu, ISO/IEC 27001:2022, OWASP MASVS  

---

## 1. MEVZUAT UYUMU VE DIŞ HİZMET ALIMI KRİTERLERİ

* **1.1. SEDDK Uyum Zorunluluğu:** Sigortacılık ve Özel Emeklilik Düzenleme ve Denetleme Kurumu (SEDDK) "Sigortacılık ve Özel Emeklilik Sektörlerinde Bilgi Sistemleri Yönetmeliği" gereğince; dış hizmet sağlayıcı (YÜKLENİCİ) tarafından üretilen tüm yazılımlar ve altyapı mimarisi, mevzuatın öngördüğü güvenlik seviyelerine tam uyumlu olmak zorundadır.
* **1.2. Verilerin Yurt İçinde Tutulması (Veri Egemenliği):** Projeye ait tüm sunucular, BFF konteynerleri, veritabanları, önbellek kümeleri, log sunucuları ve yedekler **münhasıran Türkiye Cumhuriyeti sınırları içerisindeki** veri merkezlerinde barındırılacaktır. Yurt dışı bulut servislerine (AWS/Azure/GCP yurt dışı bölgeleri) kişisel veri ve sigortacılık işlem bilgisi aktarımı yapılamaz.
* **1.3. Denetim Hakkı ve Otorite İncelemesi:** SEDDK denetçileri ve MÜŞTERİ Teftiş Kurulu; YÜKLENİCİ'nin geliştirme ortamlarını, kaynak kod depolarını, güvenlik loglarını ve personelin güvenlik yetkinliklerini doğrudan denetleme yetkisine sahiptir.

---

## 2. DEVSECOPS VE GÜVENLİ YAZILIM GELİŞTİRME YAŞAM DÖNGÜSÜ (SSDLC)

Yazılım geliştirme sürecinin her adımı CI/CD hattına entegre otomatik güvenlik kontrolleriyle donatılacaktır:

```
+-------------------+      +-------------------+      +-------------------+      +-------------------+
|  1. KOD YAZIMI    | ---> |  2. CI BORU HATTI | ---> |  3. ARTIFACT & QA | ---> |  4. PROD DAĞITIM  |
|  Pre-commit Hook  |      |  SAST (SonarQube) |      |  DAST & API Scan  |      |  Cert Pinning     |
|  Secret Scanning  |      |  SCA (Dependency) |      |  Bağımsız Pentest |      |  WAF / mTLS       |
|  (Gitleaks)       |      |  Container Scan   |      |  UAT İmza         |      |  Store İnceleme   |
+-------------------+      +-------------------+      +-------------------+      +-------------------+
```

### 2.1. Gizli Bilgi ve Anahtar Sızıntısı Koruması (Secret Scanning):
* Kaynak kod depolarına (Git) hiçbir şekilde API Secret, Private Key, AWS tokenı, Firebase Service Account anahtarı veya veritabanı şifresi hardcoded olarak **yazılamaz**.
* `gitleaks` ve `trufflehog` pre-commit kancaları (hooks) geliştirici bilgisayarlarında zorunlu olacak; commit anında gizli anahtar tespit edilirse işlem engellenecektir.

### 2.2. Statik ve Dinamik Kod Analizi (SAST / DAST):
* Her Pull Request (PR) açıldığında SonarQube ve Snyk otomatik olarak çalışacaktır.
* OWASP Top 10 ve CWE/SANS Top 25 kapsamındaki açıklıklar (SQL Injection, XSS, Path Traversal, Insecure Deserialization) derhal geliştiriciye raporlanacak ve PR merge edilmeyecektir.

### 2.3. Bağımlılık ve Açık Kaynak Güvenliği (SCA):
* Kullanılan tüm üçüncü taraf kütüphanelerin (CocoaPods, Swift Package Manager, Gradle dependencies, npm paketleri) bilinen zafiyet (CVE) taramaları yapılacaktır.
* CVSS skoru 7.0 ve üzeri (High ve Critical) olan hiçbir zafiyetli kütüphane projeye dahil edilemez.

---

## 3. MOBİL UYGULAMA GÜVENLİK STANDARTLARI (OWASP MASVS L2)

Mobil istemciler (iOS & Android) OWASP MASVS Seviye 2 (Savunma Sanayii ve FinTech standartları) kriterlerini karşılayacaktır:

1. **MASVS-STORAGE (Veri Depolama):**
   * Hiçbir hassas veri cihazın yerel sandbox'ında düz metin (plain-text) saklanmayacaktır.
   * `SharedPreferences` veya `UserDefaults` yerine yalnızca hardware-backed Keychain / Android EncryptedSharedPreferences (Keystore) kullanılacaktır.
   * Ekran görüntüsü alma ve video kaydı koruması (Flag Secure - Android `FLAG_SECURE` ve iOS background snapshot masking) aktif edilecektir.
2. **MASVS-CRYPTO (Kriptografi):**
   * Zayıf algoritmalar (MD5, SHA1, DES, RC4) kesinlikle kullanılmayacaktır. Simetrik şifrelemede AES-GCM (256 bit), asimetrik şifrelemede RSA-4096 veya ECC (Curve25519) kullanılacaktır.
3. **MASVS-NETWORK (Ağ Güvenliği):**
   * Yalnızca TLS 1.3 protokolü kullanılacaktır. TLS 1.0, 1.1 ve 1.2 devre dışı bırakılacaktır.
   * İstemci ile API Gateway arasında Dinamik Sertifika Sabitleme (Dynamic SSL Certificate Pinning) uygulanacak; MITM (Man-in-the-Middle) proxy araçları (Burp Suite, Charles, Proxyman) trafiği çözemeyecektir.
4. **MASVS-RESILIENCE (Tersine Mühendislik ve Müdahale Direnci):**
   * Jailbreak / Root tespiti (cihaz manipüle edilmişse uygulama açılmayacak veya güvenli moda geçecektir).
   * Hata Ayıklayıcı Tespiti (Anti-Debugging - `ptrace`, `sysctl`, Frida ve Xposed framework tespiti).
   * Kod Karıştırma ve Bütünlük Doğrulama (Code Obfuscation & App Attest / Play Integrity API).

---

## 4. BAĞIMSIZ SIZMA TESTİ (PENETRATION TESTING) ZORUNLULUĞU

* **4.1. Akredite Test Firması:** Canlı ortama geçişten önce MÜŞTERİ tarafından belirlenecek Türk Standardları Enstitüsü (TSE) onaylı A veya B seviye bağımsız siber güvenlik test kuruluşu tarafından kapsamlı Sızma Testi (Gri ve Siyah Kutu) icra edilecektir.
* **4.2. Sıfır Kritik/Yüksek Zafiyet Şartı:** Pentest neticesinde ortaya çıkabilecek **Kritik (Critical)** ve **Yüksek (High)** seviyedeki tüm güvenlik açıkları YÜKLENİCİ tarafından **herhangi bir ek ücret talep edilmeksizin 7 (yedi) iş günü içinde** kapatılacaktır.
* **4.3. Doğrulama Testi:** Kapatılan açıklar için düzenlenecek doğrulama testinin ardından "Temiz Sızma Testi Raporu" alınması, Milestone 3 hakedişinin ödenmesinin ve canlıya çıkış izninin (Go-Live Gate) ön şartıdır.

---

## 5. KAYNAK KOD YEDİEMİNLİK SÖZLEŞMESİ (SOFTWARE ESCROW)

* **5.1. Escrow Amacı:** MÜŞTERİ'nin iş sürekliliğini güvence altına almak amacıyla, YÜKLENİCİ'nin iflas etmesi, konkordato ilan etmesi, ticari faaliyetini sonlandırması veya sözleşme şartlarını ağır biçimde ihlal ederek desteği kesmesi hallerine karşı kaynak kodlar yediemin altına alınır.
* **5.2. Teslim Edilecek Materyaller:** Mobil uygulamaların (iOS/Android) ve BFF servislerinin tüm kaynak kodları, derleme (build) betikleri, CI/CD pipeline tanımları, mimari dokümanları, veritabanı migration dosyaları ve üçüncü taraf bağımlılık kütüphaneleri 6 ayda bir güncellenmek üzere güvenilir bir Escrow Ajanı'na (veya noter nezdine) şifreli olarak tevdi edilir.
* **5.3. Kodun Serbest Bırakılma Şartları (Release Conditions):** YÜKLENİCİ'nin tasfiye olması, iflas masasına devredilmesi veya mahkeme kararıyla taahhütlerini yerine getiremediğinin kesinleşmesi durumunda Escrow Ajanı kaynak kodları münhasıran MÜŞTERİ'nin kullanımına açar.

---

İşbu Bilgi Güvenliği Şartnamesi, Ana Hizmet Sözleşmesi'nin ayrılmaz Ek-4 parçasıdır.
