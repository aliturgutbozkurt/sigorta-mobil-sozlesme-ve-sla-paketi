// AegisConnect InsurTech Portal - JavaScript Controller
(function() {
  'use strict';

  // --- State ---
  let currentLang = 'tr';
  let activeTab = 'contracts';
  let activeGuideChapter = 0;

  // --- Internationalization Dictionary ---
  const i18n = {
    tr: {
      "nav.contracts": "Sözleşmeler",
      "nav.guide": "Junior Rehberi",
      "nav.calculator": "SLA Hesaplayıcı",
      "nav.matrix": "Arıza Matrisi",
      "hero.tag": "Sigorta & Yazılım Sektörü Çatı Sözleşme Paketi",
      "hero.title1": "AegisConnect Mobil Sigortacılık",
      "hero.title2": "Sözleşme, SLA/SLO & Mühendislik Paketi",
      "hero.desc": "Aegis Sigorta A.Ş. ile Nexora Bilişim A.Ş. arasındaki uçtan uca kurumsal mobil sigortacılık projesinin (iOS & Android) Türkçe ve İngilizce tüm sözleşmeleri, teknik şartnamesi, SLA/SLO taahhütleri ve acemi yazılımcılar için hayatta kalma kılavuzu.",
      "metrics.uptime": "Uptime Taahhüdü (SLA)",
      "metrics.crashfree": "Crash-Free Users",
      "metrics.p1resp": "P1 Arıza Yanıtı",
      "metrics.val": "Proje Bedeli (SOW)",
      "contracts.title": "Resmi Sözleşme Belgeleri",
      "contracts.subtitle": "SEDDK, MASAK, KVKK ve GDPR standartlarına uygun olarak hazırlanmış kurumsal sözleşmeler.",
      "contracts.searchPlaceholder": "Madde veya kelime ara...",
      "guide.title": "Junior Yazılım Mühendisi Hayatta Kalma Rehberi",
      "guide.subtitle": "\"Ben sadece kod yazacaktım, bu sözleşmeler benim ne işime yarar?\" diyen acemi yazılımcıya özel madde madde pratik rehber.",
      "calc.title": "İnteraktif SLA, Kesinti ve Ceza Hesaplayıcı",
      "calc.subtitle": "Aylık gerçekleşen uptime ve arıza sürelerini girin; sözleşme uyarınca uygulanacak ceza ve kesintileri anında hesaplayın.",
      "calc.inputsTitle": "Operasyonel Parametreler",
      "calc.feeLabel": "Aylık Bakım / Destek Hakedişi (TL)",
      "calc.uptimeLabel": "Aylık Gerçekleşen Uptime (%)",
      "calc.p1CountLabel": "Yaşanan P1 Kritik Arıza Sayısı",
      "calc.p1DelayLabel": "P1 Çözüm Süresi Aşımı (Saat)",
      "calc.delayHint": "4 saatin üzerindeki her saat için 25.000 TL ceza.",
      "calc.calcBtn": "Yeniden Hesapla",
      "calc.resultsTitle": "Finansal Kesinti ve Ceza Raporu",
      "calc.downtimeRealized": "Toplam Gerçekleşen Kesinti:",
      "calc.allowedDowntime": "İzin Verilen Kesinti (Hedef %99.9):",
      "calc.creditRate": "Uptime Hizmet Kredisi Kesinti Oranı:",
      "calc.creditDeduction": "Uptime Kesinti Tutarı:",
      "calc.p1Penalty": "P1 Gecikme Cezası (25.000 TL / Saat):",
      "calc.netPayout": "Yükleniciye Ödenecek Net Hakediş:",
      "matrix.title": "Arıza Önceliklendirme ve SLA Matrisi",
      "matrix.subtitle": "Hata seviyeleri, ilk yanıt, geçici çözüm ve kalıcı yama süreleri tablosu."
    },
    en: {
      "nav.contracts": "Contracts",
      "nav.guide": "Junior Guide",
      "nav.calculator": "SLA Calculator",
      "nav.matrix": "Incident Matrix",
      "hero.tag": "Insurance & Software Master Contract Suite",
      "hero.title1": "AegisConnect Mobile InsurTech",
      "hero.title2": "Contracts, SLA/SLO & Engineering Suite",
      "hero.desc": "Complete bilingual (Turkish & English) Master Services Agreement, Statement of Work, SLA/SLO metrics, KVKK/GDPR DPA, and a dedicated plain-language survival guide for junior software engineers building mobile insurance apps.",
      "metrics.uptime": "Availability SLA",
      "metrics.crashfree": "Crash-Free Users",
      "metrics.p1resp": "P1 Initial Response",
      "metrics.val": "Contract Value (SOW)",
      "contracts.title": "Official Legal Documents",
      "contracts.subtitle": "Enterprise agreements drafted in full compliance with SEDDK, MASAK, KVKK and GDPR regulations.",
      "contracts.searchPlaceholder": "Search clause or keyword...",
      "guide.title": "Junior Software Engineer Survival Guide",
      "guide.subtitle": "\"I just wanted to write code, why do I care about legal contracts?\" - An empathetic, clause-by-clause developer manual.",
      "calc.title": "Interactive SLA & Penalty Calculator",
      "calc.subtitle": "Input achieved monthly uptime and incident delay hours to calculate contractual service credits and penalties.",
      "calc.inputsTitle": "Operational Parameters",
      "calc.feeLabel": "Monthly Maintenance Retainer (TRY)",
      "calc.uptimeLabel": "Achieved Monthly Uptime (%)",
      "calc.p1CountLabel": "P1 Incidents Logged",
      "calc.p1DelayLabel": "P1 Remediation Delay (Hours)",
      "calc.delayHint": "TRY 25,000 penalty per hour exceeding the 4-hour SLA.",
      "calc.calcBtn": "Recalculate",
      "calc.resultsTitle": "Financial Penalty & Payout Report",
      "calc.downtimeRealized": "Actual Total Downtime:",
      "calc.allowedDowntime": "Permitted Downtime (99.9% Target):",
      "calc.creditRate": "Uptime Service Credit Rate:",
      "calc.creditDeduction": "Uptime Deduction Amount:",
      "calc.p1Penalty": "P1 Delay Liquidated Damages:",
      "calc.netPayout": "Net Contractor Payout:",
      "matrix.title": "Incident Severity & SLA Matrix",
      "matrix.subtitle": "Classification tiers, initial response, temporary workaround, and permanent patch times."
    }
  };

  // --- Contracts Metadata ---
  const contractsData = [
    {
      id: "msa",
      code: "AEG-NXR-MSA-2026-V1",
      title_tr: "01. Ana Hizmet Sözleşmesi (MSA)",
      title_en: "01. Master Services Agreement (MSA)",
      badge_tr: "Çatı Sözleşme",
      badge_en: "Master Agreement",
      desc_tr: "Müşteri ve Yüklenici arasındaki genel haklar, proje yönetimi, Fikri Mülkiyet (IP) devri, hakediş modeli, 12 ay garanti ve sorumluluk tavanı hükümleri.",
      desc_en: "Overarching legal framework governing IP assignment, milestone payments, 12-month warranty, and statutory insurance compliance.",
      tags: ["FSEK Mülkiyet", "12.5M TL Hakediş", "12 Ay Garanti", "SEDDK Murakabe"],
      file_tr: "sozlesmeler-tr/01_ana_hizmet_sozlesmesi_msa.md",
      file_en: "contracts-en/01_master_services_agreement_msa.md"
    },
    {
      id: "sow",
      code: "AEG-NXR-SOW-2026-V1",
      title_tr: "02. İş Emri ve Teknik Şartname (SOW)",
      title_en: "02. Statement of Work & Technical Spec (SOW)",
      badge_tr: "Teknik Kapsam",
      badge_en: "Technical Scope",
      desc_tr: "AegisConnect mobil uygulaması (iOS & Android Native) modülleri, MASAK uyumlu NFC kimlik doğrulama, yapay zeka destekli hasar tespiti, AS400 ve SBM entegrasyonu, 24 haftalık kilometre taşları.",
      desc_en: "Functional scope, native iOS/Android Clean Architecture, MASAK-compliant NFC e-ID reader, AI damage estimation, and 24-week delivery roadmap.",
      tags: ["iOS SwiftUI", "Android Compose", "NFC Çip Okuma", "AI Hasar Tespiti", "DoD %85 Unit Test"],
      file_tr: "sozlesmeler-tr/02_is_emri_ve_teknik_sartname_sow.md",
      file_en: "contracts-en/02_statement_of_work_technical_spec_sow.md"
    },
    {
      id: "sla",
      code: "AEG-NXR-SLA-2026-V1",
      title_tr: "03. Hizmet Seviyesi Taahhüdü ve Hedefleri (SLA & SLO)",
      title_en: "03. Service Level Agreement & Objectives (SLA & SLO)",
      badge_tr: "7/24 Kesintisizlik",
      badge_en: "High Availability",
      desc_tr: "%99.90 Uptime taahhüdü, Crash-free users ≥ %99.80 hedefi, P1 arızalarında 15 dakika ilk yanıt ve 4 saat kalıcı yama şartı, saatlik 25.000 TL ceza maddesi.",
      desc_en: "99.90% availability SLA, Crash-Free Users ≥ 99.80%, 15-minute P1 incident response, 24/7 on-call duty, and liquidated hourly penalties.",
      tags: ["%99.90 Uptime", "%99.80 Crash-Free", "P1 15 Dk", "25.000 TL/Saat Ceza", "RPO=0"],
      file_tr: "sozlesmeler-tr/03_hizmet_seviyesi_taahhud_sla_slo.md",
      file_en: "contracts-en/03_service_level_agreement_sla_slo.md"
    },
    {
      id: "dpa",
      code: "AEG-NXR-DPA-2026-V1",
      title_tr: "04. Gizlilik ve Veri İşleme Sözleşmesi (DPA & KVKK)",
      title_en: "04. Data Protection & Non-Disclosure (DPA & GDPR)",
      badge_tr: "KVKK & Sağlık Sırrı",
      badge_en: "Data Privacy",
      desc_tr: "Sigortacılık Kanunu md. 31/B sır saklama yükümlülüğü, KVKK md. 6 özel nitelikli sağlık verilerinin korunması, canlı veri yasağı, log maskeleme ve 24 saat içinde ihlal bildirimi.",
      desc_en: "Statutory insurance secrecy, special category health diagnostics, strict ban on production test data, log sanitization, and 24h breach notification.",
      tags: ["KVKK md. 6 Sağlık Verisi", "Sigorta Sırrı", "Log Maskeleme", "Canlı Veri Yasağı"],
      file_tr: "sozlesmeler-tr/04_gizlilik_ve_veri_koruma_kvkk_dpa.md",
      file_en: "contracts-en/04_data_protection_and_nda_gdpr_dpa.md"
    },
    {
      id: "sec",
      code: "AEG-NXR-SEC-2026-V1",
      title_tr: "05. Bilgi Güvenliği, DevSecOps ve SEDDK Uyum",
      title_en: "05. InfoSec, DevSecOps & Regulatory Annex",
      badge_tr: "Siber Güvenlik",
      badge_en: "Cybersecurity",
      desc_tr: "Verilerin Türkiye sınırlarında tutulması (Veri Egemenliği), OWASP MASVS Seviye 2 standartları, bağımsız TSE sızma testi şartı, kod karıştırma ve Software Escrow güvencesi.",
      desc_en: "Domestic data residency mandate, OWASP MASVS Level 2, independent third-party penetration testing with zero criticals, and Software Escrow.",
      tags: ["Veri Egemenliği", "OWASP MASVS L2", "SSL Pinning", "Bağımsız Pentest", "Escrow"],
      file_tr: "sozlesmeler-tr/05_bilgi_guvenligi_ve_seddk_uyum.md",
      file_en: "contracts-en/05_information_security_and_regulatory_annex.md"
    },
    {
      id: "mnt",
      code: "AEG-NXR-MNT-2026-V1",
      title_tr: "06. Bakım, Destek ve Değişiklik Yönetimi (CR Protokolü)",
      title_en: "06. Maintenance, Support & Change Protocol (CR)",
      badge_tr: "Yıllık Bakım & CR",
      badge_en: "Maintenance & CR",
      desc_tr: "Yıllık %18 bakım yenileme şartları, Apple/Google yeni ana işletim sistemi güncellemeleri, Bug ile CR ayrımı, 2026-2027 rol bazlı adam/gün rayiç bedel tablosu.",
      desc_en: "Annual 18% maintenance model, major iOS/Android OS compatibility updates, formal Bug vs CR separation, and 2026-2027 daily rate cards.",
      tags: ["iOS/Android Yükseltme", "Bug vs CR Ayrımı", "Adam/Gün Rayici", "Kademeli Dağıtım"],
      file_tr: "sozlesmeler-tr/06_bakim_destek_ve_degisiklik_protokolu.md",
      file_en: "contracts-en/06_maintenance_support_and_change_protocol.md"
    }
  ];

  // --- Junior Guide Chapters ---
  const guideChapters = [
    {
      title_tr: "0. Giriş ve Yazılımcı Sözlüğü",
      title_en: "0. Intro & Developer Glossary",
      file: "rehber-junior-muhendis/00_giris_ve_sozluk.md",
      summary_tr: "SLA, SLO, SLI, MTTR, MTTD, RTO, RPO, SOW, MSA, UAT ve CR kavramlarının sokak diliyle açıklaması.",
      summary_en: "Street-smart translation of SLA, SLO, SLI, MTTR, MTTD, SOW, MSA, UAT, and CR."
    },
    {
      title_tr: "1. SLA/SLO ve Senin Gece Uykun",
      title_en: "1. SLA/SLO & Your Weekend Sleep",
      file: "rehber-junior-muhendis/01_sla_slo_ve_senin_uykun.md",
      summary_tr: "%99.9 Uptime ne demek? Force unwrap (!) yapıp 3.000 kişiyi çökertirsen ne olur? P1 alarmı gelince 15 dakikada ne yapacaksın?",
      summary_en: "What does 99.9% uptime mean? What happens if you force-unwrap and crash 3,000 devices?"
    },
    {
      title_tr: "2. Fikri Mülkiyet ve Açık Kaynak",
      title_en: "2. IP & Open Source Traps",
      file: "rehber-junior-muhendis/02_fikri_mulkiyet_acik_kaynak_tuzaklari.md",
      summary_tr: "GPL kütüphane eklersen şirketi nasıl batırırsın? Şirkette yazdığın kodu kişisel GitHub'ına atarsan neden adli suç olur?",
      summary_en: "How adding a GPL library can ruin a company, and why pushing corporate code to personal GitHub is illegal."
    },
    {
      title_tr: "3. Kabul Kriterleri & Scope Creep",
      title_en: "3. Acceptance & Scope Creep",
      file: "rehber-junior-muhendis/03_kabul_kriterleri_ve_scope_creep.md",
      summary_tr: "\"Benim bilgisayarımda çalışıyordu\" neden kabul edilmez? Müşteri 'şuraya minik buton koy' deyince ne cevap vermelisin?",
      summary_en: "Why 'It works on my machine' fails UAT, and how to politely reject informal scope creep."
    },
    {
      title_tr: "4. KVKK, Sağlık Verisi & Loglama",
      title_en: "4. KVKK, Health Data & Logging",
      file: "rehber-junior-muhendis/04_kvkk_saglik_verisi_ve_loglama_felaketleri.md",
      summary_tr: "console.log ile TCKN veya reçete basarsan ne olur? Log maskeleme nasıl yapılır? Testte neden asla gerçek veri kullanılmaz?",
      summary_en: "Catastrophic risks of logging PII and medical diagnoses, data masking patterns, and synthetic test datasets."
    },
    {
      title_tr: "5. Pentest, OWASP & Cezalar",
      title_en: "5. Pentest, OWASP & Penalties",
      file: "rehber-junior-muhendis/05_guvenlik_pentest_ve_cezai_sartlar.md",
      summary_tr: "Hardcoded API key nedir? Pentestçiler kodunu nasıl inceler? SSL Pinning neden zorunlu? Sözleşmedeki 25.000 TL ceza maddesi.",
      summary_en: "Reverse engineering defenses, hardcoded secrets, SSL pinning, and contractual hourly penalties."
    },
    {
      title_tr: "6. Junior Hayatta Kalma Kontrol Listesi",
      title_en: "6. Junior Developer Checklist",
      file: "rehber-junior-muhendis/06_junior_hayatta_kalma_kontrol_listesi.md",
      summary_tr: "Her Pull Request (PR) açmadan önce kontrol etmen gereken 10 altın madde.",
      summary_en: "10 golden rules to review before submitting any Pull Request."
    }
  ];

  // --- Sample Document Content for Quick In-Browser Reading ---
  const cachedDocs = {
    msa: {
      tr: `<h1>KURUMSAL YAZILIM GELİŞTİRME VE ENTEGRASYON ANA HİZMET SÖZLEŞMESİ (MSA)</h1>
<p><strong>Doküman Kodu:</strong> AEG-NXR-MSA-2026-V1 | <strong>Tarih:</strong> 18 Ekim 2026</p>
<hr>
<h3>TARAFLAR</h3>
<p><strong>MÜŞTERİ:</strong> Aegis Sigorta Anonim Şirketi (SEDDK Ruhsatlı Sigorta Şirketi, Levent / İstanbul)<br>
<strong>YÜKLENİCİ:</strong> Nexora Yazılım ve Bilişim Teknolojileri A.Ş. (İTÜ ARI Teknokent / İstanbul)</p>

<h3>ÖNE ÇIKAN SÖZLEŞME MADDELERİ:</h3>
<ul>
  <li><strong>Madde 3.1.2 Personel Taahhüdü:</strong> Baş Mimar ve Mobil Takım Lideri gibi kilit personel MÜŞTERİ'nin yazılı onayı olmaksızın projeden çekilemez.</li>
  <li><strong>Madde 3.1.4 Açık Kaynak Yönetimi:</strong> Kaynak kodun açıklanmasını zorunlu kılan copyleft (GPL, AGPL) lisanslı kütüphaneler kesinlikle kullanılamaz. Yalnızca MIT, Apache 2.0 ve BSD kütüphanelerine izin verilir.</li>
  <li><strong>Madde 5.1 &amp; 5.2 Hakediş:</strong> Toplam sabit bedel <strong>12.500.000 TL + KDV</strong> olup, kilometre taşı (milestone) teslimatlarına bağlı olarak 5 fazda hakediş usulüyle ödenir.</li>
  <li><strong>Madde 6.1 Fikri Mülkiyet (IP):</strong> Üretilen tüm mobil kaynak kodlar (Swift, Kotlin), backend mikroservisleri ve tasarımlar üzerindeki FSEK hakları münhasıran <strong>MÜŞTERİ'ye devredilmiştir</strong>.</li>
  <li><strong>Madde 8.1 12 Ay Garanti:</strong> Kesin kabul tarihinden itibaren 12 ay boyunca tüm bug'lar, işletim sistemi minor güncellemeleri ücretsiz giderilecektir.</li>
  <li><strong>Madde 9.1 Gecikme Cezası:</strong> Gecikilen her takvim günü için geciken faz bedelinin %0.2'si oranında ceza kesilir.</li>
</ul>`,
      en: `<h1>MASTER SERVICES AGREEMENT (MSA)</h1>
<p><strong>Document Code:</strong> AEG-NXR-MSA-2026-EN | <strong>Date:</strong> October 18, 2026</p>
<hr>
<h3>PARTIES</h3>
<p><strong>CLIENT:</strong> Aegis Insurance Corporation (Regulated Insurer, Levent, Istanbul)<br>
<strong>CONTRACTOR:</strong> Nexora Software and Information Technologies Inc. (ITU ARI Technopark, Istanbul)</p>

<h3>KEY CONTRACTUAL COVENANTS:</h3>
<ul>
  <li><strong>Clause 3.1.2 Key Personnel:</strong> Named Lead Architect and Mobile Leads cannot be reassigned without prior written CLIENT consent.</li>
  <li><strong>Clause 3.1.4 Open Source Governance:</strong> Copyleft licenses (GPL/AGPL) mandating disclosure of proprietary logic are strictly prohibited. Only MIT, Apache 2.0, and BSD are permitted.</li>
  <li><strong>Clause 5.1 Milestone Pricing:</strong> Total fixed price is <strong>TRY 12,500,000 + VAT</strong> disbursed in 5 milestone tranches upon verified UAT acceptance.</li>
  <li><strong>Clause 6.1 IP Assignment:</strong> Full worldwide copyright assignment of custom client apps, backend services, and schemas to CLIENT upon full payment.</li>
  <li><strong>Clause 8.1 12-Month Warranty:</strong> 12 months comprehensive post-acceptance bug fixing and mobile OS compatibility at zero additional cost.</li>
  <li><strong>Clause 9.1 Liquidated Damages:</strong> 0.2% per calendar day penalty on delayed milestone value.</li>
</ul>`
    },
    sla: {
      tr: `<h1>HİZMET SEVİYESİ TAAHHÜDÜ VE HEDEFLERİ (SLA & SLO)</h1>
<p><strong>Doküman Kodu:</strong> EK-2 (AEG-NXR-SLA-2026-V1)</p>
<hr>
<h3>TAAHHÜT EDİLEN TEMEL METRİKLER (SLO):</h3>
<ul>
  <li><strong>Kullanılabilirlik (Uptime):</strong> %99.90 (Aylık izin verilen maksimum kesinti süresi: 43 dakika 12 saniye).</li>
  <li><strong>Crash-Free Users:</strong> ≥ %99.80 (Uygulamayı kullanan 100.000 kişinin en az 99.800'ü hiç çökme yaşamamalıdır).</li>
  <li><strong>Crash-Free Sessions:</strong> ≥ %99.90.</li>
  <li><strong>API Yanıt Süresi (p95):</strong> &lt; 250 ms.</li>
</ul>
<h3>ARIZA MÜDAHALE SÜRELERİ (MTTR):</h3>
<ul>
  <li><strong>P1 - Kritik (Blocker):</strong> 15 Dakika İlk Yanıt (7/24), 2 Saat Geçici Çözüm, 4 Saat Kalıcı Yama. Aşılan her saat için <strong>25.000 TL ceza</strong> uygulanır.</li>
  <li><strong>P2 - Büyük (Major):</strong> 1 Saat İlk Yanıt, 8 Saat Kalıcı Çözüm.</li>
  <li><strong>P3 - Orta (Moderate):</strong> 4 Saat İlk Yanıt, 2 İş Günü Çözüm.</li>
  <li><strong>P4 - Düşük (Minor):</strong> 1 İş Günü İlk Yanıt, Sonraki Planlı Sprintte Çözüm.</li>
</ul>`,
      en: `<h1>SERVICE LEVEL AGREEMENT & OBJECTIVES (SLA & SLO)</h1>
<p><strong>Schedule Code:</strong> Schedule 2 (AEG-NXR-SLA-2026-EN)</p>
<hr>
<h3>CORE OPERATIONAL OBJECTIVES (SLO):</h3>
<ul>
  <li><strong>Availability (Uptime):</strong> 99.90% (Maximum monthly downtime: 43 minutes 12 seconds).</li>
  <li><strong>Crash-Free Users:</strong> ≥ 99.80% (Out of 100,000 active users, at least 99,800 must experience zero crashes).</li>
  <li><strong>Crash-Free Sessions:</strong> ≥ 99.90%.</li>
  <li><strong>Latency (p95):</strong> &lt; 250 ms across BFF APIs.</li>
</ul>
<h3>INCIDENT RESPONSE & RESOLUTION (MTTR):</h3>
<ul>
  <li><strong>P1 - Critical:</strong> 15-Minute Response (24/7/365), 2-Hour Workaround, 4-Hour Hotfix. Exceeding resolution incurs <strong>TRY 25,000 per hour penalty</strong>.</li>
  <li><strong>P2 - Major:</strong> 1-Hour Response, 8-Hour Fix.</li>
  <li><strong>P3 - Moderate:</strong> 4-Hour Response, 2 Business Days Resolution.</li>
  <li><strong>P4 - Minor:</strong> 1 Business Day Response, Next Sprint Delivery.</li>
</ul>`
    }
  };

  // --- Functions ---

  function applyLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (i18n[lang] && i18n[lang][key]) {
        el.placeholder = i18n[lang][key];
      }
    });

    document.getElementById('btn-lang-tr').classList.toggle('active', lang === 'tr');
    document.getElementById('btn-lang-en').classList.toggle('active', lang === 'en');

    renderContracts();
    renderGuideSidebar();
    renderGuideChapter(activeGuideChapter);
  }

  function renderContracts(filterQuery = '') {
    const container = document.getElementById('contracts-container');
    if (!container) return;

    const filtered = contractsData.filter(c => {
      const title = currentLang === 'tr' ? c.title_tr : c.title_en;
      const desc = currentLang === 'tr' ? c.desc_tr : c.desc_en;
      const q = filterQuery.toLowerCase();
      return title.toLowerCase().includes(q) || desc.toLowerCase().includes(q) || c.code.toLowerCase().includes(q) || c.tags.some(t => t.toLowerCase().includes(q));
    });

    container.innerHTML = filtered.map(c => `
      <div class="doc-card">
        <div>
          <div class="doc-header">
            <span class="doc-code">${c.code}</span>
            <span class="badge badge-moderate">${currentLang === 'tr' ? c.badge_tr : c.badge_en}</span>
          </div>
          <h3 class="doc-title">${currentLang === 'tr' ? c.title_tr : c.title_en}</h3>
          <p class="doc-desc">${currentLang === 'tr' ? c.desc_tr : c.desc_en}</p>
          <div class="doc-highlights">
            ${c.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
          </div>
        </div>
        <button class="doc-btn" data-doc-id="${c.id}">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          ${currentLang === 'tr' ? 'Sözleşmeyi İncele' : 'View Contract'}
        </button>
      </div>
    `).join('');

    // Attach click listeners to doc buttons
    container.querySelectorAll('.doc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const docId = btn.getAttribute('data-doc-id');
        openDocModal(docId);
      });
    });
  }

  function openDocModal(docId) {
    const doc = contractsData.find(d => d.id === docId);
    if (!doc) return;

    const modal = document.getElementById('doc-modal');
    document.getElementById('modal-doc-code').textContent = doc.code;
    document.getElementById('modal-doc-title').textContent = currentLang === 'tr' ? doc.title_tr : doc.title_en;
    
    const bodyEl = document.getElementById('modal-doc-body');
    if (cachedDocs[docId]) {
      bodyEl.innerHTML = cachedDocs[docId][currentLang] || cachedDocs[docId]['tr'];
    } else {
      bodyEl.innerHTML = `
        <div style="padding: 2rem; text-align: center;">
          <p style="color: var(--primary); font-weight: 600; font-size: 1.1rem; margin-bottom: 0.5rem;">${currentLang === 'tr' ? 'Kaynak Dosya Yolu:' : 'Source File Path:'}</p>
          <code style="background: #090D16; padding: 0.5rem 1rem; border-radius: 6px; display: inline-block;">${currentLang === 'tr' ? doc.file_tr : doc.file_en}</code>
          <p style="margin-top: 1.5rem; color: #94A3B8;">${currentLang === 'tr' ? 'Bu sözleşmenin tam hukuki metni depodaki ilgili Markdown dosyasında bulunmaktadır.' : 'The full legal text of this agreement is located in the repository Markdown file.'}</p>
        </div>
      `;
    }

    modal.classList.add('open');
  }

  function closeDocModal() {
    const modal = document.getElementById('doc-modal');
    if (modal) modal.classList.remove('open');
  }

  function renderGuideSidebar() {
    const sidebar = document.getElementById('guide-sidebar');
    if (!sidebar) return;

    sidebar.innerHTML = guideChapters.map((ch, index) => `
      <button class="guide-nav-item ${index === activeGuideChapter ? 'active' : ''}" data-index="${index}">
        <span>${currentLang === 'tr' ? ch.title_tr : ch.title_en}</span>
      </button>
    `).join('');

    sidebar.querySelectorAll('.guide-nav-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'), 10);
        activeGuideChapter = idx;
        renderGuideSidebar();
        renderGuideChapter(idx);
      });
    });
  }

  const sampleGuideContent = [
    `<h1>Bölüm 0: Hoş Geldin Aramıza! Sözleşmeler ve Yazılımcı Sözlüğü</h1>
    <p>Muhtemelen şu an kendine <em>"Yahu ben kod yazmaya geldim, bu avukat sözleşmeleriyle benim ne işim var?"</em> diyorsun. Çok haklısın! Ama yazdığın her satır kod, attığın her commit doğrudan bu sözleşmedeki cezai maddelerle bağlantılıdır.</p>
    <blockquote><strong>Altın Kural:</strong> Sözleşmeler bürokrasi değil; senin emeğini, uykunu ve şirketin geleceğini koruyan kurallardır.</blockquote>
    <h3>Temel Terimler:</h3>
    <ul>
      <li><strong>MSA:</strong> Tüm projenin çatı sözleşmesi (Master agreement).</li>
      <li><strong>SOW:</strong> Jira'daki story ve epic'lerin hukuki taahhüt hali.</li>
      <li><strong>SLA:</strong> "Sistem çökerse 15 dakikada uyanıp bakacağız" sözü.</li>
      <li><strong>MTTR:</strong> Arıza çıktıktan sonra düzeltip hotfix atma süren.</li>
      <li><strong>UAT:</strong> "Benim bilgisayarımda çalışıyordu" dediğin kodun müşteri tarafından acımasızca test edildiği kabul aşaması.</li>
    </ul>`,

    `<h1>Bölüm 1: SLA, SLO ve Senin Gece Uykun</h1>
    <p>Sözleşmedeki <strong>%99.90 Uptime</strong> maddesi ne anlama gelir? Bir ayda toplam 43.200 dakika vardır. %99.90 demek, ay boyunca sistemin en fazla <strong>43 dakika 12 saniye</strong> kapalı kalabileceği anlamına gelir!</p>
    <h3>Crash-Free Users ≥ %99.80: Force Unwrap (!) Yaparsan Ne Olur?</h3>
    <p>100.000 aktif kullanıcısı olan bir uygulamada %99.80 demek, ay boyunca en fazla 200 kişinin çökme yaşayabileceği demektir. Aceleyle yazdığın tek bir force unwrap (<code>user.policy!.date!</code>) 3.000 kişide crash olursa sözleşme anında ihlal edilir!</p>
    <pre><code>// Swift: ÖLÜMCÜL HATA
let date = user.activePolicy!.expirationDate! // Nil gelirse CRASH!

// DOĞRU YOL:
guard let policy = user.activePolicy else { return }</code></pre>
    <p>Gece 03:15'te PagerDuty çaldığında P1 arızası için 15 dakika içinde uyanıp onay vermeli, 4 saat içinde hotfix geçmelisin. Aksi takdirde her saat için 25.000 TL ceza uygulanır!</p>`,

    `<h1>Bölüm 2: Fikri Mülkiyet (IP) ve Açık Kaynak Lisans Tuzakları</h1>
    <p>GitHub'dan harika bir kütüphane buldun ve ekledin. Ama lisansı <strong>GPL v3</strong> idi! Bu ne demektir?</p>
    <blockquote><strong>GPL Lisansı "Viraldir":</strong> Kodunu GPL lisanslı bir projeyle derlersen, şirketin tüm kaynak kodunu ve algoritmalarını DÜNYAYA AÇIK HALE GETİRMEK zorunda kalırsın!</blockquote>
    <p>Sözleşmemizin 3.1.4 maddesi gereğince yalnızca <strong>MIT, Apache 2.0 ve BSD</strong> lisanslı kütüphaneler kullanılabilir.</p>
    <h3>Şirkette Yazdığın Kodu Kişisel GitHub'ına Yükleyebilir misin?</h3>
    <p><strong>ASLA!</strong> Sözleşmenin 6.1 maddesi uyarınca yazdığın tüm kodlar Aegis Sigorta'nın tapulu malıdır. Bunu kişisel GitHub'ına yüklemek FSEK ihlali ve Sigortacılık Kanunu 31/B uyarınca ticari sırrı ifşa suçudur (1 ila 3 yıl hapis cezası riski)!</p>`,

    `<h1>Bölüm 3: Kabul Kriterleri (DoD) ve "Scope Creep" Canavarı</h1>
    <p>Müşteri toplantıda tatlı bir dille <em>"Ya Ahmetcim şuraya minicik bir kutucuk koyuver, 5 dakikalık iş senin için"</em> dediğinde sakın <em>"Tabii hallederim"</em> deme!</p>
    <p>O minik iş backend'i değiştirecek, testleri bozacak ve sprint takvimini 4 gün geciktirecektir. SOW dışındaki her ek talep resmi bir <strong>Değişiklik Talebi (Change Request - CR)</strong> olmalı ve şirketimiz müşteriye adam/gün faturası (günlük 20.000 TL) kesmelidir.</p>`,

    `<h1>Bölüm 4: KVKK, Sağlık Verileri ve Loglama Felaketleri</h1>
    <p>Sağlık sigortası teşhisleri (kanser, psikiyatri, kalp), reçeteler ve doktor raporları KVKK 6. madde uyarınca <strong>Özel Nitelikli Kişisel Veridir</strong>.</p>
    <pre><code>// ÖLÜMCÜL HATA:
console.log("Health request:", JSON.stringify(req.body));
// Bu log Datadog'a veya CloudWatch'a giderse 9 Milyon TL KVKK cezası kesilir!</code></pre>
    <p>Loglarda TCKN, kredi kartı ve sağlık bilgisi ASLA açık basılamaz! Sadece maskeli veri (<code>123******89</code>) veya işlem UUID'si basılabilir.</p>`,

    `<h1>Bölüm 5: Sızma Testleri (Pentest), OWASP ve Cezai Şartlar</h1>
    <p>Canlıya çıkmadan önce bağımsız beyaz şapkalı hacker'lar APK ve IPA dosyanı tersine mühendislikle parçalar:</p>
    <ul>
      <li>Koda hardcoded API key koyarsan (<code>pk_live_secret_123</code>), <code>strings</code> komutuyla 3 saniyede bulurlar.</li>
      <li>SSL Pinning yapmazsan Burp Suite ile trafiği araya girip çözerler.</li>
      <li>Şifreli Keychain/Keystore yerine UserDefaults kullanırsan anında okurlar.</li>
    </ul>
    <p>Kritik bir zafiyet bulunursa canlıya çıkış iptal edilir ve Milestone 3 hakedişi dondurulur!</p>`,

    `<h1>Bölüm 6: Junior Mühendis Hayatta Kalma Kontrol Listesi</h1>
    <p>Her Pull Request (PR) açmadan önce bu 10 maddeyi zihninde tikle:</p>
    <ol>
      <li><strong>Sıfır Force Unwrap (!, !!):</strong> Nil gelirse çökecek kod bıraktın mı?</li>
      <li><strong>Sıfır Hardcoded Secret:</strong> Kod içine API token, şifre yapıştırdın mı?</li>
      <li><strong>Açık Kaynak Lisans Kontrolü:</strong> Eklediğin paket GPL mi? (Sadece MIT/Apache).</li>
      <li><strong>Log Maskeleme:</strong> Loglarda açık TCKN veya kart numarası var mı?</li>
      <li><strong>Zayıf İnternet / Offline Kontrolü:</strong> İnternet koparsa uygulama patlıyor mu?</li>
      <li><strong>Güvenli Depolama:</strong> Token'ları Keychain / EncryptedSharedPreferences'a mı yazdın?</li>
      <li><strong>Kapsam Kontrolü (Scope Creep):</strong> SOW dışı gayriresmi istek kodladın mı?</li>
      <li><strong>Unit Test Kapsamı (%85):</strong> Business logic için test yazdın mı?</li>
      <li><strong>Sentetik Veri Kuralı:</strong> Test ederken gerçek müşteri verisi kullandın mı? (Asla!).</li>
      <li><strong>On-Call Bilinci:</strong> Nöbetçiysen telefonun sesi açık ve 15 dk müdahaleye hazır mısın?</li>
    </ol>`
  ];

  function renderGuideChapter(index) {
    const container = document.getElementById('guide-content');
    if (!container) return;

    if (sampleGuideContent[index]) {
      container.innerHTML = sampleGuideContent[index];
    } else {
      container.innerHTML = `<p>${guideChapters[index].summary_tr}</p>`;
    }
  }

  function calculateSLA() {
    const feeInput = document.getElementById('calc-monthly-fee');
    const uptimeInput = document.getElementById('calc-uptime');
    const p1CountInput = document.getElementById('calc-p1-count');
    const p1DelayInput = document.getElementById('calc-p1-delay');

    const monthlyFee = parseFloat(feeInput.value) || 200000;
    const uptime = parseFloat(uptimeInput.value) || 99.75;
    const p1Count = parseInt(p1CountInput.value, 10) || 0;
    const p1Delay = parseFloat(p1DelayInput.value) || 0;

    // Total monthly minutes = 30 * 24 * 60 = 43200 min
    const totalMinutes = 43200;
    const actualDowntimeMin = totalMinutes * (1 - (uptime / 100));

    // Format downtime string
    const hours = Math.floor(actualDowntimeMin / 60);
    const minutes = Math.round(actualDowntimeMin % 60);
    let downtimeStr = "";
    if (hours > 0) downtimeStr += `${hours} ${currentLang === 'tr' ? 'saat' : 'hrs'} `;
    downtimeStr += `${minutes} ${currentLang === 'tr' ? 'dakika' : 'mins'}`;

    // Determine Uptime penalty percentage
    let rate = 0;
    let rateBadgeClass = "badge-minor";
    let rateText = "%0";

    if (uptime >= 99.90) {
      rate = 0;
      rateBadgeClass = "badge-minor";
      rateText = currentLang === 'tr' ? "%0 (Hedef Karşılandı)" : "0% (Target Met)";
    } else if (uptime >= 99.50) {
      rate = 0.10;
      rateBadgeClass = "badge-warning";
      rateText = currentLang === 'tr' ? "%10 Kesinti" : "10% Deduction";
    } else if (uptime >= 99.00) {
      rate = 0.25;
      rateBadgeClass = "badge-major";
      rateText = currentLang === 'tr' ? "%25 Kesinti" : "25% Deduction";
    } else if (uptime >= 98.00) {
      rate = 0.50;
      rateBadgeClass = "badge-critical";
      rateText = currentLang === 'tr' ? "%50 Kesinti" : "50% Deduction";
    } else {
      rate = 1.00;
      rateBadgeClass = "badge-critical";
      rateText = currentLang === 'tr' ? "%100 Kesinti (Ödeme Yok)" : "100% Deduction (Zero Pay)";
    }

    const creditDeduction = monthlyFee * rate;
    const p1Penalty = p1Delay * 25000;
    const totalDeduction = creditDeduction + p1Penalty;
    const netPayout = Math.max(0, monthlyFee - totalDeduction);

    // Update DOM
    document.getElementById('res-downtime').textContent = downtimeStr;
    const rateEl = document.getElementById('res-rate');
    rateEl.className = `calc-value badge ${rateBadgeClass}`;
    rateEl.textContent = rateText;

    document.getElementById('res-credit-amount').textContent = `- ${creditDeduction.toLocaleString('tr-TR')} TL`;
    document.getElementById('res-p1-penalty').textContent = `- ${p1Penalty.toLocaleString('tr-TR')} TL`;
    document.getElementById('res-net-payout').textContent = `${netPayout.toLocaleString('tr-TR')} TL`;

    const alertEl = document.getElementById('calc-alert-box');
    if (totalDeduction === 0) {
      alertEl.style.borderColor = "rgba(16, 185, 129, 0.4)";
      alertEl.style.background = "rgba(16, 185, 129, 0.1)";
      alertEl.style.color = "#A7F3D0";
      alertEl.innerHTML = currentLang === 'tr' ? 
        `<strong>Mükemmel!</strong> Uptime taahhüdü (%99.90) karşılandı ve P1 gecikmesi yaşanmadı. Tam hakediş (${monthlyFee.toLocaleString('tr-TR')} TL) ödenecektir.` :
        `<strong>Excellent!</strong> Availability target (99.90%) satisfied with zero P1 delays. Full retainer (${monthlyFee.toLocaleString('tr-TR')} TRY) payable.`;
    } else {
      alertEl.style.borderColor = "rgba(245, 158, 11, 0.4)";
      alertEl.style.background = "rgba(245, 158, 11, 0.1)";
      alertEl.style.color = "#FDE68A";
      alertEl.innerHTML = currentLang === 'tr' ?
        `<strong>SLA İhlali Tespit Edildi:</strong> Toplam ${totalDeduction.toLocaleString('tr-TR')} TL cezai kesinti mahsup edilmiştir. Kalan net hakediş: ${netPayout.toLocaleString('tr-TR')} TL.` :
        `<strong>SLA Breach Detected:</strong> Total TRY ${totalDeduction.toLocaleString('tr-TR')} in deductions applied. Net payable: TRY ${netPayout.toLocaleString('tr-TR')}.`;
    }
  }

  // --- Initialize Event Handlers ---
  function init() {
    // Language buttons
    document.getElementById('btn-lang-tr').addEventListener('click', () => applyLanguage('tr'));
    document.getElementById('btn-lang-en').addEventListener('click', () => applyLanguage('en'));

    // Navigation Tabs
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        navButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.tab-panel').forEach(panel => {
          panel.classList.toggle('active', panel.id === `tab-${tab}`);
        });
      });
    });

    // Footer nav links
    document.querySelectorAll('.footer-nav').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = link.getAttribute('data-tab');
        const targetNavBtn = document.querySelector(`.nav-btn[data-tab="${tab}"]`);
        if (targetNavBtn) targetNavBtn.click();
        window.scrollTo({ top: 400, behavior: 'smooth' });
      });
    });

    // Search input
    const searchInput = document.getElementById('contract-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        renderContracts(e.target.value);
      });
    }

    // Modal close
    document.getElementById('modal-close-btn').addEventListener('click', closeDocModal);
    document.getElementById('modal-backdrop').addEventListener('click', closeDocModal);
    document.getElementById('modal-copy-btn').addEventListener('click', () => {
      const text = document.getElementById('modal-doc-body').innerText;
      navigator.clipboard.writeText(text).then(() => {
        alert(currentLang === 'tr' ? 'Metin panoya kopyalandı!' : 'Text copied to clipboard!');
      });
    });

    // Calculator Range Slider
    const uptimeSlider = document.getElementById('calc-uptime');
    const uptimeVal = document.getElementById('calc-uptime-val');
    uptimeSlider.addEventListener('input', (e) => {
      uptimeVal.textContent = `${parseFloat(e.target.value).toFixed(2)}%`;
      calculateSLA();
    });

    // Calculator Inputs
    ['calc-monthly-fee', 'calc-p1-count', 'calc-p1-delay'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', calculateSLA);
    });
    document.getElementById('btn-recalculate').addEventListener('click', calculateSLA);

    // Initial renders
    initTheme();
    applyLanguage('tr');
    calculateSLA();
  }

  function initTheme() {
    const savedTheme = localStorage.getItem('sigorta_theme') || 'light';
    applyTheme(savedTheme);

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const isDark = document.body.classList.contains('dark-theme');
        const newTheme = isDark ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('sigorta_theme', newTheme);
      });
    }
  }

  function applyTheme(theme) {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      if (themeToggleBtn) {
        themeToggleBtn.querySelector('.theme-icon').textContent = '☀️';
        themeToggleBtn.querySelector('.theme-text').textContent = 'Açık';
      }
    } else {
      document.body.classList.remove('dark-theme');
      if (themeToggleBtn) {
        themeToggleBtn.querySelector('.theme-icon').textContent = '🌙';
        themeToggleBtn.querySelector('.theme-text').textContent = 'Koyu';
      }
    }
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
