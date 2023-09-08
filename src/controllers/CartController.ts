import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Cart } from '../models/Cart';

export class CartController {
  // Create a new cart
  async create(req: Request, res: Response) {
    try {
      const cartRepository = getRepository(Cart);
      const newCart = cartRepository.create(req.body);
      const result = await cartRepository.save(newCart);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Get a cart by ID
  async getById(req: Request, res: Response) {
    try {
      const cartRepository = getRepository(Cart);
      const cart = await cartRepository.findOne(req.params.id);
      if (!cart) {
        return res.status(404).json({ error: 'Cart not found' });
      }
      return res.status(200).json(cart);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Update a cart by ID
  async updateById(req: Request, res: Response) {
    try {
      const cartRepository = getRepository(Cart);
      const cart = await cartRepository.findOne(req.params.id);
      if (!cart) {
        return res.status(404).json({ error: 'Cart not found' });
      }
      cartRepository.merge(cart, req.body);
      const result = await cartRepository.save(cart);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // Delete a cart by ID
  async deleteById(req: Request, res: Response) {
    try {
      const cartRepository = getRepository(Cart);
      const cart = await cartRepository.findOne(req.params.id);
      if (!cart) {
        return res.status(404).json({ error: 'Cart not found' });
      }
      await cartRepository.remove(cart);
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}
