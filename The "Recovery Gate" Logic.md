In your subscription-service, the recovery feature is guarded by your catalog.json rules. Before the code above executes, the service checks for:
Compliance Check: Calls the KYC SDK to ensure the toAta (destination) is a verified, clean wallet.
Tier Check: Verifies the user has an active Enterprise subscription.
Gas Check: Calculates if the recovery requires a Priority Fee (using your Gas Oracle) to beat a potential hacker's transaction.