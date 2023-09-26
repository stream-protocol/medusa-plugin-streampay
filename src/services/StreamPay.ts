import { StreamPay } from '../models/StreamPay'; // Import the StreamPay model
import { StreamPayRepository } from '../repositories/StreamPayRepository'; // Import the StreamPay repository
import { EntityTarget, getRepository } from 'typeorm';

class StreamPayService {
  private readonly streamPayRepository: StreamPayRepository;

  constructor() {
    this.streamPayRepository = getRepository(StreamPay) as StreamPayRepository;
  }

  /**
   * Find a StreamPay record by cart ID.
   * @param cartId - The cart ID to search for.
   * @returns A Promise that resolves to a StreamPay record or null if not found.
   */
  async findByCartId(cartId: string): Promise<StreamPay | null> {
    try {
      return await this.streamPayRepository.findByCartId(cartId);
    } catch (error) {
      console.error('Error in findByCartId:', error);
      throw error;
    }
  }

  // Add more StreamPay-related service methods as needed
}

export default StreamPayService;
