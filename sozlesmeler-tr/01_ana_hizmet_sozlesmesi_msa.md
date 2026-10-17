# KURUMSAL YAZILIM GELİŞTİRME VE ENTEGRASYON ANA HİZMET SÖZLEŞMESİ (MSA)
**Doküman Kodu:** AEG-NXR-MSA-2026-V1  
**Proje Adı:** AegisConnect Mobil Sigortacılık Ekosistemi (iOS & Android)  
**Tarih:** 18 Ekim 2026  

---

## TARAFLAR

İşbu Ana Hizmet Sözleşmesi ("Sözleşme"), bir tarafta:

1. **Aegis Sigorta Anonim Şirketi**  
   Büyükdere Caddesi No: 195, Levent / Beşiktaş / İstanbul adresinde mukim, Maslak V.D. 0091234567 vergi kimlik numaralı, SEDDK tarafından ruhsatlandırılmış sigorta şirketi (Bundan böyle **"MÜŞTERİ"** veya **"AEGIS"** olarak anılacaktır),  
   ile diğer tarafta:

2. **Nexora Yazılım ve Bilişim Teknolojileri Anonim Şirketi**  
   İTÜ ARI Teknokent 3 Binası No: 4/104, Maslak / Sarıyer / İstanbul adresinde mukim, Sarıyer V.D. 6319876543 vergi kimlik numaralı teknoloji şirketi (Bundan böyle **"YÜKLENİCİ"** veya **"NEXORA"** olarak anılacaktır).

MÜŞTERİ ve YÜKLENİCİ münferiden **"Taraf"**, müştereken **"Taraflar"** olarak anılacaktır.

---

## 1. TANIMLAR VE YORUM

İşbu Sözleşme’de ve eklerinde kullanılan aşağıdaki terimler, aksi açıkça belirtilmedikçe şu anlamlara gelecektir:

* **1.1. Mobil Uygulama / Yazılım:** iOS (Apple App Store) ve Android (Google Play Store) işletim sistemlerinde çalışacak, sigortacılık ürünlerinin satışı, hasar yönetimi, poliçe takibi, provizyon ve acente destek süreçlerini içeren **"AegisConnect Mobil"** istemcisi ve buna bağlı Backend-for-Frontend (BFF) mimarisini.
* **1.2. İş Emri (SOW - Statement of Work):** Projenin teknik kapsamını, kilometre taşlarını, kabul kriterlerini ve teslim takvimini düzenleyen Ek-1 dokümanını.
* **1.3. SLA (Hizmet Seviyesi Taahhüdü):** Sistemin çalışma sürekliliği, yanıt süreleri, arıza giderme hızları ve hata derecelendirmelerini düzenleyen Ek-2 dokümanını.
* **1.4. Gizlilik ve Veri Koruma Sözleşmesi (DPA):** 6698 sayılı KVKK ve ilgili mevzuat uyarınca kişisel verilerin işlenmesi ve gizliliğini düzenleyen Ek-3 dokümanını.
* **1.5. SEDDK Düzenlemeleri:** Sigortacılık ve Özel Emeklilik Düzenleme ve Denetleme Kurumu mevzuatı ve Bilgi Sistemleri Tebliği'ni.
* **1.6. Fikri Mülkiyet Hakları (IP):** 5846 sayılı FSEK ve 6769 sayılı SMK kapsamında doğan kaynak kodlar, tasarımlar, mimari belgeler, algoritmalar ve telif haklarını.
* **1.7. Kaynak Kod:** İnsan tarafından okunabilir ve derlenebilir biçimdeki Swift, Kotlin, TypeScript/Dart vb. programlama dili dosyaları, konfigürasyon betikleri ve CI/CD akışlarını.
* **1.8. UAT (Kullanıcı Kabul Testleri):** Müşteri test ekipleri ve iş birimleri tarafından sistemin Teknik Şartname’ye uygunluğunun doğrulandığı aşamayı.
* **1.9. Hata / Kusur (Bug/Defect):** Yazılımın teknik şartnamede belirtilen fonksiyonları yerine getirememesi veya güvenlik/performans hedeflerini karşılayamaması halini.

