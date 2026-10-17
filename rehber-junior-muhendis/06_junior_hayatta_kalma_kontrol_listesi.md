# BÖLÜM 6: JUNIOR YAZILIMCININ GÜNLÜK HAYATTA KALMA KONTROL LİSTESİ (CHECKLIST)

Tebrikler! Sözleşmelerin derin sularında yüzdün ve bir yazılım şirketinin kurumsal bir sigorta deviyle çalışırken nelere dikkat ettiğini kavradın.

Bu sayfayı yer imlerine (bookmark) ekle veya yazdırıp masana as. **Her Pull Request (PR) açmadan önce bu 10 altın kuralı tek tek kontrol et!**

---

## 📋 HER PULL REQUEST (PR) ÖNCESİ 10 ALTIN KONTROL

```
+-----------------------------------------------------------------------------------------------+
| [ ] 1. SIFIR FORCE UNWRAP (!, !!)                                                            |
|        Swift'te `!` veya Kotlin'de `!!` kullandın mı? Hemen kaldır!                           |
|        İlgili Sözleşme Maddesi: Ek-2 (SLA - Crash-Free Users ≥ %99.80)                        |
+-----------------------------------------------------------------------------------------------+
| [ ] 2. SIFIR HARDCODED GİZLİ ANAHTAR                                                          |
|        Kodun içine API key, secret, şifre veya token yapıştırdın mı?                          |
|        İlgili Sözleşme Maddesi: Ek-4 (Bilgi Güvenliği - Secret Scanning & SAST)               |
+-----------------------------------------------------------------------------------------------+
| [ ] 3. AÇIK KAYNAK LİSANS KONTROLÜ (GPL / AGPL YASAĞI)                                        |
|        Yeni bir pod/gradle/npm paketi ekledin mi? Lisansı MIT veya Apache 2.0 mı?             |
|        İlgili Sözleşme Maddesi: MSA Madde 3.1.4 & Madde 6 (Fikri Mülkiyetin Korunması)        |
+-----------------------------------------------------------------------------------------------+
| [ ] 4. LOG TEMİZLİĞİ VE MASKELEME (KVKK)                                                     |
|        Loglarda açık TCKN, kredi kartı, şifre veya teşhis/sağlık verisi basılıyor mu?         |
|        İlgili Sözleşme Maddesi: Ek-3 (DPA & KVKK - Veri Maskeleme ve Sır Saklama)             |
+-----------------------------------------------------------------------------------------------+
| [ ] 5. ZAYIF İNTERNET VE HATA YÖNETİMİ (OFFLINE / TIMEOUT)                                   |
|        API 500 dönerse veya internet koparsa ekran donuyor/çöküyor mu, yoksa kullanıcıya      |
|        anlaşılır bir hata mesajı ve "Yeniden Dene" butonu gösteriyor musun?                   |
|        İlgili Sözleşme Maddesi: Ek-1 (SOW - Kabul Kriterleri & UAT)                           |
+-----------------------------------------------------------------------------------------------+
| [ ] 6. GÜVENLİ YEREL DEPOLAMA (KEYCHAIN / KEYSTORE)                                          |
|        Token veya kullanıcı kimliğini düz metin (UserDefaults/SharedPreferences) mi yazdın?   |
|        İlgili Sözleşme Maddesi: Ek-4 (OWASP MASVS L2 Standartları)                            |
+-----------------------------------------------------------------------------------------------+
| [ ] 7. KAPSAM KONTROLÜ (SCOPE CREEP TUZAĞI)                                                  |
|        Yazdığın kod Jira ticket'ında ve SOW'da yazan işle birebir örtüşüyor mu? Müşterinin   |
|        sohbette "şunu da yapıver" dediği gayriresmi bir ekleme yaptın mı?                     |
|        İlgili Sözleşme Maddesi: Ek-5 (Değişiklik Yönetimi & CR Protokolü)                     |
+-----------------------------------------------------------------------------------------------+
| [ ] 8. BİRİM TEST KAPSAMI (MIN %85 COVERAGE)                                                 |
|        Yazdığın iş mantığı (Business Logic) için unit test yazdın mı? Edge case'leri test    |
|        ettin mi (boş liste, null değer, negatif sayı, çok uzun metin)?                        |
|        İlgili Sözleşme Maddesi: Ek-1 (Definition of Done - DoD)                               |
+-----------------------------------------------------------------------------------------------+
| [ ] 9. SENTETİK TEST VERİSİ KULLANIMI                                                        |
|        Test ederken canlı ortamdan aldığın gerçek müşteri/hasta verisi kullandın mı?          |
|        (Cevap kesinlikle HAYIR olmalıdır!)                                                    |
|        İlgili Sözleşme Maddesi: Ek-3 (DPA Madde 3.3 - Canlı Veri Yasağı)                       |
+-----------------------------------------------------------------------------------------------+
| [ ] 10. ON-CALL BİLİNCİ VE P1 SORUMLULUĞU                                                    |
|        Nöbetçiysen telefonunun sesi açık mı? PagerDuty yüklü mü? 15 dakika içinde sisteme    |
|        müdahale edebilecek durumda mısın?                                                     |
|        İlgili Sözleşme Maddesi: Ek-2 (SLA Madde 3 - P1 15 Dakika Müdahale Şartı)              |
+-----------------------------------------------------------------------------------------------+
```

---

## SON SÖZ

Mühendislik; karmaşık problemleri zarif çözümlere dönüştürme sanatıdır. Bir sözleşme ise senin emeğini, takımının hakkını ve müşterinin güvenini teminat altına alan bir yol haritasıdır.

Bu rehberdeki prensipleri benimsediğinde, yalnızca iyi bir kod yazarı değil; **sektörde aranan, güvenilen ve takdir edilen vizyoner bir yazılım mühendisi** olacaksın.

Kodun temiz, testlerin yeşil, uykun deliksiz olsun! 🚀
