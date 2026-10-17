# HİZMET SEVİYESİ TAAHHÜDÜ VE HEDEFLERİ SÖZLEŞMESİ (SLA & SLO)
**Ek Kodu:** EK-2 (AEG-NXR-SLA-2026-V1)  
**Ana Sözleşme:** AEG-NXR-MSA-2026-V1  
**Proje Adı:** AegisConnect Mobil Sigortacılık Ekosistemi  
**Geçerlilik:** Canlıya Geçiş (Go-Live) Tarihinden İtibaren 12 Ay Garanti ve Müteakip Bakım Dönemleri  

---

## 1. AMAÇ VE PRENSİPLER

İşbu Hizmet Seviyesi Taahhüdü (SLA) ve Hizmet Seviyesi Hedefleri (SLO) dokümanı; AegisConnect mobil uygulamasının ve buna bağlı Backend-for-Frontend (BFF) bulut servislerinin kesintisiz, hızlı, güvenli ve hatasız çalışmasını temin etmek amacıyla YÜKLENİCİ tarafından taahhüt edilen operasyonel kriterleri, hata sınıflandırmalarını, çözüm sürelerini ve cezai yaptırımları belirler.

---

## 2. HİZMET SEVİYESİ GÖSTERGELERİ (SLI) VE HEDEFLERİ (SLO)

Sistem performansı aşağıdaki objektif metrikler üzerinden 7/24 otomatik izleme araçları (Datadog / Prometheus / Firebase Crashlytics / New Relic) ile ölçümlenecektir:

| Metrik Türü | Metrik Adı (SLI) | Taahhüt Edilen Hedef (SLO) | Ölçüm Periyodu |
| :--- | :--- | :--- | :--- |
| **Kullanılabilirlik (Uptime)** | BFF API Gateway & Mikroservis Erişilebilirliği | **%99.90** (Aylık maks. kesinti: 43 dk 12 sn) | Aylık (7x24) |
| **Mobil Kararlılık** | Crash-Free Sessions (Çökmesiz Oturum Oranı) | **≥ %99.90** | Aylık |
| **Mobil Kararlılık** | Crash-Free Users (Çökme Yaşamayan Kullanıcı Oranı)| **≥ %99.80** | Aylık |
| **Gecikme (Latency)** | BFF API Yanıt Süresi (p95) | **< 250 ms** | 7 Günlük hareketli |
| **Gecikme (Latency)** | BFF API Yanıt Süresi (p99) | **< 500 ms** | 7 Günlük hareketli |
| **İşlem Başarısı** | Hasar Fotoğrafı Yükleme Başarı Oranı | **≥ %99.50** | Aylık |
| **Hata Oranı (Error Rate)** | 5xx HTTP Sunucu Hataları Oranı | **< %0.10** | Günlük |

> **Not:** Üçüncü taraf sistemlerin (SBM, AS400 Core Bankacılık, Banka Sanal POS 3DS sayfaları, E-Devlet kapısı) YÜKLENİCİ kontrolü dışındaki planlı/plansız kesintileri uptime hesaplamasından düşülecektir. Ancak YÜKLENİCİ mimarisi "Circuit Breaker" (Devre Kesici) deseni ile bu harici kesintilerde mobil uygulamanın çökmesini engellemekle yükümlüdür.

---

## 3. ARIZA SEVİYELERİ VE MÜDAHALE / ÇÖZÜM MATRİSİ

Ortaya çıkan arıza ve kusurlar iş etkisi ve ciddiyetine göre 4 sınıfa ayrılır:

```
+------------------------------------------------------------------------------------------+
| ÖNCELİK (SEVERITY) | KAPSAM VE ETKİ              | İLK YANIT SÜRESİ | KALICI ÇÖZÜM / GEÇİCİ DÜZELTME | DESTEK KAPSAMI |
+--------------------+-----------------------------+------------------+-------------------------------+----------------+
| P1 - KRİTİK        | Tüm sistemin çökmesi,       | 15 Dakika        | 2 Saat Geçici (Workaround)    | 7/24/365       |
| (Blocker)          | poliçe satın alınamaması,   |                  | 4 Saat Kalıcı Düzeltme (Patch)| (Kesintisiz)   |
|                    | hasar bildirilememesi,      |                  |                               |                |
|                    | veri sızıntısı riski.       |                  |                               |                |
+--------------------+-----------------------------+------------------+-------------------------------+----------------+
| P2 - BÜYÜK         | Kritik bir modülün arızası  | 1 Saat           | 8 Saat                        | 7/24           |
| (Major)            | (örn: provizyon haritası    |                  |                               |                |
|                    | açılmıyor, kredi kartı tek  |                  |                               |                |
|                    | bankada hata veriyor).      |                  |                               |                |
+--------------------+-----------------------------+------------------+-------------------------------+----------------+
| P3 - ORTA          | Sistemin çalışmasını        | 4 Saat           | 2 İş Günü                     | Mesai Saatleri |
| (Moderate)         | engellemeyen, kozmetik      |                  | (Veya ilk planlı sürüm)       | (09:00 - 18:00)|
|                    | olmayan fonksiyonel hata.   |                  |                               |                |
+--------------------+-----------------------------+------------------+-------------------------------+----------------+
| P4 - DÜŞÜK         | Küçük görsel kusurlar,      | 1 İş Günü        | Bir Sonraki Sprint /          | Mesai Saatleri |
| (Minor)            | metin hataları, iyileştirme |                  | Düzenli Sürüm                 |                |
|                    | önerileri.                  |                  |                               |                |
+------------------------------------------------------------------------------------------+
```

