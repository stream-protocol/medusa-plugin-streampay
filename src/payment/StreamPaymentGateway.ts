import { Connection, PublicKey, Transaction, sendAndConfirmTransaction } from '@solana/web3.js';

export class StreamPaymentGateway {
  private connection: Connection;
  private wallet: any; // Your wallet instance (e.g., WalletAdapter)

  constructor(connection: Connection, wallet: any) {
    this.connection = connection;
    this.wallet = wallet;
  }

  async sendPayment(
    recipientAddress: PublicKey,
    amountLamports: number,
    memo: string
  ): Promise<string> {
    try {
      // Ensure the wallet is connected and the user is authenticated
      if (!this.wallet.connected) {
        throw new Error('Wallet not connected.');
      }

      // Get the user's public key
      const senderPublicKey = this.wallet.publicKey;

      // Build a Solana transaction
      const transaction = new Transaction().add(
        // Create a transfer instruction
        SystemProgram.transfer({
          fromPubkey: senderPublicKey,
          toPubkey: recipientAddress,
          lamports: amountLamports, // Amount in lamports
        })
      );

      // Sign the transaction with the user's wallet
      transaction.sign(senderPublicKey);

      // Send and confirm the transaction
      const signature = await sendAndConfirmTransaction(
        this.connection,
        transaction,
        [this.wallet.payer]
      );

      return signature;
    } catch (error) {
      console.error('Error sending payment:', error);
      throw error;
    }
  }
}