---

## 2. SÖZLEŞMENİN AMACI VE KAPSAMI

* **2.1.** İşbu Sözleşme'nin amacı; MÜŞTERİ’nin dijital dönüşüm vizyonu doğrultusunda bireysel ve kurumsal sigortalılarına sunacağı, uçtan uca modern mobil sigortacılık platformunun (AegisConnect Mobile) YÜKLENİCİ tarafından tasarlanması, geliştirilmesi, test edilmesi, MÜŞTERİ ana sigortacılık çekirdeği (Core Insurance AS400 / SAP / SBM) ile entegre edilmesi, mağazalara yüklenmesi ve garanti süresince bakım-destek hizmetlerinin sağlanmasına ilişkin usul ve esasları belirlemektir.
* **2.2.** Sözleşme, Taraflar arasında akdedilecek tüm İş Emirleri (SOW), Hizmet Seviyesi Anlaşmaları (SLA) ve Değişiklik Talepleri (CR) için çatı sözleşme (Master Agreement) niteliğindedir. Çelişki durumunda aksi özel olarak belirtilmedikçe işbu Ana Sözleşme hükümleri önceliklidir.

---

## 3. TARAFLARIN HAK VE YÜKÜMLÜLÜKLERİ

### 3.1. YÜKLENİCİ'nin Yükümlülükleri:
* **3.1.1. Mesleki Özen:** YÜKLENİCİ, işbu projeyi basiretli bir tacir ve sektörün en iyi mühendislik standartlarına (Clean Architecture, SOLID, OWASP Mobile Security, SEDDK Bilgi Sistemleri Uyum) uygun olarak ifa edecektir.
* **3.1.2. Personel Nitelikleri ve Anahtar Personel:** Projede görevlendirilecek personelin kıdem ve yetkinlikleri SOW dokümanında belirtilen gereksinimlere uygun olacaktır. Baş Mimar (Lead Architect) ve Mobil Takım Lideri gibi "Anahtar Personel", MÜŞTERİ'nin yazılı onayı olmaksızın projeden çekilemez. Ayrılma durumunda en az 30 gün önceden bildirilecek ve eşdeğer yetkinlikte devir planı uygulanacaktır.
* **3.1.3. Güvenli Kodlama ve Denetim:** YÜKLENİCİ, yazılımı statik kod analizi (SAST), dinamik kod analizi (DAST) ve bağımlılık tarama (SCA) araçlarından geçirerek sıfır yüksek/kritik zafiyet (zero critical/high vulnerability) prensibiyle teslim edecektir.
* **3.1.4. Bağımlılık ve Açık Kaynak Yönetimi:** YÜKLENİCİ, MÜŞTERİ'nin yazılı izni olmaksızın kaynak kodun açıklanmasını zorunlu kılan copyleft (GPL, AGPL vb.) lisanslı açık kaynak kütüphaneleri projeye dahil edemez. Sadece MIT, Apache 2.0 veya BSD lisanslı kütüphaneler kullanılabilir.

### 3.2. MÜŞTERİ'nin Yükümlülükleri:
* **3.2.1. Ortam ve Entegrasyon Sağlama:** MÜŞTERİ, YÜKLENİCİ'nin geliştirmeyi sürdürebilmesi için gerekli olan test ortamlarını (Sandbox/Staging), Core Insurance API belgelerini, VPN erişimlerini ve test verilerini gecikmeksizin sağlamakla yükümlüdür.
* **3.2.2. Geri Bildirim ve Kabul Süreçleri:** MÜŞTERİ, kendisine teslim edilen sprint sürümlerini ve kilometre taşı teslimatlarını SOW'da tanımlanan süreler içerisinde inceleyerek yazılı onay veya gerekçeli ret bildiriminde bulunacaktır.

---

## 4. PROJE YÖNETİMİ, TESLİM VE KABUL SÜREÇLERİ

