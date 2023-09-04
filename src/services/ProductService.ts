import { Product } from "./types"; // Import necessary types
import ProductRepository from "./ProductRepository"; // Import the ProductRepository

class ProductService {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async createProduct(product: Product): Promise<Product> {
    // Validate product data if needed
    // You can perform validation checks here

    // Call the createProduct method from the repository
    return this.productRepository.createProduct(product);
  }

  async getProductById(productId: string): Promise<Product | null> {
    // Call the getProductById method from the repository
    return this.productRepository.getProductById(productId);
  }

  async getAllProducts(): Promise<Product[]> {
    // Call the getAllProducts method from the repository
    return this.productRepository.getAllProducts();
  }

  async updateProduct(productId: string, updatedProduct: Product): Promise<Product> {
    // Validate updated product data if needed
    // You can perform validation checks here

    // Call the updateProduct method from the repository
    return this.productRepository.updateProduct(productId, updatedProduct);
  }

  async deleteProduct(productId: string): Promise<void> {
    // Call the deleteProduct method from the repository
    return this.productRepository.deleteProduct(productId);
  }

  // Implement additional methods as needed, such as searching for products, filtering by category, etc.
}

export default ProductService;
