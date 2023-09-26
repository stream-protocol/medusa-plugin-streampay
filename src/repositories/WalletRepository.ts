import { Connection, PublicKey, AccountInfo } from '@solana/web3.js';

class WalletRepository {
  private connection: Connection;

  constructor(connection: Connection) {
    this.connection = connection;
  }

  /**
   * Get wallet balance.
   * @param publicKey - The public key of the wallet.
   * @returns A promise that resolves to the wallet's balance in lamports.
   */
  async getBalance(publicKey: PublicKey): Promise<number> {
    try {
      const accountInfo: AccountInfo<Buffer> | null = await this.connection.getAccountInfo(publicKey);

      if (accountInfo) {
        return accountInfo.lamports;
      }

      return 0; // Wallet not found or has no balance
    } catch (error) {
      console.error('Error fetching wallet balance:', error);
      throw error;
    }
  }

  // Add more wallet-related repository methods as needed
}

export default WalletRepository;
