# STATEMENT OF WORK & TECHNICAL SPECIFICATIONS (SOW)
**Schedule Code:** Schedule 1 (AEG-NXR-SOW-2026-EN)  
**Master Agreement:** AEG-NXR-MSA-2026-EN  
**Project Title:** AegisConnect Next-Generation Mobile InsurTech Platform  
**Duration:** 24 Weeks (6 Months) + 12 Months Warranty  

---

## 1. PROJECT OBJECTIVES & BUSINESS GOALS

This Statement of Work (SOW) sets forth the comprehensive technical requirements, functional scope, architectural blueprints, milestones, and deliverables for the turnkey engineering of the **AegisConnect Mobile Application (iOS & Android)** for Aegis Insurance Corporation by Nexora Software Solutions Inc.

### Key Objectives:
1. Elevate mobile digital policy sales volume by 35% in Year 1.
2. Reduce First Notice of Loss (FNOL) roadside claims initiation time from 45 minutes to under 3 minutes.
3. Automate instant roadside towing, replacement vehicle allocation, and surveyor dispatch.
4. Digitize health insurance claims, e-prescription submissions, and pre-authorization tracking.
5. Provide regulatory-compliant biometric onboarding featuring NFC e-ID chip scanning and 3D liveness detection.

---

## 2. SYSTEM ARCHITECTURE & TECHNICAL STACK

The platform is architected for zero-trust financial security, high throughput, and fault tolerance.

```
+-----------------------------------------------------------------------+
|              AegisConnect Mobile App (iOS & Android)                  |
|  SwiftUI (iOS 17+) / Jetpack Compose (Android 14+) / Clean Arch       |
|  NFC Chip Reader / Metal-Vulkan AI Camera / Biometric Keystore        |
+------------------------------------+----------------------------------+
                                     |  mTLS (TLS 1.3) + Cert Pinning
                                     v
+------------------------------------+----------------------------------+
|      API Gateway & Cloud Armor WAF (Rate Limiting, DDoS Shield)       |
+------------------------------------+----------------------------------+
                                     |
                                     v
+------------------------------------+----------------------------------+
|   Backend-for-Frontend (BFF) Cluster (NestJS / Go, k8s, Redis Cache)  |
+---------+--------------------+---------------------+------------------+
          |                    |                     |
          v                    v                     v
   +--------------+     +--------------+      +--------------+
   | Core AS400   |     | SBM / TRAMER |      | PayU / 3D-S  |
   | Insurance DB |     | Entegrasyonu |      | PCI-DSS Gate |
   +--------------+     +--------------+      +--------------+
```

### 2.1. Mobile Client Stack:
* **iOS Target:** iOS 16.0+ (Swift 6, SwiftUI, Combine framework).
* **Android Target:** Android 12.0+ / API 31+ (Kotlin 2.0, Jetpack Compose, Coroutines/Flow).
* **Design Pattern:** Clean Architecture with Unidirectional Data Flow (MVI/Redux).
* **Device Security:** Hardware-backed Keystore/Keychain, Certificate Pinning, Anti-Root/Jailbreak, Anti-Debugging, R8/ProGuard obfuscation.
* **Offline Capability:** AES-256 encrypted SQLCipher storage for active policies and emergency dispatch contacts.

### 2.2. Backend-for-Frontend (BFF) & Services:
* **Framework:** NestJS / Go high-performance microservices.
* **Event Broker:** Apache Kafka for asynchronous claims processing and notifications.
* **Cache Layer:** Redis Enterprise Cluster for session state and policy caching.
* **Orchestration:** Red Hat OpenShift / Kubernetes.

---

## 3. FUNCTIONAL REQUIREMENTS BY MODULE

### MODULE 1: Identity, MASAK Onboarding & Biometrics
* **1.1. NFC Chip Reading:** Read contactless national ID chip (ICAO 9303 MRZ + NFC data groups) with cryptographic validation.
* **1.2. 3D Liveness Detection:** ISO 30107-3 compliant passive/active facial anti-spoofing verification.
* **1.3. Biometric Auth:** Native FaceID, TouchID, and Android BiometricPrompt authentication.

