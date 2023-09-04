// Import your Solana Web3 library
import { Connection, Keypair, PublicKey, SystemProgram, Transaction, sendAndConfirmTransaction } from "your-solana-web3-library";

// Define a class for Solana Web3 interactions
class SolanaWeb3Service {
  private connection: Connection;
  private wallet: Keypair;

  constructor(solanaProviderUrl: string) {
    // Initialize the Solana connection
    this.connection = new Connection(solanaProviderUrl, "confirmed");

    // Create a Solana wallet
    this.wallet = Keypair.generate();
  }

  async createTransaction(recipientPublicKey: PublicKey, amountLamports: number): Promise<Transaction> {
    // Create a transaction
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: this.wallet.publicKey,
        toPubkey: recipientPublicKey,
        lamports: amountLamports,
      })
    );

    // Sign the transaction
    transaction.sign(this.wallet);

    return transaction;
  }

  async sendTransaction(transaction: Transaction): Promise<string> {
    // Send the transaction
    const signature = await sendAndConfirmTransaction(
      this.connection,
      transaction,
      [this.wallet], // Array of signers (in this case, just one)
      {
        skipPreflight: false, // Set to true to skip preflight checks
        commitment: "confirmed", // Set the commitment level
      }
    );

    return signature;
  }

  getWalletPublicKey(): PublicKey {
    return this.wallet.publicKey;
  }
}

// Export an instance of the SolanaWeb3Service class
export const solanaWeb3Service = new SolanaWeb3Service("https://your-solana-provider-url.com");
