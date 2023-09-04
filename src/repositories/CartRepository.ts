import { Cart, CartItem } from "./types"; // Import necessary types
import { DatabaseConnection } from "./database"; // Import your database connection

class CartRepository {
  private db: DatabaseConnection;

  constructor(databaseConnection: DatabaseConnection) {
    this.db = databaseConnection;
  }

  async createCart(userId: string): Promise<Cart> {
    // Insert a new cart into the database and return the created cart
    const query = "INSERT INTO carts (user_id) VALUES ($1) RETURNING *";
    const values = [userId];

    const result = await this.db.query(query, values);

    if (result.rows.length > 0) {
      return result.rows[0] as Cart;
    } else {
      throw new Error("Failed to create a cart.");
    }
  }

  async getCartById(cartId: string): Promise<Cart | null> {
    // Retrieve a cart by its ID from the database
    const query = "SELECT * FROM carts WHERE id = $1";
    const values = [cartId];

    const result = await this.db.query(query, values);

    if (result.rows.length > 0) {
      return result.rows[0] as Cart;
    } else {
      return null;
    }
  }

  async addToCart(cartId: string, item: CartItem): Promise<Cart> {
    // Add an item to the cart and update the cart's total price
    const query = `
      UPDATE carts
      SET items = array_append(items, $1), total_price = total_price + $2
      WHERE id = $3
      RETURNING *
    `;
    const values = [item, item.price, cartId];

    const result = await this.db.query(query, values);

    if (result.rows.length > 0) {
      return result.rows[0] as Cart;
    } else {
      throw new Error("Failed to add item to the cart.");
    }
  }

  // Implement methods for updating and deleting items from the cart, and any other cart-related operations as needed
}

export default CartRepository;
