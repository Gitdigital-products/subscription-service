
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
