# MAINTENANCE, SUPPORT & CHANGE REQUEST PROTOCOL (CR & MAINTENANCE)
**Schedule Code:** Schedule 5 (AEG-NXR-MNT-2026-EN)  
**Master Agreement:** AEG-NXR-MSA-2026-EN  
**Project Title:** AegisConnect Next-Generation Mobile InsurTech Platform  
**Scope:** Post-Launch Warranty, Operating System Upgrades, and Change Request (CR) Governance  

---

## 1. POST-LAUNCH WARRANTY & PERIODIC MAINTENANCE

* **1.1. 12-Month Warranty Period:** All defect remediation, bug fixes, and minor stability optimizations delivered within the first 12 months following Final Acceptance are included in the base project fee and provided at **no additional cost**.
* **1.2. Annual Maintenance Renewal:** Upon expiration of the initial 12-month warranty, CLIENT may opt to renew maintenance services annually at an agreed fee equal to **18% (eighteen percent)** of the original contract engineering value.
* **1.3. Monthly System Health Reviews:** CONTRACTOR will deliver a monthly telemetry audit detailing Crashlytics crash-free rates, p95/p99 API latencies, database index efficiency, and security patch levels.

---

## 2. OPERATING SYSTEM & STORE COMPLIANCE GUARANTEE

* **2.1. Annual Major Mobile OS Upgrades:** CONTRACTOR guarantees that prior to the public general availability (GA) of annual major OS releases (e.g., iOS 19, Android 16), the mobile application will be tested across beta toolchains and updated within 15 business days to prevent user-facing breakage.
* **2.2. Mandatory Target SDK Compliance:** Google Play Store annual Target SDK requirements and Apple App Store minimum compiler mandates will be implemented promptly as part of routine maintenance.
* **2.3. Third-Party API Deprecations:** Breaking changes from payment gateways, Firebase push infrastructure, or regulatory SBM feeds will be adapted under warranty/maintenance.

---

## 3. CHANGE REQUEST (CR) WORKFLOW

Any requested capability beyond the approved SOW shall follow the formal governance process below:

```
+-----------------------------------------------------------------------------------------+
|                               CHANGE MANAGEMENT PIPELINE                                |
|                                                                                         |
| 1. REQUEST:       CLIENT submits formal Request for Change (RFC).                       |
|        |                                                                                |
|        v                                                                                |
| 2. ASSESSMENT:    CONTRACTOR evaluates technical feasibility, security implications,    |
|                   and delivers a Man-Day effort quote within 5 business days.           |
|        |                                                                                |
|        v                                                                                |
| 3. APPROVAL:      CLIENT signs off on effort and commercial quote.                      |
|        |                                                                                |
|        v                                                                                |
| 4. SPRINT SCHED:  Approved CR is prioritized into the upcoming development sprint.       |
|        |                                                                                |
|        v                                                                                |
| 5. DEPLOY & BILL: Feature verified in UAT and invoiced upon production deployment.       |
+-----------------------------------------------------------------------------------------+
```

---

## 4. DEFECT (BUG) VERSUS CHANGE REQUEST (CR) CRITERIA

* **DEFECT (BUG - Remediation at Zero Cost):**
  * Failure of a feature defined in the approved SOW or Figma UX blueprints.
  * Application crashes (ANR / Crashlytics events) or excessive memory consumption.
  * Data calculation discrepancies (e.g., incorrect premium taxes or mathematical rounding errors).
* **CHANGE REQUEST (CR - Billable Scope):**
  * Adding a brand-new insurance product line (e.g., Cyber Risk Insurance).
  * Fundamental UX redesign of a previously approved and accepted user journey.
  * Architectural overhaul required due to unilateral changes in CLIENT’s legacy backend APIs.

---

## 5. ROLE-BASED MAN-DAY RATE CARD (2026-2027)

Approved Change Requests shall be billed according to the following maximum day rates (adjusted annually per CPI/PPI indices):

| Professional Role | Seniority / Experience | Daily Rate (TRY + VAT) |
| :--- | :--- | :--- |
| Principal Solution Architect | 10+ Years Experience | TRY 28,000 |
| Senior Mobile Software Engineer | Senior iOS / Android (5+ Years) | TRY 20,000 |
| Senior Backend & Cloud Engineer | Senior NestJS / Go (5+ Years) | TRY 19,500 |
| Senior UI/UX Product Designer | Senior FinTech Specialist | TRY 16,500 |
| Senior QA & Test Automation Engineer | Senior SDET | TRY 15,000 |
| Senior DevSecOps Engineer | Cloud Security Specialist | TRY 22,000 |

---

## 6. STAGED ROLLOUT STRATEGY & KILL-SWITCH CONTROLS

To mitigate release risk on mobile stores, updates will be rolled out gradually:

* **Internal Flight:** TestFlight & Google Play Internal tracks (50 internal stakeholders).
* **Phased Production Rollout:**
  * Day 1: 5% of active user base
  * Day 2: 10%
  * Day 3: 20%
  * Day 5: 50%
  * Day 7: 100% (Full Rollout)
* **Emergency Kill-Switch:** Critical regressions can be disabled immediately via remote configuration toggles without waiting for App Store re-review.

---

This Protocol constitutes Schedule 5 of the Master Services Agreement.
