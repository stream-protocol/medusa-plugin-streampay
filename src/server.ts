import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { StreamPaymentService } from './services'; // Import your StreamPaymentService or other services
import { CustomStreamPayOptions } from './StreamPayTypes'; // Import custom options

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Helmet for security headers
app.use(bodyParser.json()); // Parse JSON request bodies

// Initialize StreamPaymentService with custom options
const streamPaymentService = new StreamPaymentService({
  apiKey: 'your-stream-pay-api-key',
  webhookSecret: 'your-webhook-secret',
} as CustomStreamPayOptions);

// Define routes and endpoints
app.post('/create-payment-intent', async (req, res) => {
  try {
    // Extract data from the request
    const { amount, currency, description } = req.body;

    // Create a payment intent using the StreamPaymentService
    const paymentIntent = await streamPaymentService.createPaymentIntent({
      amount,
      currency,
      description,
    });

    // Send the payment intent back as a response
    res.json(paymentIntent);
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
