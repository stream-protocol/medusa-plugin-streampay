import express, { Request, Response, Router } from "express";
import { StreamPaymentGateway } from "./StreamPaymentGateway"; // Import Stream Payment Gateway implementation

const router: Router = express.Router();
const paymentGateway = new StreamPaymentGateway("streampay_api_key_here"); // Initialize your payment gateway with the required API key

// Route for retrieving payment information by payment ID
router.get("/payments/:paymentId", async (req: Request, res: Response) => {
  try {
    const paymentId = req.params.paymentId;

    // Retrieve payment information using the payment gateway
    const paymentData = await paymentGateway.getPayment(paymentId);

    // Check if paymentData exists
    if (!paymentData) {
      res.status(404).json({ error: "Payment not found" });
      return;
    }

    // Return the payment data as a response
    res.status(200).json(paymentData);
  } catch (error) {
    // Handle errors and return an error response
    console.error("Error retrieving payment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Add more API routes for retrieving payments based on different criteria as needed

export default router;