* **4.1. Metodoloji:** Proje, 2 haftalık sprint döngülerinden oluşan Agile (Scrum) metodolojisiyle yürütülecektir. Sprint planlama, daily standup, sprint review ve retrospektif toplantıları düzenli olarak işletilecektir.
* **4.2. Geçici Kabul:** Tüm fonksiyonel sprintlerin tamamlanmasının ardından Alfa ve Beta sürümleri üzerinden 20 (yirmi) iş günü sürecek Kullanıcı Kabul Testleri (UAT) icra edilir.
* **4.3. Kabul Kriterleri ve Bloklayıcı Hatalar:** UAT süresince hiçbir P1 (Kritik/Bloklayıcı) ve P2 (Büyük/Major) seviyesinde açık hata bulunmaması, P3 seviyesindeki hataların ise giderim planına bağlanmış olması Kabul Tutanağı imzalanmasının ön koşuludur.
* **4.4. Kesin Kabul:** Uygulamanın Apple App Store ve Google Play Store'da başarılı şekilde yayınlanmasını ve canlı ortamda 30 (otuz) takvim günü kesintisiz ve stabil çalıştığının doğrulanmasını müteakip Kesin Kabul Tutanağı imzalanır.

---

## 5. MALİ HÜKÜMLER, HAKEDİŞ VE ÖDEME KOŞULLARI

* **5.1. Proje Bedeli:** Projenin toplam bedeli İş Emri (SOW)'nde belirtildiği üzere **12.500.000 TL + KDV** (On İki Milyon Beş Yüz Bin Türk Lirası) sabit fiyat (Fixed Price) modelindedir.
* **5.2. Ödeme Planı (Kilometre Taşlarına Dayalı Hakediş):**
  * %15: Sözleşme İmzası, Mimari Tasarım ve UX Prototip Onayı (Faz 0)
  * %25: Temel Sigortacılık Modülleri (Poliçe/Teklif/Ödeme Entegrasyonları) Teslimi (Faz 1)
  * %25: Hasar Bildirimi, Canlı Fotoğraf/OCR ve Provizyon Modülleri Teslimi (Faz 2)
  * %20: UAT Tamamlanması ve Başarılı Pentest Raporunun İbrazı (Faz 3)
  * %15: Canlıya Çıkış (Store Approval) ve Kesin Kabul Onayı (Faz 4)
* **5.3. Vade:** Hakediş onayını takip eden e-faturanın MÜŞTERİ'ye tebliğinden itibaren 30 (otuz) gün net vadelidir.
* **5.4. Değişiklik Talepleri (Change Request):** Sözleşme kapsamı dışındaki ek talep ve geliştirmeler, Taraflarca yazılı mutabakata varılacak adam/gün (Man-Day) rayiç bedeli üzerinden ayrıca faturalandırılacaktır.

---

## 6. FİKRİ VE SINAİ MÜLKİYET HAKLARI (IP)

* **6.1. Fikri Mülkiyetin MÜŞTERİ’ye Devri:** YÜKLENİCİ tarafından işbu Sözleşme kapsamında üretilen tüm kaynak kodlar, algoritmalar, arayüz tasarımları, veritabanı şemaları, iş mantığı akışları ve teknik dokümantasyon üzerindeki 5846 sayılı FSEK md. 14 (Umuma Arz), md. 15 (Adın Belirtilmesi), md. 16 (Eserde Değişiklik Yapılmasını Men) ile md. 21 (İşleme), md. 22 (Çoğaltma), md. 23 (Yayma), md. 24 (Temsil) ve md. 25 (İşaret, Ses ve/veya Görüntü Nakline Yarayan Araçlarla Umuma İletim) hakları, kesin kabul ve ödemelerin tamamlanması ile birlikte gayrikabili rücu olarak, coğrafi ve süre sınırı olmaksızın münhasıran **MÜŞTERİ’ye devredilmiş sayılır**.
* **6.2. Yüklenici Ön Mevcut Varlıkları (Background IP):** YÜKLENİCİ'nin daha önceden geliştirdiği genel geçer yazılım kütüphaneleri, yardımcı kod blokları veya framework bileşenleri YÜKLENİCİ mülkiyetinde kalır; ancak YÜKLENİCİ, MÜŞTERİ'ye bu bileşenleri AegisConnect sistemi kapsamında sonsuz, geri alınamaz, telifsiz ve devredilebilir bir kullanım lisansı verdiğini kabul ve taahhüt eder.
* **6.3. Kaynak Kod Teslimi:** YÜKLENİCİ, her sprint sonunda ve kesin kabul aşamasında tüm kaynak kodları MÜŞTERİ’nin kurumsal GitLab/GitHub deposuna (repository) eksiksiz, derlenebilir ve bağımlılıkları belgelenmiş halde push etmek zorundadır.

