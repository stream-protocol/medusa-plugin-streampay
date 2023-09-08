import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { CartRepository } from '../repositories/CartRepository';

export class CartController {
  private cartRepository: CartRepository = getCustomRepository(CartRepository);

  // Add your controller methods here

  async getCart(req: Request, res: Response) {
    try {
      const cart = await this.cartRepository.findOne(req.params.id);
      if (!cart) {
        return res.status(404).json({ error: 'Cart not found' });
      }
      return res.json(cart);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // More controller methods...
}
