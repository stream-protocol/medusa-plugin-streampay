import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../entities/Product';

export class ProductController {
  private productRepository = getRepository(Product);

  async getProducts(req: Request, res: Response) {
    try {
      const products = await this.productRepository.find();

      return res.json(products);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async getProduct(req: Request, res: Response) {
    try {
      const { productId } = req.params;
      const product = await this.productRepository.findOne(productId);

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      return res.json(product);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async createProduct(req: Request, res: Response) {
    try {
      const newProduct = this.productRepository.create(req.body);
      await this.productRepository.save(newProduct);

      return res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const { productId } = req.params;
      const updatedProduct = await this.productRepository.update(
        productId,
        req.body
      );

      if (updatedProduct.affected === 0) {
        return res.status(404).json({ message: 'Product not found' });
      }

      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const { productId } = req.params;
      const deleteResult = await this.productRepository.delete(productId);

      if (deleteResult.affected === 0) {
        return res.status(404).json({ message: 'Product not found' });
      }

      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
