import { 
  Connection, 
  PublicKey, 
  Transaction, 
  sendAndConfirmTransaction 
} from '@solana/web3.js';
import { 
  createFreezeAccountInstruction, 
  TOKEN_2022_PROGRAM_ID 
} from '@solana/spl-token';

export class EmergencySafetyManager {
  private connection: Connection;

  constructor(rpcUrl: string) {
    this.connection = new Connection(rpcUrl);
  }

  /**
   * Instantly freezes a token account.
   * Prevents transfers, burns, or closing the account.
   */
  async freezeStolenAccount(
    mint: PublicKey,
    targetAccount: PublicKey,
    freezeAuthoritySigner: any // GitDigital Multisig/Admin Signer
  ) {
    const transaction = new Transaction().add(
      createFreezeAccountInstruction(
        targetAccount,
        mint,
        freezeAuthoritySigner.publicKey,
        [],
        TOKEN_2022_PROGRAM_ID
      )
    );

    // Apply Priority Fee via your Gas Oracle here to beat the hacker
    return await sendAndConfirmTransaction(
      this.connection, 
      transaction, 
      [freezeAuthoritySigner]
    );
  }
}
