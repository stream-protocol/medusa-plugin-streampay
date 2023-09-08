import { EntityRepository, Repository } from 'typeorm';
import { Cart } from '../models/Cart';

@EntityRepository(Cart)
export class CartControllerRepository extends Repository<Cart> {
  // Add custom methods for cart-related database operations here
}