---

## 7. GİZLİLİK VE KİŞİSEL VERİLERİN KORUNMASI (KVKK / MEVZUAT)

* **7.1.** Taraflar, proje kapsamında birbirlerine aktarılacak her türlü ticari, teknik, mali ve operasyonel bilginin gizli bilgi olduğunu kabul eder.
* **7.2. Sigorta Verilerinin Gizliliği:** 5684 sayılı Sigortacılık Kanunu md. 31/B (Sır Saklama Yükümlülüğü) gereğince, sigortalılara ait poliçe, hasar, araç ve sağlık bilgileri "Sır" niteliğindedir. YÜKLENİCİ personeli bu sırları hiçbir surette üçüncü kişilerle paylaşamaz ve kendi çıkarları için kullanamaz.
* **7.3. KVKK ve Veri İşleyen Sıfatı:** MÜŞTERİ "Veri Sorumlusu", YÜKLENİCİ ise "Veri İşleyen" konumundadır. YÜKLENİCİ, Ek-3'teki DPA hükümlerine ve KVKK Kurul kararlarına harfiyen uyacağını taahhüt eder. Canlı müşteri verisi test ortamlarında asla kullanılamaz; sadece anonimleştirilmiş/maskelenmiş sentetik test verisi kullanılacaktır.

---

## 8. GARANTİ, BAKIM VE AYIBA KARŞI TEKEFFÜL

* **8.1. Garanti Süresi:** Kesin Kabul tarihinden itibaren **12 (on iki) ay** boyunca YÜKLENİCİ, yazılımın teknik şartnamelere uygun çalışacağını, gizli ayıplardan ari olduğunu garanti eder.
* **8.2. Garanti Kapsamı:** Garanti süresi boyunca ortaya çıkan tüm yazılım hataları (Bug), bellek sızıntıları, işletim sistemi minor güncellemelerinden (iOS 18.x, Android 15.x) kaynaklanan uyumsuzluklar ve performans anomalileri YÜKLENİCİ tarafından Ek-2 SLA koşullarına uygun olarak **ücretsiz** giderilecektir.
* **8.3. Müdahale Edilmeme Durumu:** Hatanın MÜŞTERİ veya üçüncü şahısların kaynak kodda yaptığı izinsiz değişikliklerden veya MÜŞTERİ core sistemlerindeki altyapı arızalarından kaynaklanması halinde bu durum garanti kapsamı dışındadır.

---

## 9. CEZAİ ŞARTLAR VE SORUMLULUK SINIRLARI

* **9.1. Gecikme Cezası:** YÜKLENİCİ'den kaynaklanan nedenlerle Faz teslimatlarının iş takvimine göre gecikmesi halinde, MÜŞTERİ gecikilen her takvim günü için geciken faz bedelinin **%0,2'si (binde iki)** oranında gecikme cezası kesme hakkına sahiptir. Gecikmenin 30 günü aşması halinde MÜŞTERİ sözleşmeyi haklı nedenle derhal feshedebilir.
* **9.2. SLA Kesinti Cezaları:** Canlı sistemdeki kesinti veya arıza müdahale sürelerinin aşılması durumunda Ek-2 SLA tablosundaki cezai indirim oranları bir sonraki hakedişten mahsup edilir.
* **9.3. Sorumluluk Tavanı (Liability Cap):** Tarafların işbu Sözleşme kapsamındaki toplam mali sorumluluğu (ağır kusur, kasıt, gizlilik ihlali ve KVKK idari para cezalarına sebebiyet verme durumları hariç olmak üzere), Sözleşme kapsamında fiilen ödenmiş olan toplam bedelin **%100'ünü** geçemez.

