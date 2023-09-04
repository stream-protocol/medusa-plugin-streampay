import { Product } from "./types"; // Import necessary types
import { DatabaseConnection } from "./database"; // Import your database connection

class ProductRepository {
  private db: DatabaseConnection;

  constructor(databaseConnection: DatabaseConnection) {
    this.db = databaseConnection;
  }

  async createProduct(product: Product): Promise<Product> {
    // Insert a new product into the database and return the created product
    const query = `
      INSERT INTO products (name, description, price, image_url)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    const values = [product.name, product.description, product.price, product.image_url];

    const result = await this.db.query(query, values);

    if (result.rows.length > 0) {
      return result.rows[0] as Product;
    } else {
      throw new Error("Failed to create a product.");
    }
  }

  async getProductById(productId: string): Promise<Product | null> {
    // Retrieve a product by its ID from the database
    const query = "SELECT * FROM products WHERE id = $1";
    const values = [productId];

    const result = await this.db.query(query, values);

    if (result.rows.length > 0) {
      return result.rows[0] as Product;
    } else {
      return null;
    }
  }

  async getAllProducts(): Promise<Product[]> {
    // Retrieve all products from the database
    const query = "SELECT * FROM products";

    const result = await this.db.query(query);

    return result.rows as Product[];
  }

  async updateProduct(productId: string, updatedProduct: Product): Promise<Product> {
    // Update a product in the database and return the updated product
    const query = `
      UPDATE products
      SET name = $1, description = $2, price = $3, image_url = $4
      WHERE id = $5
      RETURNING *
    `;
    const values = [updatedProduct.name, updatedProduct.description, updatedProduct.price, updatedProduct.image_url, productId];

    const result = await this.db.query(query, values);

    if (result.rows.length > 0) {
      return result.rows[0] as Product;
    } else {
      throw new Error("Failed to update the product.");
    }
  }

  async deleteProduct(productId: string): Promise<void> {
    // Delete a product from the database
    const query = "DELETE FROM products WHERE id = $1";
    const values = [productId];

    await this.db.query(query, values);
  }

  // Implement additional methods as needed, such as searching for products, filtering by category, etc.
}

export default ProductRepository;
