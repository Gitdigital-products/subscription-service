export function registerRoutes(app) {
  app.get("/health", (req, res) => {
    res.json({ status: "ok", service: "subscription-service" });
  });

  // Subscription endpoints
  app.post("/subscription/create", (req, res) => {
    const { userId, plan } = req.body;
    res.json({ message: `Subscription created for user ${userId}`, plan, status: "Active" });
  });

  app.get("/subscription/:userId", (req, res) => {
    const { userId } = req.params;
    res.json({
      userId,
      activePlans: [
        { plan: "Premium", startedAt: "2025-09-01", status: "Active" }
      ]
    });
  });

  app.post("/subscription/cancel", (req, res) => {
    const { userId, plan } = req.body;
    res.json({ message: `Subscription ${plan} cancelled for user ${userId}`, status: "Cancelled" });
  });
}
