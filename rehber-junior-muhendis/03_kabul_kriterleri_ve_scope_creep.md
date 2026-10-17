# BÖLÜM 3: KABUL KRİTERLERİ (DOD) VE "SCOPE CREEP" CANAVARI

Yazılım geliştirirken en çok duyacağın iki cümle şudur:
1. *"Ama benim bilgisayarımda çalışıyordu!"* (Yazılımcı)
2. *"Ya şuraya minicik bir buton daha ekleyiverin, 5 dakikalık iş zaten!"* (Müşteri)

İşte bu iki masum cümlenin arkasında, sözleşmelerin en tehlikeli maddeleri yatar: **Kabul Kriterleri (Acceptance Criteria)** ve **Kapsam Kayması (Scope Creep)**.

Gelin bunların ne anlama geldiğine bakalım.

---

## 1. "BENİM BİLGİSAYARIMDA ÇALIŞIYORDU" NEDEN BİR SÖZLEŞME İHLALİDİR?

Sözleşmenin **Ek-1 (SOW)** ve **MSA Madde 4**'ünde Kullanıcı Kabul Testleri (UAT) süreci anlatılır:
* Sprint bittiğinde kodunu staging ortamına yüklersin.
* Müşterinin (Aegis Sigorta) kalite kontrol uzmanları (QA) ve sigorta uzmanları sistemi test etmeye başlar.
* Sözleşme der ki: **"UAT sürecinde hiçbir P1 (Kritik) veya P2 (Büyük) hata bulunamaz. Bulunursa Kabul Tutanağı imzalanmaz!"**

### Gerçek Hayat Senaryosu:
Sen kodu en son model MacBook Pro'nda, iPhone 16 simülatöründe, hızlı fiber ofis internetiyle test ettin. Tıkır tıkır çalıştı.
Ama gerçek dünyada müşteri:
* 5 yıllık eski bir Android telefonda (Samsung Galaxy A12),
* Şehirlerarası yolda, tünelin içinde, 3G internet çekerken,
* Kaza yerinde, elleri titrerken o hasar fotoğrafını yüklemeye çalışıyor!

Eğer sen:
* Zayıf internet bağlantısını (`network timeout`, `retry policy`) hesaba katmadıysan,
* Fotoğrafı yüklemeden önce sıkıştırmadıysan ve 15 MB'lık RAW fotoğrafı göndermeye çalışıp `OutOfMemory` hatası aldıysan,
* Ekran boyutu küçük cihazlarda buton ekranın altına kayıp tıklanamaz hale geldiyse,

Müşteri test ekibi Jira'da **"P1 - Blocker Bug: Hasar fotoğrafı yüklenemiyor, uygulama çöküyor"** ticket'ı açar.
**Sonuç:** Faz kabulü reddedilir. Şirket o fazın karşılığı olan **3.125.000 TL'lik hakediş faturasını kesemez.** Şirketin nakit akışı tıkanır ve sebebi senin "simülatörde çalışıyordu" demendir!

> **Definition of Done (DoD) Kuralı:** Kod sadece senin simülatöründe değil; zayıf internette, eski cihazlarda, edge case verilerde ve yazılan unit testlerden (%85 coverage) başarıyla geçmeden "Bitti" (Done) statüsüne çekilemez!

---

## 2. "SCOPE CREEP" (KAPSAM KAYMASI) CANAVARI NEDİR?

Bir gün müşterinin ürün yöneticisiyle (Product Owner) Slack veya Teams üzerinden yazışıyorsun. Sana şöyle diyor:
> *"Ya Ahmetcim, kasko teklif ekranı süper olmuş eline sağlık! Yalnız bizim genel müdür yardımcısı baktı da, teklif ekranının altına bir de müşterinin evcil hayvanı var mı diye soran bir kutucuk koysak, varsa pati sigortası da önerseniz ne şahane olur! 10 dakikalık iş senin için, hallediverirsin değil mi?"*

Sen bir junior mühendis olarak kendini kanıtlamak, ne kadar yardımsever ve hızlı olduğunu göstermek istiyorsun ve diyorsun ki:
> *"Tabii ki Ali Bey, hemen hallediyorum!"*

### TEBRİKLER! TUZAĞA DÜŞTÜNÜZ! 💥

İşte buna yazılım sektöründe **"Scope Creep" (Kapsam Kayması)** denir.
Neden mi?

1. **Hiçbir İş 10 Dakika Değildir:**
   * O kutucuğu koymak için mobil UI'ı değiştireceksin.
   * Backend BFF'te yeni bir alan (`hasPet: boolean`) açacaksın.
   * Core sigortacılık veritabanına bu alanı yazacaksın.
   * Teklif hesaplama algoritmasını güncelleyeceksin.
   * Test uzmanı bunu test edecek, regression testleri yapılacak...
   * **10 dakikalık iş, takımın 4 gününü yedi!**
2. **Sprint Takvimi Patladı:**
   * O 4 gün yüzünden SOW'da taahhüt ettiğin asıl teslimat (örn: MASAK NFC kimlik okuma) yetişmedi.
   * Gecikilen her gün için sözleşmedeki **%0.2 gecikme cezası** işlemeye başladı!
3. **Şirket Para Kaybetti:**
   * Sözleşmenin **Ek-5 (Bakım ve Değişiklik Protokolü)** maddesini hatırla.
   * Bu yeni bir özelliktir (Feature). Normalde resmi bir **Değişiklik Talebi (CR)** açılmalı, analizi yapılmalı ve müşteri bunun için şirketimize **ek adam/gün faturası (günlük 20.000 TL)** ödemeliydi!
   * Sen ise şirketine 80.000 TL kazandırabilecek bir işi bedavaya yaptın ve üstüne asıl işi geciktirdin!

---

## 3. DOĞRU REFLEKS NE OLMALIDIR?

Müşteri veya üçüncü bir şahıs senden SOW dışı "küçük bir ricada" bulunduğunda cevabın her zaman şu olmalıdır:

> *"Ali Bey, fikir harika görünüyor! Ancak projemizin Teknik Şartnamesi (SOW) ve sprint kapsamımız kapsamında bu yeni bir gereksinim niteliğinde. Konuyu hemen Proje Yöneticimize ve Takım Liderimize aktarıyorum; onlar resmi Değişiklik Talebi (CR) sürecini ve efor planlamasını başlatsınlar, onaylanır onaylanmaz zevkle kodlayalım."*

Bu cevap seni profesyonel, sözleşme bilincine sahip ve olgun bir mühendis yapar. Şirketini de binlerce liralık zarardan ve gecikme cezalarından korur!
