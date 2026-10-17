# SERVICE LEVEL AGREEMENT & OBJECTIVES (SLA & SLO)
**Schedule Code:** Schedule 2 (AEG-NXR-SLA-2026-EN)  
**Master Agreement:** AEG-NXR-MSA-2026-EN  
**Project Title:** AegisConnect Next-Generation Mobile InsurTech Platform  
**Effective Period:** Production Go-Live throughout Warranty and Maintenance Renewals  

---

## 1. PURPOSE AND CORE PRINCIPLES

This Service Level Agreement (SLA) defines the quantitative availability benchmarks, performance standards, defect classifications, response times, and financial remedies governing the AegisConnect mobile platform and its dedicated Backend-for-Frontend (BFF) cloud environment.

---

## 2. SERVICE LEVEL INDICATORS (SLI) & SERVICE LEVEL OBJECTIVES (SLO)

Operational performance shall be measured 24/7 using enterprise telemetry (Datadog, Prometheus, New Relic, Firebase Crashlytics) according to the following objectives:

| Indicator Category | Service Level Indicator (SLI) | Service Level Objective (SLO) | Measurement Period |
| :--- | :--- | :--- | :--- |
| **Availability (Uptime)** | BFF API Gateway & Microservices Uptime | **99.90%** (Max 43m 12s downtime/mo) | Monthly (24/7/365) |
| **Mobile Stability** | Crash-Free Sessions | **≥ 99.90%** | Monthly |
| **Mobile Stability** | Crash-Free Users | **≥ 99.80%** | Monthly |
| **Latency** | BFF API Response Time (p95) | **< 250 ms** | 7-day rolling window |
| **Latency** | BFF API Response Time (p99) | **< 500 ms** | 7-day rolling window |
| **Transaction Success** | Damage Photo / Document Upload Rate | **≥ 99.50%** | Monthly |
| **Error Rate** | 5xx HTTP Server Error Ratio | **< 0.10%** | Daily |

> *Exclusions:* Planned maintenance windows and unannounced external outages of third-party core providers (e.g., SBM/TRAMER, AS400 core banking, card network 3DS) are excluded from uptime calculations. However, CONTRACTOR's architecture must implement circuit breakers to gracefully prevent mobile crashes during external outages.

---

## 3. SEVERITY TIERS & INCIDENT RESPONSE MATRIX

Incidents and defects are categorized into four severity tiers based on business and customer impact:

```
+------------------------------------------------------------------------------------------+
| SEVERITY LEVEL     | DEFINITION & IMPACT         | INITIAL RESPONSE | WORKAROUND / PATCH TIME       | COVERAGE WINDOW|
+--------------------+-----------------------------+------------------+-------------------------------+----------------+
| P1 - CRITICAL      | Total system downtime,      | 15 Minutes       | 2 Hours Workaround            | 24/7/365       |
| (Blocker)          | failure to purchase policy, |                  | 4 Hours Permanent Hotfix      | (Continuous)   |
|                    | inability to file claim,    |                  |                               |                |
|                    | security breach suspected.  |                  |                               |                |
+--------------------+-----------------------------+------------------+-------------------------------+----------------+
| P2 - MAJOR         | Core module degraded        | 1 Hour           | 8 Hours Permanent Fix         | 24/7           |
|                    | (e.g., hospital map broken, |                  |                               |                |
|                    | single payment bank down,   |                  |                               |                |
|                    | push notifications fail).   |                  |                               |                |
+--------------------+-----------------------------+------------------+-------------------------------+----------------+
| P3 - MODERATE      | Non-critical defect with    | 4 Hours          | 2 Business Days               | Business Hours |
|                    | viable workaround, minor    |                  | (Or next scheduled release)   | (09:00 - 18:00)|
|                    | calculation display issue.  |                  |                               |                |
+--------------------+-----------------------------+------------------+-------------------------------+----------------+
| P4 - MINOR         | Cosmetic glitch, typo,      | 1 Business Day   | Next Sprint /                 | Business Hours |
|                    | minor styling inconsistency,|                  | Regular Release Cycle         |                |
|                    | enhancement request.        |                  |                               |                |
+------------------------------------------------------------------------------------------+
```

---

## 4. ON-CALL, INCIDENT RESPONSE & ESCALATION PROCEDURES

* **4.1. 24/7 On-Call Engineers:** CONTRACTOR shall assign at least one Senior Mobile Engineer and one Senior Backend Engineer on active rotational 24/7 on-call duty.
* **4.2. Escalation Workflow:**
  * **Level 1 (0 - 15 min):** Automated alert dispatched via PagerDuty. On-call engineer acknowledges (Ack) and initiates triage.
  * **Level 2 (30 min):** If root cause is not identified, Team Lead and Principal Solution Architect are mobilized into war room.
  * **Level 3 (60 min):** VP of Engineering and CLIENT CIO are briefed with incident scope, impacted user tally, and ETA.
* **4.3. Blameless Post-Mortem (RCA):** For every P1 and P2 incident, CONTRACTOR must deliver a comprehensive Root Cause Analysis (RCA) report within **48 hours**, detailing timeline, technical failure mechanism, and corrective Jira tasks.

---

## 5. SCHEDULED MAINTENANCE WINDOWS

* **5.1. Maintenance Schedule:** Production maintenance and major database upgrades may only occur on **Sundays between 02:00 AM and 05:00 AM (UTC+3)**.
* **5.2. Advance Notice:** CONTRACTOR must provide at least **5 (five) business days' prior written notice** and receive CLIENT authorization.
* **5.3. Zero-Downtime Releases:** Routine backend deployments must utilize Kubernetes Rolling Updates or Blue/Green environments to ensure zero service disruption.

---

## 6. ERROR BUDGETS & SERVICE CREDIT PENALTIES

Failure to meet monthly availability commitments results in immediate liquidated deductions (Service Credits) from monthly maintenance invoices:

| Monthly Achieved Uptime | Allowed Downtime Window | Service Credit Deducted from Monthly Fee |
| :--- | :--- | :--- |
| **≥ 99.90%** | ≤ 43 min 12 sec | 0% (Full Payment) |
| **99.50% – 99.89%** | 43 min – 3 hrs 36 min | **10% Credit** |
| **99.00% – 99.49%** | 3 hrs 36 min – 7 hrs 12 min | **25% Credit** |
| **98.00% – 98.99%** | 7 hrs 12 min – 14 hrs 24 min | **50% Credit** |
| **< 98.00%** | Exceeding 14 hrs 24 min | **100% Credit (Zero Payment)** |

### P1 Breach Penalties:
* Exceeding the 15-minute response or 4-hour resolution threshold incurs a penalty of **TRY 25,000 per hour of delay**.
* More than 3 (three) P1 incidents in any single calendar month constitutes a material breach granting CLIENT immediate termination rights.

---

## 7. DISASTER RECOVERY (DR) & RESILIENCE

* **Recovery Point Objective (RPO):** **0 Minutes** (Synchronous multi-zone replication for all policy, payment, and claim transactions).
* **Recovery Time Objective (RTO):** **≤ 30 Minutes** (Automated failover to secondary disaster recovery cluster).

---

This SLA constitutes Schedule 2 of the Master Services Agreement.
