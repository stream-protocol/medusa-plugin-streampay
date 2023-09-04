import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Cart } from '../entities/Cart';

export class CartController {
  private cartRepository = getRepository(Cart);

  async getCart(req: Request, res: Response) {
    try {
      const { cartId } = req.params;
      const cart = await this.cartRepository.findOne(cartId);

      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }

      return res.json(cart);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async createCart(req: Request, res: Response) {
    try {
      const newCart = this.cartRepository.create(req.body);
      await this.cartRepository.save(newCart);

      return res.status(201).json(newCart);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async updateCart(req: Request, res: Response) {
    try {
      const { cartId } = req.params;
      const updatedCart = await this.cartRepository.update(cartId, req.body);

      if (updatedCart.affected === 0) {
        return res.status(404).json({ message: 'Cart not found' });
      }

      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async deleteCart(req: Request, res: Response) {
    try {
      const { cartId } = req.params;
      const deleteResult = await this.cartRepository.delete(cartId);

      if (deleteResult.affected === 0) {
        return res.status(404).json({ message: 'Cart not found' });
      }

      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
