import { 
  Connection, 
  PublicKey, 
  Transaction, 
  sendAndConfirmTransaction 
} from '@solana/web3.js';
import { 
  createTransferCheckedInstruction, 
  TOKEN_2022_PROGRAM_ID 
} from '@solana/spl-token';

export class EnterpriseRecoveryVault {
  private connection: Connection;
  private recoveryAuthority: PublicKey; // Your GitDigital Enterprise Multisig

  constructor(rpcUrl: string, authority: string) {
    this.connection = new Connection(rpcUrl);
    this.recoveryAuthority = new PublicKey(authority);
  }

  /**
   * Triggers a recovery move using Permanent Delegate authority.
   * This is only possible if the Token-2022 Mint has set 
   * GitDigital as the Permanent Delegate.
   */
  async initiateClawback(
    mint: PublicKey,
    fromAta: PublicKey,
    toAta: PublicKey,
    amount: number,
    decimals: number,
    signer: any // Your internal recovery signer
  ) {
    const tx = new Transaction().add(
      createTransferCheckedInstruction(
        fromAta,            // Compromised Account
        mint,               // Token Mint
        toAta,              // Secure Vault Account
        this.recoveryAuthority, // The Permanent Delegate (GitDigital)
        amount,
        decimals,
        [],
        TOKEN_2022_PROGRAM_ID
      )
    );

    return await sendAndConfirmTransaction(this.connection, tx, [signer]);
  }
}
