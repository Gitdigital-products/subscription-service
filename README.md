 to the very top of your README.md.
🛡️ GitDigital System Status & Standards
<p align="left">
<img src="https://img.shields.io/github/actions/workflow/status/Gitdigital-products/subscription-service/mirror.yml?branch=main&style=for-the-badge&logo=githubactions&logoColor=white&label=MIRROR%20SYNC" />
<img src="https://img.shields.io/badge/SOLANA-2026_COMPLIANT-9945FF?style=for-the-badge&logo=solana&logoColor=white" />
<img src="https://img.shields.io/badge/SECURITY-CLAWBACK_ACTIVE-red?style=for-the-badge&logo=guardsman&logoColor=white" />
</p>
<p align="left">
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white" />
<img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white" />
<img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white" />
<img src="https://img.shields.io/badge/Stripe-008CDD?style=flat-square&logo=stripe&logoColor=white" />
<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />
</p>
<p align="left">
<img src="https://img.shields.io/github/v/release/Gitdigital-products/subscription-service?style=flat-square&color=orange&label=STABLE" />
<img src="https://img.shields.io/github/repo-size/Gitdigital-products/subscription-service?style=flat-square&color=blueviolet" />
<img src="https://img.shields.io/github/last-commit/Gitdigital-products/subscription-service?style=flat-square&color=success" />
</p>
Why this setup?
 * The Top Row: Focuses on "The Mission"—Mirroring, Solana compliance, and the Enterprise Safety Net (Clawback).
 * The Tech Row: Shows users and contributors exactly what tools they need to know.
 * The Metrics Row: Provides real-time proof that the repo is active and maintained.
The .env.example for GitDigital
You'll need these variables to power the Gas Oracle and Stripe-Solana Hybrid Billing:
# GITDIGITAL CORE CONFIG
PORT=3000
NODE_ENV=development
CATALOG_PATH=./catalog.json

# SOLANA INFRASTRUCTURE
# Use Helius or QuickNode for high-throughput Priority Fee data
SOLANA_RPC_URL=https://mainnet.helius-rpc.com/?api-key=YOUR_KEY
RECOVERY_AUTHORITY_SECRET=YOUR_MULTISIG_PRIVATE_KEY
GAS_ORACLE_REFRESH_MS=5000

# TRADITIONAL BILLING (STRIPE)
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# DATABASE & CACHE
DATABASE_URL="postgresql://user:pass@localhost:5432/gitdigital"
REDIS_URL="redis://localhost:6379"

# COMPLIANCE (KYC)
KYC_PROVIDER_API_KEY=YOUR_KEY
AML_THRESHOLD_SOL=50


🛰️ GitDigital Subscription Service
Solana-Native Federated Entitlements & Safety Hub
📖 Overview
The Subscription Service is the central nervous system for all GitDigital products. It manages multi-tier billing (Free, Basic, Pro, Enterprise), dynamic Solana priority fees, and mission-critical asset recovery protocols.
This repository operates as a Federated Hub. Core logic developed here is automatically mirrored to other GitDigital repositories (RepoSync AI, GrowthFlow, HustleGPT) to ensure compliance and architectural consistency.
🛠️ Core Modules (The Mirrored Packages)

| Package | Purpose | Mirror Destination |
|---|---|---|
| @gitdigital/kyc-sdk | Identity verification & AML screening. | All Product Repos |
| @gitdigital/gas-oracle | Dynamic Solana priority fees & Abuse prevention. | RepoSync AI, GrowthFlow |
| @gitdigital/recovery | Enterprise-grade Freeze & Clawback logic. | Enterprise Dashboards |

💎 Tiered Features & Thresholds
We follow a GitHub-App-inspired structure where core features remain free, while high-compute AI and automation are metered via Solana Gas.

| Feature | Free | Basic | Pro / Enterprise |
|---|---|---|---|
| AI Syncing | 1 Repo / Core Audit | 10 Repos / Deep Audit | Unlimited / Self-Healing |
| Compliance | Blacklist Check | Lite KYC | Institutional AML |
| Network Fee | Standard (Delayed) | Priority (Auto-calc) | Ultra-Priority / Gasless |
| Recovery | N/A | 24h Safety Window | Permanent Delegate Recovery |

> Note on Abuse: Exceeding free thresholds triggers an "OpenAI-style" Congestion Tax. Users can pay a one-time fee in SOL to bypass rate limits during network spikes.
> 
🚀 Mirroring Workflow
To maintain the "Mirror" structure, this repo uses GitHub Actions to push updates downstream:
 * Develop in packages/.
 * Push to main.
 * Sync: The mirror.yml workflow automatically updates the sub-directories in your other product repos.
🔒 Enterprise Asset Recovery
This service utilizes Solana Token Extensions (Token-2022).
 * Emergency Freeze: Instantly locks compromised accounts.
 * Permanent Delegate: Allows the GitDigital Multisig to recover assets for Enterprise partners without needing a user's private key.
🤝 Contributing
 * Ensure all logic remains non-breaking for downstream mirrored repos.
 * Update the catalog.json if adding new product tiers.
 * Keep the "Neon Hacker" code style consistent.
GitDigital Products | The Future of Solana-Native Automation

# subscription-service
 **subscription-service** manages user subscriptions.  ## Endpoints - `GET /health` — service status - `POST /subscription/create` — create a subscription (sample) - `GET /subscription/:userId` — get user subscriptions (sample) - `POST /subscription/cancel` — cancel a subscription (sample)  ## Tracing This service reports telemetry to the tracing
