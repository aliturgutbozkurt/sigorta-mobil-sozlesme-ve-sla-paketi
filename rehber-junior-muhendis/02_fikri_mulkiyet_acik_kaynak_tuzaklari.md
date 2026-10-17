# BÖLÜM 2: FİKRİ MÜLKİYET (IP) VE AÇIK KAYNAK LİSANS TUZAKLARI

Bir junior mühendisin kariyerinde yapabileceği en pahalı hatalardan biri lisans ve telif hakları konusudur.
Sözleşmenin **6. Maddesi (Fikri ve Sınai Mülkiyet Hakları)** ve **3.1.4 Maddesi (Bağımlılık ve Açık Kaynak Yönetimi)** tam olarak bu konuyu düzenler.

Gelin iki büyük tuzağı ve bunların kod seviyesindeki karşılıklarını konuşalım.

---

## 1. BÜYÜK TUZAK 1: GPL LİSANSLI KÜTÜPHANE EKLEMEK ("VİRAL LİSANS" FELAKETİ)

Diyelim ki mobil uygulamada kaza fotoğraflarını sıkıştırmak veya harika bir grafik çizdirmek için GitHub'da bir açık kaynak kütüphane buldun.
Kütüphane harika çalışıyor, 10 yıldız almış, hemen `Podfile`'a veya `build.gradle`'a ekledin:

```gradle
// build.gradle (Android)
implementation("com.awesome.chart:super-chart:1.2.0")
```

Ama kütüphanenin GitHub sayfasındaki **LICENSE** dosyasına hiç bakmadın! Orada minik bir ibare vardı: **GNU General Public License v3.0 (GPLv3)**.

### Neden Bu Bir Felakettir?
Açık kaynak dünyasında lisanslar ikiye ayrılır:

1. **İzin Verici (Permissive) Lisanslar (GÜVENLİ):**
   * **MIT, Apache 2.0, BSD-2/3-Clause:** Bu lisanslar der ki: *"Bu kodu ticari projelerinde tepe tepe kullanabilirsin, satabilirsin, kaynak kodunu gizli tutabilirsin. Sadece benim adımı telif metninde an yeter."*
   * Sözleşmemiz bu lisanslara izin verir.
2. **Kopya Solu (Copyleft / Viral) Lisanslar (ÖLÜMCÜL TEHLİKE):**
   * **GPL, AGPL, LGPL (bazı durumlar):** Bu lisanslar "virüs" gibidir. Kuralı şudur: *"Eğer benim kodumu kendi projene eklersen veya bağlarsan, senin yazdığın TÜM PROJE de GPL lisanslı olmak zorundadır ve kaynak kodunu DÜNYAYA AÇIK HALE GETİRMEK ZORUNDASIN!"*

### Sözleşmeye Göre Ne Olur?
Aegis Sigorta milyonlarca lira para ödediği özel kasko teklif algoritmalarını, müşteri veritabanı şemalarını ve gizli API uçlarını dünyaya açmak zorunda kalır!
Sözleşmenin 3.1.4 maddesini ihlal etmiş olursun. Şirketimiz telif ihlali davasıyla karşı karşıya kalır ve sözleşme haklı nedenle derhal feshedilebilir.

> **Junior Tavsiyesi:** Projeye yeni bir kütüphane eklemeden önce mutlaka `LICENSE` dosyasına bak. MIT veya Apache 2.0 dışında (özellikle GPL, AGPL, SSPL) bir ibare görürsen **asla projeye ekleme**, derhal Takım Liderine sor!

---

## 2. BÜYÜK TUZAK 2: "BENİM YAZDIĞIM KODU KİŞİSEL GİTHUB'IMA KOYABİLİR MİYİM?"

Birçok acemi yazılımcı şöyle düşünür:
> *"Ya bu hasar tespit ekranını gecemi gündüzüme katıp ben yazdım. Kod çok temiz oldu. Bunu kişisel GitHub profilime atayım da portfolyom zenginleşsin, CV'me eklerim."*

**DUR! SAKIN YAPMA!** 🛑

Sözleşmenin 6.1 maddesini birlikte okuyalım:
> *"YÜKLENİCİ tarafından üretilen tüm kaynak kodlar üzerindeki FSEK hakları münhasıran MÜŞTERİ'ye (Aegis Sigorta'ya) devredilmiş sayılır."*

### Bunun Hukuki Karşılığı Nedir?
1. **Kod Senin Değildir:** O kodu yazarken şirket sana maaş ödedi, müşteri de şirkete fatura ödedi. O kodun tek ve münhasır sahibi Aegis Sigorta A.Ş.'dir.
2. **Ticari Sır İhlali:** Sigortacılık Kanunu md. 31/B gereğince sigortacılık altyapı kodları kanunen "Sır" niteliğindedir.
3. **TCK Madde 239 (Ticari Sırrın Açıklanması):** Şirket kodlarını kişisel açık depona (public repository) yüklemek sadece işten atılma sebebi değil; aynı zamanda 1 yıldan 3 yıla kadar hapis ve adli para cezasıyla sonuçlanabilecek adli bir suçtur!

---

## 3. PEKİ KENDİ KÜTÜPHANELERİMİZİ NASIL KORURUZ? (BACKGROUND IP)

Sözleşmenin 6.2 maddesinde **"Background IP" (Yüklenici Ön Varlıkları)** diye bir kavram vardır.
* Eğer şirketimizin daha önceden yazdığı genel geçer bir tarih formatlama kütüphanesi veya UI bileşen kütüphanesi varsa, bunun mülkiyeti şirketimizde kalır.
* Müşteriye sadece "ömür boyu kullanım lisansı" veririz.
* Ama AegisConnect için sıfırdan yazılan tüm ekranlar, iş kuralları ve backend servisleri tamamen müşteriye aittir.

**Kıssadan Hisse:** Kodunun kıymetini bil, açık kaynak lisanslarını kontrol etmeden tek satır bağımlılık ekleme ve iş yerinde yazdığın kodu asla şirket sınırları dışına çıkarma!
