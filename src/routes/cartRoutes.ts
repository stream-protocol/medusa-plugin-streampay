import express, { Request, Response, NextFunction } from "express";
import CartService from "./CartService"; // Import your CartService
import { CartItem } from "./types"; // Import necessary types

const router = express.Router();

// Middleware for validating cart items
function validateCartItems(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const cartItems: CartItem[] = req.body.cartItems;

  // Perform validation checks on cart items
  // Example: Ensure each item has a valid product ID and quantity

  // If validation fails, return a response with an error
  if (validationFails) {
    return res.status(400).json({ error: "Invalid cart items" });
  }

  // If validation passes, proceed to the next middleware
  next();
}

// Add items to the cart
router.post("/add-to-cart", validateCartItems, (req, res) => {
  const cartItems: CartItem[] = req.body.cartItems;

  // Call the CartService to add items to the cart
  const result = CartService.addToCart(cartItems);

  // Handle the result and send an appropriate response
  if (result.success) {
    res.json({ message: "Items added to the cart successfully", cart: result.cart });
  } else {
    res.status(500).json({ error: "Failed to add items to the cart" });
  }
});

// Update cart items
router.put("/update-cart", validateCartItems, (req, res) => {
  const cartItems: CartItem[] = req.body.cartItems;

  // Call the CartService to update cart items
  const result = CartService.updateCart(cartItems);

  // Handle the result and send an appropriate response
  if (result.success) {
    res.json({ message: "Cart items updated successfully", cart: result.cart });
  } else {
    res.status(500).json({ error: "Failed to update cart items" });
  }
});

// Checkout the cart
router.post("/checkout", (req, res) => {
  // Call the CartService to process the checkout
  const result = CartService.checkout();

  // Handle the result and send an appropriate response
  if (result.success) {
    res.json({ message: "Checkout successful", order: result.order });
  } else {
    res.status(500).json({ error: "Failed to process checkout" });
  }
});

export default router;
