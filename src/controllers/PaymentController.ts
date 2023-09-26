import { Router, Request, Response } from 'express';
import { PaymentService } from '../services/PaymentService';

const router = Router();
const paymentService = new PaymentService(); // Initialize PaymentService

// POST /api/payment/create
router.post('/create', async (req: Request, res: Response) => {
  try {
    // Extract payment details from the request body
    const { userId, amount, description } = req.body;

    // Create a new payment object
    const payment = {
      userId,
      amount,
      description,
      // You can add more properties as needed
    };

    // Call the PaymentService to create a new payment
    await paymentService.createPayment(payment);

    // Return a success response
    res.status(201).json({ message: 'Payment created successfully' });
  } catch (error) {
    console.error('Error creating payment:', error);
    res.status(500).json({ error: 'Failed to create payment' });
  }
});

// GET /api/payment/:paymentId
router.get('/:paymentId', async (req: Request, res: Response) => {
  try {
    const paymentId = req.params.paymentId;

    // Call the PaymentService to retrieve the payment by its ID
    const payment = await paymentService.getPaymentById(paymentId);

    if (!payment) {
      res.status(404).json({ error: 'Payment not found' });
      return;
    }

    // Return the payment as a JSON response
    res.json(payment);
  } catch (error) {
    console.error('Error fetching payment:', error);
    res.status(500).json({ error: 'Failed to fetch payment' });
  }
});

// PUT /api/payment/:paymentId
router.put('/:paymentId', async (req: Request, res: Response) => {
  try {
    const paymentId = req.params.paymentId;
    const updatedPayment = req.body;

    // Call the PaymentService to update the payment
    await paymentService.updatePayment(paymentId, updatedPayment);

    // Return a success response
    res.json({ message: 'Payment updated successfully' });
  } catch (error) {
    console.error('Error updating payment:', error);
    res.status(500).json({ error: 'Failed to update payment' });
  }
});

// DELETE /api/payment/:paymentId
router.delete('/:paymentId', async (req: Request, res: Response) => {
  try {
    const paymentId = req.params.paymentId;

    // Call the PaymentService to delete the payment
    await paymentService.deletePayment(paymentId);

    // Return a success response
    res.json({ message: 'Payment deleted successfully' });
  } catch (error) {
    console.error('Error deleting payment:', error);
    res.status(500).json({ error: 'Failed to delete payment' });
  }
});

export default router;
