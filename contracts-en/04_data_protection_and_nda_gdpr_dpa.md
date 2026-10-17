# DATA PROTECTION & NON-DISCLOSURE AGREEMENT (DPA & GDPR / KVKK)
**Schedule Code:** Schedule 3 (AEG-NXR-DPA-2026-EN)  
**Master Agreement:** AEG-NXR-MSA-2026-EN  
**Regulatory Basis:** Turkish Personal Data Protection Law (KVKK No. 6698), EU General Data Protection Regulation (GDPR), and Insurance Law Article 31/B  

---

## 1. DEFINITIONS AND ROLES OF THE PARTIES

This Data Protection and Confidentiality Agreement ("DPA") governs the processing and safeguarding of proprietary and personal data within the AegisConnect InsurTech initiative.

* **1.1. Data Controller:** Aegis Insurance Corporation, which determines the purposes, legal grounds, and means of processing personal policyholder data.
* **1.2. Data Processor:** Nexora Software Solutions Inc., which processes personal data solely on documented instructions of the Data Controller for system engineering and technical maintenance.
* **1.3. Data Subjects:** Insurance policyholders, insured drivers, medical claimants, beneficiaries, and emergency contacts.

---

## 2. DATA CATEGORIES AND SENSITIVITY CLASSIFICATION

```
+-----------------------------------------------------------------------------------------+
| DATA CATEGORY            | TYPICAL ATTRIBUTES                         | SENSITIVITY     |
+--------------------------+--------------------------------------------+-----------------+
| Identity & Contact       | Full Name, National ID (TCKN), Passport,   | Standard PII    |
|                          | Phone Number, Residential Address, Email   |                 |
+--------------------------+--------------------------------------------+-----------------+
| Financial & Transactional| PCI-DSS Card Tokens, IBAN, Premium Paid,   | High Risk       |
|                          | Bank Account Information                   | Financial Data  |
+--------------------------+--------------------------------------------+-----------------+
| Vehicle & Property Asset | License Plate, VIN (Chassis No), DASK      | Statutory       |
|                          | Cadastral Info, TRAMER Claims History      | Insurance Secret|
+--------------------------+--------------------------------------------+-----------------+
| Special Category Health  | Outpatient/Inpatient ICD-10 Diagnoses,     | HIGH SENSITIVITY|
| Data (CRITICAL)          | Doctor Prescriptions, Medical Epikrisis,   | SPECIAL CATEGORY|
|                          | Disability Percentages, Lab Reports        | (KVKK Art 6)    |
+--------------------------+--------------------------------------------+-----------------+
| Forensic & Telematics    | GPS Accident Coordinates, Damage Photos,   | Biometric &     |
|                          | Driver License Scans, NFC Chip Telemetry   | Evidentiary     |
+-----------------------------------------------------------------------------------------+
```

---

## 3. DATA PROCESSOR COVENANTS & RESTRICTIONS

* **3.1. Purpose Limitation:** CONTRACTOR shall process personal data exclusively for delivering the services stipulated in the SOW. CONTRACTOR shall never sell, monetize, copy, or use CLIENT data to train proprietary machine learning models.
* **3.2. Statutory Secrecy:** Pursuant to Insurance Law Article 31/B, all insurance customer data constitutes a statutory secret. CONTRACTOR and its employees are bound by indefinite secrecy obligations surviving agreement termination.
* **3.3. Ban on Production Data in Test Environments:** Real customer data, live national ID numbers, and actual medical records are **strictly forbidden** from staging, development, and QA environments. All non-production testing must utilize synthetic or pseudonymized datasets.
* **3.4. Logging Restrictions:**
  * Application logs (Datadog, Sentry, Crashlytics, server stdout) must never contain plain-text credit card numbers, national IDs, passwords, or health diagnoses.
  * In-memory buffers handling sensitive identity documents must be scrubbed immediately post-processing.

---

## 4. TECHNICAL AND ORGANIZATIONAL MEASURES (TOMS)

CONTRACTOR shall enforce military-grade security safeguards:

1. **Encryption Standards:**
   * In Transit: Mandatory TLS 1.3 with dynamic SSL certificate pinning.
   * At Rest: AES-256 GCM encryption on all local databases (SQLCipher) and cloud data stores.
2. **Access Controls:** Role-Based Access Control (RBAC), Multi-Factor Authentication (MFA), and zero-trust VPN requirements for all developer infrastructure.
3. **Mobile Device Protection:** Secure Enclave / Hardware Keystore integration ensuring cryptographic private keys never leave physical hardware.

---

## 5. DATA BREACH NOTIFICATION OBLIGATION

* **5.1. 24-Hour Notice Window:** CONTRACTOR shall notify CLIENT within **24 (twenty-four) hours** of becoming aware of any confirmed or reasonably suspected personal data breach, ransomware compromise, or unauthorized access.
* **5.2. Breach Dossier:** The notification must include the nature of the breach, estimated number of affected data subjects, data categories compromised, and immediate mitigation actions taken.
* **5.3. Regulatory Cooperation:** CONTRACTOR shall provide round-the-clock forensic logging support to enable CLIENT to fulfill its mandatory 72-hour notification to data protection authorities.

---

## 6. INDEMNITY FOR REGULATORY FINES

CONTRACTOR shall fully indemnify, defend, and hold harmless CLIENT against any and all regulatory fines, administrative sanctions, and third-party damages imposed by the Personal Data Protection Authority (KVKK), SEDDK, or civil courts arising from CONTRACTOR's breach of data protection covenants. The contractual liability cap does not apply to this indemnity.

---

This DPA constitutes Schedule 3 of the Master Services Agreement.
