Step Action Logic Location
1. Trigger User reports a lost key in the GitDigital Dashboard. Product UI (e.g., RepoSync)
2. Auth Service checks for ENTERPRISE status & KYC status. subscription-service
3. Prepare Gas Oracle calculates a "High Priority" transaction fee. gas-oracle package
4. Execute PermanentDelegate move is executed on-chain. recovery-tools package