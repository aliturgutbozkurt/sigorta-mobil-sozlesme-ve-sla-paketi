# INFORMATION SECURITY, DEVSECOPS & REGULATORY ANNEX
**Schedule Code:** Schedule 4 (AEG-NXR-SEC-2026-EN)  
**Master Agreement:** AEG-NXR-MSA-2026-EN  
**Compliance Standards:** SEDDK Information Systems Communiqué, ISO/IEC 27001:2022, OWASP MASVS L2  

---

## 1. REGULATORY COMPLIANCE & DATA SOVEREIGNTY

* **1.1. SEDDK Regulatory Mandate:** All software architecture, integration layers, and cryptographic modules must strictly comply with the Insurance and Private Pension Regulation and Supervision Agency (SEDDK) Information Systems regulations.
* **1.2. Domestic Data Residency (Data Sovereignty):** All production servers, BFF containers, databases, cache instances, disaster recovery nodes, and audit logs must reside **strictly within the territorial borders of the Republic of Turkey**. Cross-border transfer of customer PII to foreign cloud regions is strictly prohibited.
* **1.3. Regulatory Audit Rights:** Regulators and CLIENT’s cybersecurity auditing bodies have unrestricted rights to inspect CONTRACTOR’s source code repositories, CI/CD security logs, and development infrastructure.

---

## 2. DEVSECOPS & SECURE SOFTWARE DEVELOPMENT LIFECYCLE (SSDLC)

Security verification is integrated directly into automated build pipelines:

```
+-------------------+      +-------------------+      +-------------------+      +-------------------+
| 1. CODE & COMMIT  | ---> | 2. CI BUILD & SEC | ---> | 3. STAGING & QA   | ---> | 4. STORE & PROD   |
| Pre-commit Hook   |      | SAST (SonarQube)  |      | Dynamic API Scan  |      | Cert Pinning      |
| Secret Scanning   |      | SCA (Snyk/Trivy)  |      | Indep. Pentest    |      | WAF & mTLS        |
| (Gitleaks)        |      | Container Scan    |      | UAT Sign-off      |      | App Attestation   |
+-------------------+      +-------------------+      +-------------------+      +-------------------+
```

### 2.1. Secret Scanning & Leak Prevention:
* Hardcoding API tokens, private keys, database passwords, or cloud credentials in source code is strictly prohibited.
* Automated pre-commit hooks (`gitleaks`, `trufflehog`) must be active on all developer workstations to abort commits containing secrets.

### 2.2. Automated SAST & SCA Scanning:
* Every Pull Request must pass static analysis (SonarQube) with zero Blocker/Critical bugs and zero Security Hotspots.
* Software Composition Analysis (SCA) must verify that no third-party package has known vulnerabilities with a CVSS score ≥ 7.0 (High/Critical).

---

## 3. OWASP MASVS L2 MOBILE SECURITY SPECIFICATIONS

Mobile binaries must satisfy OWASP MASVS Level 2 requirements:

1. **Storage Security:** All local caches must utilize hardware-backed encryption (Apple Keychain / Android EncryptedSharedPreferences). Screenshot/screen recording masking must be enforced on payment and identity screens.
2. **Cryptographic Integrity:** Use only modern primitives (AES-GCM 256, RSA-4096, ECC Curve25519). Deprecated algorithms (MD5, SHA1, DES) are banned.
3. **Network Layer:** Strict TLS 1.3 with dynamic SSL certificate pinning. The app must resist proxy interception tools (Burp Suite, Charles).
4. **Resilience & Anti-Tampering:** Active detection of Root/Jailbreak status, anti-debugging defenses, code obfuscation (R8/Swift Shield), and platform integrity attestation (Apple App Attest / Google Play Integrity).

---

## 4. INDEPENDENT PENETRATION TESTING REQUIREMENT

* **4.1. Accredited Testing Body:** Prior to production launch, an independent TSE-accredited cybersecurity auditing firm selected by CLIENT shall conduct an exhaustive grey-box and black-box penetration test.
* **4.2. Zero High/Critical Mandate:** CONTRACTOR must remediate all Critical and High severity findings within **7 (seven) business days at no additional cost**.
* **4.3. Clean Audit Certificate:** Formal sign-off of Milestone 3 and store release approval are strictly contingent upon securing a clean, verified re-test report.

---

## 5. SOFTWARE SOURCE CODE ESCROW

To safeguard business continuity, CONTRACTOR shall deposit up-to-date source code, build scripts, deployment configs, and architectural documentation with an independent Escrow Agent. Release conditions trigger solely upon CONTRACTOR's liquidation, bankruptcy, or verified abandonment of maintenance obligations.

---

This Annex constitutes Schedule 4 of the Master Services Agreement.
