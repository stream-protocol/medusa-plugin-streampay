import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { CartController } from './controllers/CartController';
import { ProductController } from './controllers/ProductController';
import { StreamUSDCPaymentService } from './payment/StreamUSDCPaymentService'; // Import your payment services

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Initialize Payment Service
const usdcPaymentService = new StreamUSDCPaymentService({
  // Initialize payment service with required dependencies
  // For example, provide the necessary repository, options, etc.
});

// Routes
app.use('/api/carts', CartController);
app.use('/api/products', ProductController);

// Payment Route
app.post('/api/payment/usdc', async (req, res) => {
  try {
    const paymentData = await usdcPaymentService.processPayment(req.body);
    // Handle the payment response and send it back to the client
    res.json(paymentData);
  } catch (error) {
    console.error('Payment error:', error);
    res.status(500).json({ error: 'Payment failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
