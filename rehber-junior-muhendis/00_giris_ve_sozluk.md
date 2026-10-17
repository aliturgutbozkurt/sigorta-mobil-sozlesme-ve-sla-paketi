# BÖLÜM 0: HOŞ GELDİN ARAMIZA! SÖZLEŞMELER VE YAZILIMCI SÖZLÜĞÜ

Merhaba genç mühendis dostum! 🚀

Muhtemelen şu an elinde onlarca sayfalık, hukuk diliyle yazılmış, içinde "gayrikabili rücu", "cezai şart", "mücbir sebep", "ayıba karşı tekeffül" gibi garip kelimelerin uçuştuğu bir sözleşme paketi var ve kendine şu soruyu soruyorsun:

> *"Yahu ben kod yazmaya geldim; Swift, Kotlin, Go, TypeScript yazacağım... Bu avukat metinleriyle benim ne işim var?"*

Çok haklı bir soru! Ama sana acı bir gerçeği söyleyelim: **Yazdığın her bir satır kod, attığın her bir `git commit`, bıraktığın her bir `console.log` doğrudan bu sözleşmedeki maddelerin bir sonucudur.**

Bir gün gece saat 03:00'te telefonun acı acı çalarsa, şirketin müşteriye yüz binlerce lira ceza ödemesi gerekirse veya savcılık şirketin kapısını çalarsa, sebebi çoğunlukla bu sözleşmelerdeki maddelerin kod seviyesinde ihlal edilmesidir.

Korkma! Bu rehberde sana hukukçuların "ağdalı" dilini değil, tam olarak **terminalin, IDE'nin ve günlük hayatının** dilini konuşacağız.

---

## 1. JUNIOR YAZILIMCI İÇİN SÖZLEŞME TERİMLERİ SÖZLÜĞÜ

Hadi önce şirket toplantılarında ve sözleşmelerde sürekli duyacağın "havalı" kısaltmaları çözelim:

### 1. MSA (Master Services Agreement - Ana Hizmet Sözleşmesi)
* **Hukukçusu:** Şirketler arasındaki evlilik cüzdanı.
* **Yazılımcısı:** Tüm projenin `package.json`'ı veya `Podfile`'ı. Kim kimi ne kadar paraya tuttu, kodun telif hakkı kime ait, biri hata yaparsa mahkeme nereye bakacak gibi ana kuralları belirler.

### 2. SOW (Statement of Work - İş Emri / Teknik Şartname)
* **Hukukçusu:** İşin kapsamını ve teslim edilecekleri belirten ek sözleşme.
* **Yazılımcısı:** Jira'daki tüm Epic ve Story'lerin yasal hali. *"Uygulamada NFC kimlik okuma olacak, kaza yeri GPS ile alınacak, 24 haftada bitecek"* gibi somut taahhütlerdir. SOW'da yazmayan hiçbir şeyi "müşteri rica etti" diye kafana göre yapamazsın!

### 3. SLA (Service Level Agreement - Hizmet Seviyesi Anlaşması)
* **Hukukçusu:** Sistemin kesintisiz çalışması için verilen hukuki taahhüt.
* **Yazılımcısı:** Şirketin müşteriye verdiği *"Sistemimiz ayda en fazla 43 dakika kapalı kalabilir, çökerse 15 dakikada uyanıp müdahale edeceğiz"* sözüdür. Uymazsanız şirket para cezası öder!

### 4. SLO (Service Level Objective - Hizmet Seviyesi Hedefi)
* **Hukukçusu:** SLA'nın altındaki teknik hedefler.
* **Yazılımcısı:** Mühendislik ekibinin kendine koyduğu çıta. Örneğin: *"API çağrılarımızın %95'i 250 milisaniyeden hızlı dönecek."*

### 5. SLI (Service Level Indicator - Hizmet Seviyesi Göstergesi)
* **Yazılımcısı:** Datadog veya Grafana dashboard'unda gördüğün ibre. O anki gerçek durum (örn: "Şu an API p95 yanıt süresi 180 ms").

### 6. MTTR ve MTTD (Mean Time to Detect / Resolve)
* **MTTD (Fark Etme Süresi):** Bir bug çıktıktan kaç dakika sonra alarm çaldı ve fark ettin?
* **MTTR (Düzeltme Süresi):** Fark ettikten sonra kodu düzeltip canlıya hotfix atman ne kadar sürdü? Sözleşmede P1 arızaları için MTTR süremiz en fazla 4 saattir!

### 7. UAT (User Acceptance Testing - Kullanıcı Kabul Testi)
* **Yazılımcısı:** Senin *"Local'imde canavar gibi çalışıyor"* dediğin kodun, sigorta şirketinin testçileri ve iş birimleri tarafından acımasızca kurcalandığı aşama. Onlar onay vermeden şirket hakediş faturasını kesemez!

### 8. DoD (Definition of Done - Bitti Tanımı)
* **Yazılımcısı:** Bir görevin gerçekten "tamamlandı" sayılması için gereken checklist (Unit testler yazıldı mı? SonarQube'den geçti mi? PR onaylandı mı? Dokümantasyonu yapıldı mı?).

### 9. CR (Change Request - Değişiklik Talebi)
* **Yazılımcısı:** Müşterinin *"Ya aslında şuraya bir de şunu eklesek ne tatlı olur"* dediği an. Eğer o özellik SOW'da yoksa, bu ek ücrete ve ek süreye tabidir. Junior yazılımcının en büyük tuzağı, CR açtırmadan bedavaya kod yazıp teslim tarihini kaçırmaktır!

### 10. IP (Intellectual Property - Fikri Mülkiyet)
* **Yazılımcısı:** Yazdığın kodun tapusu. Bu projede yazdığın kod senin değil, maaşını aldığın şirketin de değil; sözleşme gereği parayı ödeyen **Aegis Sigorta'nın** tapulu malıdır.

---

## 2. BU REHBERDE NELER ÖĞRENECEKSİN?

İlerleyen bölümlerde şunları tek tek inceleyeceğiz:
1. **Bölüm 1:** SLA/SLO maddeleri senin gece uykunu nasıl etkiler? On-call nöbeti nedir?
2. **Bölüm 2:** Stack Overflow'dan kopyaladığın bir açık kaynak kütüphane şirketi nasıl mahkemelik eder?
3. **Bölüm 3:** Kabul kriterleri nedir? Scope creep (kapsam kayması) canavarından nasıl korunursun?
4. **Bölüm 4:** `console.log(userTCKN)` yazarsan neden savcılıkla tanışabilirsin? KVKK ve hassas sağlık verisi nedir?
5. **Bölüm 5:** Sızma testleri (Pentest), OWASP kuralları ve sözleşmedeki saatlik 25.000 TL ceza maddesi.
6. **Bölüm 6:** Bir Junior mühendisin masasında asılı durması gereken 10 maddelik hayatta kalma checklist'i.

Hazırsan, ilk bölümle başlayalım! Uykumuz kıymetli... ☕
