import { EntityRepository, Repository } from 'typeorm';
import { StreamPay } from '../models/StreamPay'; // Adjust the import path based on your project structure

@EntityRepository(StreamPay)
export class StreamPayRepository extends Repository<StreamPay> {
  // Define custom repository methods if needed
}
