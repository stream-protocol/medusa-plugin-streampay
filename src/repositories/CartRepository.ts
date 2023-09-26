import { EntityRepository, Repository } from 'typeorm';
import { Cart } from '../models/Cart';

@EntityRepository(Cart)
export class CartRepository extends Repository<Cart> {
  // Add custom methods for Cart entity if needed
}
