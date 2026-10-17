# MASTER SERVICES AGREEMENT (MSA) FOR SOFTWARE ENGINEERING & INTEGRATION
**Document Code:** AEG-NXR-MSA-2026-EN  
**Project Name:** AegisConnect Next-Gen Mobile InsurTech Ecosystem (iOS & Android)  
**Effective Date:** October 18, 2026  

---

## PARTIES

This Master Services Agreement ("Agreement") is entered into by and between:

1. **Aegis Insurance Corporation**  
   A regulated financial insurance corporation organized and existing under the laws of Turkey and SEDDK regulations, located at Buyukdere Avenue No: 195, Levent, Istanbul (hereinafter referred to as the **"CLIENT"** or **"AEGIS"**),  
   and

2. **Nexora Software and Information Technologies Inc.**  
   A software engineering and technology corporation organized and existing under the laws of Turkey, located at ITU ARI Technopark 3, Building No: 4/104, Maslak, Sariyer, Istanbul (hereinafter referred to as the **"CONTRACTOR"** or **"NEXORA"**).

CLIENT and CONTRACTOR may individually be referred to as a **"Party"** and collectively as the **"Parties"**.

---

## 1. RECITALS & DEFINITIONS

* **1.1. Mobile Application / Software:** The enterprise mobile application branded as **"AegisConnect Mobile"**, running natively on iOS (Apple App Store) and Android (Google Play Store), together with its dedicated cloud-native Backend-for-Frontend (BFF) integration layer.
* **1.2. Statement of Work (SOW):** Schedule 1 detailing the technical scope, milestones, user stories, acceptance criteria, and project timeline.
* **1.3. Service Level Agreement (SLA):** Schedule 2 governing system availability, latency thresholds, incident response times, bug severities, and downtime penalties.
* **1.4. Data Protection Agreement (DPA):** Schedule 3 governing the processing, protection, and confidentiality of personal policyholder data under KVKK and EU GDPR standards.
* **1.5. Intellectual Property Rights (IP):** All current and future worldwide patents, copyrights, source codes, architecture designs, database schemas, algorithms, and trade secrets.
* **1.6. User Acceptance Testing (UAT):** Formal verification period where CLIENT validates software against functional specifications prior to milestone payment.
* **1.7. Defect / Bug:** Any deviation between the actual performance of the software and the agreed requirements in the SOW, or any failure affecting stability, security, or performance.

---

## 2. PURPOSE AND SCOPE

* **2.1.** The purpose of this Agreement is to establish the overarching legal and operational framework under which CONTRACTOR shall design, architect, engineer, test, integrate with CLIENT’s core insurance systems (AS400, SAP, SBM/TRAMER), deploy to public application stores, and maintain the AegisConnect Mobile InsurTech platform.
* **2.2.** This Agreement serves as the master contract governing all Statements of Work, Service Level Agreements, and Change Requests executed between the Parties.

---

## 3. RIGHTS AND OBLIGATIONS OF THE PARTIES

### 3.1. Obligations of the CONTRACTOR:
* **3.1.1. Professional Diligence:** CONTRACTOR shall execute the services in accordance with the highest industry standards, Clean Architecture principles, OWASP Mobile Application Security Verification Standards (MASVS L2), and applicable insurance regulations.
* **3.1.2. Key Personnel Commitment:** CONTRACTOR warrants that the named key personnel (Lead Solution Architect, Lead Mobile Engineers) specified in SOW shall remain dedicated to the project. No key personnel shall be removed without prior written consent from CLIENT.
* **3.1.3. Security & Clean Code:** CONTRACTOR shall deliver source code that passes automated Static Application Security Testing (SAST), Dynamic Application Security Testing (DAST), and Software Composition Analysis (SCA) with zero critical and high vulnerabilities.
* **3.1.4. Open Source Governance:** CONTRACTOR is strictly prohibited from incorporating any copyleft open-source libraries (e.g., GPL v2/v3, AGPL) that mandate disclosure of CLIENT proprietary source code. Only permissive licenses (MIT, Apache 2.0, BSD) are permissible.

### 3.2. Obligations of the CLIENT:
* **3.2.1. Environment Access:** CLIENT shall provide timely access to staging/sandbox APIs, core insurance mock data, VPN credentials, and required documentation without undue delay.
* **3.2.2. Review & Acceptance:** CLIENT shall evaluate milestone deliverables and UAT builds within the timeframe specified in the SOW and deliver written acceptance or itemized defect logs.

---

## 4. PROJECT MANAGEMENT, DELIVERY & ACCEPTANCE

* **4.1. Agile Methodology:** The project will be managed via two-week Scrum sprint iterations, featuring bi-weekly sprint reviews, sprint planning, and retrospective sessions.
* **4.2. Provisional Acceptance (UAT):** Following completion of all functional sprints, a 20 (twenty) business-day UAT phase will be executed on staging and pre-production environments.
* **4.3. Acceptance Criteria:** Successful provisional acceptance requires zero outstanding P1 (Blocker) and P2 (Major) defects, and an agreed remediation timeline for any remaining P3 defects.
* **4.4. Final Acceptance:** Final Acceptance shall be formally signed upon successful publication to the Apple App Store and Google Play Store and 30 (thirty) consecutive calendar days of verified stable production operation.

---

## 5. FINANCIAL TERMS AND PAYMENT SCHEDULE

