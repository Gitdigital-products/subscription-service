import { Connection, ComputeBudgetProgram } from '@solana/web3.js';

export class PriorityManager {
  // Logic to determine fee based on user tier
  static async getTransactionBudget(userId: string, tier: string, connection: Connection) {
    const recentFees = await connection.getRecentPrioritizationFees();
    const medianFee = recentFees.sort((a, b) => a.prioritizationFee - b.prioritizationFee)[Math.floor(recentFees.length / 2)];

    let microLamports = 0;

    switch (tier) {
      case 'FREE':
        // Free users get no priority. If network is congested, they wait.
        microLamports = 0; 
        break;
      case 'BASIC':
        // Basic users pay the 25th percentile (low priority)
        microLamports = Math.max(medianFee.prioritizationFee * 0.5, 1000);
        break;
      case 'PRO':
        // Pro users get 75th percentile (guaranteed fast landing)
        microLamports = Math.max(medianFee.prioritizationFee * 1.5, 5000);
        break;
      case 'ENTERPRISE':
        // Enterprise users get 95th percentile + Gasless Sponsorship
        microLamports = Math.max(medianFee.prioritizationFee * 3, 10000);
        break;
    }

    return ComputeBudgetProgram.setComputeUnitPrice({ microLamports });
  }
}