### MODULE 2: Policy Portfolio & Digital Insurance Wallet
* **2.1. Policy Hub:** Comprehensive view of active/expired motor, health, home (DASK), and travel policies.
* **2.2. Mobile Wallet Integration:** Apple Wallet & Google Wallet digital insurance cards with dynamic QR verification.
* **2.3. Verified PDF Downloads:** Digitally signed policy documents and instant sharing.

### MODULE 3: Instant Quotation & PCI-DSS Checkout
* **3.1. 3-Step Instant Quotes:** License plate and national ID query via SBM/TRAMER; automated vehicle details and dynamic risk premium calculation within 5 seconds.
* **3.2. Add-ons & Riders:** One-tap policy coverage adjustments (roadside assistance, zero-deductible windshield repair, overseas rider).
* **3.3. Payment Gateway:** 3D Secure 2.2 card processing, multi-bank installment options, card tokenization.

### MODULE 4: Smart Claims & FNOL Center
* **4.1. GPS Accident Tagging:** Automatic geocoding and emergency road mapping.
* **4.2. Digital Accident Report:** Dual-party collaborative accident record exchange via QR pairing and on-screen digital signatures.
* **4.3. Verified Camera Capture:** Direct camera pipeline enforcing watermarked EXIF/GPS timestamps; blocking gallery uploads to eliminate fraud.
* **4.4. AI Damage Assessment:** Real-time visual parsing of vehicle panels (bumper, fender, hood) and preliminary severity scoring.
* **4.5. Live Towing Telematics:** Real-time map tracking of dispatched tow truck and replacement vehicle.

### MODULE 5: Health & Digital Pre-authorization
* **5.1. Provider Network Locator:** Geospatial search for in-network clinics and hospitals filtered by specialty and co-pay tier.
* **5.2. OCR Prescription & Invoice Reimbursement:** In-app document scanner with Optical Character Recognition (OCR) for out-of-pocket claim submissions.
* **5.3. Pre-auth Tracker:** Live status tracking of ongoing hospital approval workflows.

### MODULE 6: Emergency Assistance & Notifications
* **6.1. SOS Panic Button:** One-touch emergency trigger routing location data to Aegis 24/7 Response Center and 112 emergency dispatch.
* **6.2. Rich Notifications:** Weather hazard warnings (hailstorm alerts), policy renewal reminders, and claims status push updates.

---

## 4. MILESTONES & WORK BREAKDOWN SCHEDULE

| Milestone | Weeks | Deliverables & Scope | Payment % |
| :--- | :--- | :--- | :--- |
| **Milestone 0: Architecture & UX** | 1 - 4 | System Architecture Document, Figma Design System, API contracts, DevSecOps pipeline setup | 15% |
| **Milestone 1: Core Modules** | 5 - 10 | Module 1 (Auth/NFC) + Module 2 (Policies) + Module 3 (Quotation & Payment). Staging demo. | 25% |
| **Milestone 2: Claims & Health** | 11 - 16 | Module 4 (FNOL/GPS/AI) + Module 5 (Health) + Module 6 (Emergency SOS). Alpha release. | 25% |
| **Milestone 3: UAT & Security** | 17 - 20 | Client UAT sign-off, Independent Penetration Test (Zero Critical/High), Stress test (50k VU). | 20% |
| **Milestone 4: Store & Production**| 21 - 24 | App Store / Play Store public approval, staged launch, Final Acceptance Certificate. | 15% |

---

## 5. ACCEPTANCE CRITERIA & DEFINITION OF DONE (DOD)

Every deliverable and user story must satisfy:
1. **Unit Test Coverage:** Minimum **85% code coverage** across core business domains and data layers.
2. **Static Code Quality:** SonarQube quality gate pass with zero blocker/critical bugs and zero security hotspots.
3. **OWASP MASVS L2:** Complete compliance with OWASP Mobile Security verification standards.
4. **Performance Benchmarks:**
   * Cold start time < 1.5 seconds.
   * Frame rate steady at 60/120 fps with zero UI jank.
   * Zero memory leaks verified by Xcode Instruments and LeakCanary.
5. **Documentation:** Full OpenAPI 3.0 specs, architecture guides, and automated Fastlane deployment scripts.

---

This SOW is governed by the terms and conditions of the Master Services Agreement.