---

## 4. ON-CALL, NÖBET VE ESKALASYON PROSEDÜRÜ

* **4.1. Nöbetçi Mühendis (On-Call Engineer):** YÜKLENİCİ, P1 ve P2 seviyesindeki acil durumlara müdahale etmek üzere 7 gün 24 saat erişilebilir en az bir Kıdemli Mobil Mühendis ve bir Kıdemli Backend Mühendisi nöbetçi bulunduracaktır.
* **4.2. Eskalasyon Zinciri:**
  * **Seviye 1 (L1 - 0. ile 15. dakika):** PagerDuty / Opsgenie alarmı çalar. Nöbetçi mühendis alarmı onaylar (Ack) ve durum tespitine başlar.
  * **Seviye 2 (L2 - 30. dakika):** Arıza çözülemezse Takım Lideri ve Çözüm Mimarı olaya dahil edilir.
  * **Seviye 3 (L3 - 60. dakika):** Mühendislik Direktörü (VP of Engineering) ve MÜŞTERİ Bilgi Teknolojileri Direktörü'ne kök neden ve tahmini toparlanma süresi (ETA) içeren acil durum brifingi verilir.
* **4.3. Olay Sonrası Kök Neden Analizi (Post-Mortem / RCA):** Kapanan her P1 ve P2 vakası sonrasında YÜKLENİCİ, en geç **48 saat içinde** "Blameless Post-Mortem" raporunu MÜŞTERİ'ye sunacaktır. Rapor; olayın kronolojisini, kök nedenini, etkilenen kullanıcı sayısını ve tekrarını önleyecek aksiyon maddelerini (Jira task) içerecektir.

---

## 5. PLANLI BAKIM PENCERELERİ (SCHEDULED MAINTENANCE)

* **5.1. Bakım Zamanı:** Canlı ortamda planlı altyapı güncellemeleri, veritabanı optimizasyonları ve majör sistem yükseltmeleri yalnızca **Pazar günleri 02:00 - 05:00 (TSİ)** saatleri arasında icra edilebilir.
* **5.2. Ön Bildirim:** YÜKLENİCİ, planlı bakım tarih ve saatini en az **5 (beş) iş günü önceden** MÜŞTERİ teknik yönetimine yazılı olarak bildirmek ve onay almak zorundadır.
* **5.3. Kesintisiz Dağıtım (Zero-Downtime Deployment):** Normal mobil uygulama güncellemeleri ve BFF backend API sürümleri Kubernetes üzerinde **Rolling Update** veya **Blue/Green Deployment** stratejisiyle kesintisiz olarak canlıya alınacak; kullanıcılar bakım ekranı görmeyecektir.

---

## 6. HATA BÜTÇESİ (ERROR BUDGET) VE CEZAİ ŞARTLAR (SERVICE CREDITS)

Aylık uptime taahhüdünün altında kalınması durumunda MÜŞTERİ, YÜKLENİCİ'ye ödenecek olan aylık bakım/destek hakediş bedelinden aşağıdaki oranlarda doğrudan cezai kesinti (Service Credit) yapma hakkına sahiptir:

| Aylık Gerçekleşen Uptime | İzin Verilen Maks. Kesinti Süresi | Aylık Bakım Bedelinden Kesinti Oranı |
| :--- | :--- | :--- |
| **≥ %99.90** | ≤ 43 dakika 12 saniye | %0 (Tam Hakediş) |
| **%99.50 – %99.89** | 43 dk – 3 saat 36 dk | **%10 Kesinti** |
| **%99.00 – %99.49** | 3 saat 36 dk – 7 saat 12 dk | **%25 Kesinti** |
| **%98.00 – %98.99** | 7 saat 12 dk – 14 saat 24 dk | **%50 Kesinti** |
| **< %98.00** | 14 saat 24 dakikadan fazla | **%100 Kesinti (O ay ücret ödenmez)** |

### P1 Müdahale ve Çözüm Süresi Aşım Cezaları:
* Bir takvim ayı içerisinde P1 vakasında müdahale süresinin (15 dk) veya çözüm süresinin (4 saat) aşılması durumunda, **aşılan her saat için 25.000 TL** cezai şart uygulanır.
* Aynı takvim ayında 3 (üç) adetten fazla P1 seviyesinde sistem kesintisi yaşanması hali MÜŞTERİ'ye sözleşmeyi haklı nedenle derhal ve tazminat hakları saklı olarak fesih yetkisi verir.

---

## 7. AFET KURTARMA (DR) VE İŞ SÜREKLİLİĞİ PARAMETRELERİ

SEDDK Bilgi Sistemleri Uyum Tebliği uyarınca sistemin olağanüstü durum dayanıklılığı aşağıdaki parametrelerle sınırlıdır:

* **RPO (Recovery Point Objective - Veri Kaybı Toleransı):** **0 Dakika** (Tüm finansal işlemler, poliçeler ve hasar kayıtları senkron replikasyon ile çift veri merkezinde eşzamanlı yazılacaktır).
* **RTO (Recovery Time Objective - Hizmetin Geri Dönüş Süresi):** **≤ 30 Dakika** (Birinci veri merkezinin tamamen çökmesi halinde ikincil felaket kurtarma merkezinin otomatik devreye girmesi hedeflenir).

---

İşbu SLA Sözleşmesi, Ana Hizmet Sözleşmesi'nin ayrılmaz bir parçası olup taraflarca mutabakatla yürürlüğe konulmuştur.