* **5.1. Contract Price:** The total fixed price for the project scope defined in SOW is **TRY 12,500,000 + VAT** (Twelve Million Five Hundred Thousand Turkish Liras).
* **5.2. Milestone Payment Schedule:**
  * 15%: Signature, Architectural Design Document (ADD), and Figma UX/UI Approval (Milestone 0)
  * 25%: Core Policy, Quotation & 3D Secure Payment Modules (Milestone 1)
  * 25%: Smart Claims FNOL, GPS, Camera/AI & Health Pre-authorization (Milestone 2)
  * 20%: Successful UAT Completion & Clean Third-Party Penetration Test Report (Milestone 3)
  * 15%: App Store / Play Store Launch and Final Acceptance Certificate (Milestone 4)
* **5.3. Payment Terms:** Net 30 days from date of formal milestone sign-off and receipt of a valid electronic tax invoice.
* **5.4. Change Requests (CR):** Any out-of-scope functional requests shall be estimated based on mutually agreed man-day rates and executed via formal written addenda.

---

## 6. INTELLECTUAL PROPERTY RIGHTS (IP ASSIGNMENT)

* **6.1. Full Assignment of Work Product:** CONTRACTOR irrevocably assigns, transfers, and conveys to CLIENT all worldwide right, title, and interest in and to the custom source code, documentation, UI assets, and architecture developed under this Agreement upon full payment of the agreed milestones.
* **6.2. Background IP:** CONTRACTOR retains ownership of its pre-existing foundational utility libraries; provided, however, that CONTRACTOR grants CLIENT a perpetual, irrevocable, worldwide, royalty-free, transferable license to use, modify, and distribute such background IP as part of the AegisConnect ecosystem.
* **6.3. Continuous Code Delivery:** CONTRACTOR shall continuously push clean, documented, and buildable source code to CLIENT's designated corporate Git repositories at the conclusion of each sprint.

---

## 7. CONFIDENTIALITY AND DATA PROTECTION (KVKK / GDPR)

* **7.1.** Both Parties shall maintain the confidentiality of all proprietary, technical, financial, and operational information.
* **7.2. Insurance Secrecy:** Pursuant to Insurance Law Article 31/B, all policyholder data, claims history, financial values, and health records are designated as statutory secrets. CONTRACTOR personnel are bound by perpetual non-disclosure obligations.
* **7.3. Synthetic Test Data Rule:** Under no circumstances shall real customer PII or production health data be utilized in development or testing environments. All non-production environments must strictly utilize synthetic or cryptographically anonymized datasets.

---

## 8. WARRANTY, MAINTENANCE & REMEDY

* **8.1. 12-Month Warranty:** CONTRACTOR warrants that for **12 (twelve) calendar months** from the date of Final Acceptance, the software will operate without defects in conformity with the specifications.
* **8.2. Scope of Warranty:** During the warranty period, CONTRACTOR shall remediate all software bugs, memory leaks, performance bottlenecks, and minor operating system compatibility issues (iOS 18.x, Android 15.x) at **no additional cost** in compliance with the SLA.

---

## 9. LIQUIDATED DAMAGES AND LIMITATION OF LIABILITY

* **9.1. Delay Penalties:** If CONTRACTOR fails to meet a milestone deadline due to reasons solely attributable to CONTRACTOR, CLIENT is entitled to deduct liquidated damages of **0.2% per calendar day** of the delayed milestone value.
* **9.2. Liability Cap:** Except for gross negligence, willful misconduct, breaches of confidentiality, IP infringement, and data protection violations, each Party's aggregate financial liability shall be capped at **100% of the total contract value actually paid**.

---

## 10. REGULATORY AUDIT & SOFTWARE ESCROW

* **10.1. Regulatory Audits:** Regulators (SEDDK, MASAK) and CLIENT’s internal/external cybersecurity auditors have full inspection rights over the source code, architecture, and development pipelines.
* **10.2. Software Escrow:** In the event of CONTRACTOR’s bankruptcy, insolvency, liquidation, or material cessation of support, complete source code, deployment assets, and build documentation will be released to CLIENT from a designated independent Escrow Agent.

---

## 11. TERMINATION

* **11.1. Termination for Cause:** Either Party may terminate this Agreement immediately upon written notice if the other Party materially breaches any obligation and fails to cure such breach within 15 (fifteen) business days of written notice.
* **11.2. Post-Termination Delivery:** Upon termination, CONTRACTOR shall immediately deliver all completed and in-progress source code, documentation, and CLIENT materials.

---

## 12. GOVERNING LAW AND JURISDICTION

This Agreement shall be governed by and construed in accordance with the laws of the Republic of Turkey. The **Istanbul (Caglayan) Courts and Enforcement Offices** shall have exclusive jurisdiction over any dispute arising out of this Agreement.

---

## 13. SCHEDULES (ANNEXES)

* **Schedule 1:** Statement of Work and Technical Specifications (SOW)
* **Schedule 2:** Service Level Agreement and Objectives (SLA & SLO)
* **Schedule 3:** Data Protection and Non-Disclosure Agreement (DPA & GDPR)
* **Schedule 4:** Information Security, DevSecOps and Regulatory Annex
* **Schedule 5:** Post-Warranty Maintenance and Change Request Protocol

IN WITNESS WHEREOF, the authorized representatives of the Parties have executed this Agreement as of October 18, 2026.

| FOR CLIENT | FOR CONTRACTOR |
| :--- | :--- |
| **Aegis Insurance Corporation** | **Nexora Software Solutions Inc.** |
| Name: Ahmet Yilmaz | Name: Can Demir |
| Title: Chief Information Officer (CIO) | Title: Chief Executive Officer (CEO) |
| Signature: _______________________ | Signature: _______________________ |
