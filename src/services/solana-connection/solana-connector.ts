import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

class SolanaConnector {
  private connection: Connection;

  constructor() {
    // Initialize a connection to the Solana cluster
    this.connection = new Connection(clusterApiUrl("devnet"));
  }

  async getBalance(walletAddress: string): Promise<number> {
    try {
      const publicKey = new PublicKey(walletAddress);
      const balance = await this.connection.getBalance(publicKey);
      return balance / 10 ** 9; // Convert lamports to SOL
    } catch (error) {
      throw new Error(`Error fetching balance: ${error.message}`);
    }
  }

  // Add more methods for interacting with the Solana blockchain as needed
}

// Example usage:
// const solanaConnector = new SolanaConnector();
// const walletAddress = "YourSolanaWalletAddress";
// const balance = await solanaConnector.getBalance(walletAddress);
// console.log(`Balance: ${balance} SOL`);

export default SolanaConnector;