---

## 10. SEDDK VE DÜZENLEYİCİ KURUM DENETİM HAKLARI

* **10.1.** MÜŞTERİ, SEDDK ve diğer yasal otoritelerin düzenlemelerine tabi bir finansal kuruluştur. YÜKLENİCİ; MÜŞTERİ iç denetçilerinin, bağımsız siber güvenlik denetim firmalarının ve SEDDK murakıplarının proje kaynak kodlarını, mimari şemaları ve geliştirme süreçlerini yerinde veya uzaktan denetlemesine tam iş birliği sağlayacaktır.
* **10.2. Kaynak Kod Yediemin (Software Escrow):** YÜKLENİCİ'nin iflası, konkordato ilan etmesi veya tasfiyeye girmesi ihtimaline binaen, en güncel kaynak kodlar ve derleme kılavuzları bağımsız bir Escrow kurumunda (veya noter nezdinde şifreli olarak) muhafaza altına alınacaktır.

---

## 11. SÖZLEŞMENİN FESHİ

* **11.1. Haklı Nedenle Fesih:** Taraflardan birinin sözleşme yükümlülüklerini esaslı şekilde ihlal etmesi ve yazılı ihtara rağmen 15 (on beş) gün içinde ihlali gidermemesi halinde diğer Taraf sözleşmeyi derhal ve tazminat hakları saklı kalmak kaydıyla feshedebilir.
* **11.2. Feshin Sonuçları:** Fesih halinde YÜKLENİCİ, fesih anına kadar geliştirilmiş olan tüm kaynak kodları, tasarımları, dokümanları ve MÜŞTERİ varlıklarını derhal MÜŞTERİ'ye teslim etmekle yükümlüdür.

---

## 12. UYUŞMAZLIKLARIN ÇÖZÜMÜ VE YETKİLİ MAHKEME

İşbu Sözleşme Türkiye Cumhuriyeti Kanunlarına tabidir. Sözleşmenin uygulanmasından doğabilecek her türlü uyuşmazlığın çözümünde **İstanbul (Çağlayan) Mahkemeleri ve İcra Daireleri** münhasıran yetkilidir.

---

## 13. SÖZLEŞMENİN EKLERİ

* **Ek-1:** İş Emri ve Teknik Şartname (SOW - Statement of Work)
* **Ek-2:** Hizmet Seviyesi Taahhüdü ve Hedefleri (SLA & SLO)
* **Ek-3:** Gizlilik ve Kişisel Verilerin Korunması Sözleşmesi (DPA & KVKK)
* **Ek-4:** Bilgi Güvenliği, DevSecOps ve SEDDK Uyum Şartnamesi
* **Ek-5:** Bakım, Destek ve Değişiklik Yönetimi Protokolü

İşbu Sözleşme, 13 (on üç) ana madde ve 5 (beş) ekten ibaret olup, 18 Ekim 2026 tarihinde iki nüsha olarak tanzim edilmiş ve Tarafların yetkili imza sahiplerince imza altına alınmıştır.

| MÜŞTERİ | YÜKLENİCİ |
| :--- | :--- |
| **Aegis Sigorta A.Ş.** | **Nexora Yazılım ve Bilişim Teknolojileri A.Ş.** |
| İsim: Ahmet Yılmaz | İsim: Can Demir |
| Unvan: Bilgi Teknolojileri Genel Müdür Yardımcısı (CIO) | Unvan: İcra Kurulu Başkanı (CEO) |
| İmza: | İmza: |
