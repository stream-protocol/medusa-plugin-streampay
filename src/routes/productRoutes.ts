import express, { Request, Response } from "express";
import ProductService from "./ProductService"; // Import your ProductService
import { Product } from "./types"; // Import necessary types

const router = express.Router();

// Get all products
router.get("/", async (req: Request, res: Response) => {
  try {
    const products: Product[] = await ProductService.getAllProducts();

    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve products" });
  }
});

// Get a single product by ID
router.get("/:id", async (req: Request, res: Response) => {
  const productId: string = req.params.id;

  try {
    const product: Product | null = await ProductService.getProductById(productId);

    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve the product" });
  }
});

// Create a new product
router.post("/", async (req: Request, res: Response) => {
  const newProduct: Product = req.body;

  try {
    const createdProduct: Product | null = await ProductService.createProduct(newProduct);

    if (!createdProduct) {
      res.status(500).json({ error: "Failed to create the product" });
    } else {
      res.status(201).json(createdProduct);
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to create the product" });
  }
});

export default router;
