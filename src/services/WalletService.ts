// services/WalletService.ts

import { Wallet } from '../models/Wallet'; // Import the Wallet model
import { WalletRepository } from '../repository/WalletRepository';

export class WalletService {
  private walletRepository: WalletRepository;

  constructor(walletRepository: WalletRepository) {
    this.walletRepository = walletRepository;
  }

  async createWallet(wallet: Wallet): Promise<void> {
    // Implement business logic for creating a new wallet
    // You can perform validation or other operations here
    await this.walletRepository.createWallet(wallet);
  }

  async getWalletById(walletId: string): Promise<Wallet | null> {
    // Implement business logic for retrieving a wallet by its ID
    return this.walletRepository.getWalletById(walletId);
  }

  async updateWallet(wallet: Wallet): Promise<void> {
    // Implement business logic for updating a wallet
    await this.walletRepository.updateWallet(wallet);
  }

  async deleteWallet(walletId: string): Promise<void> {
    // Implement business logic for deleting a wallet
    await this.walletRepository.deleteWallet(walletId);
  }
}
