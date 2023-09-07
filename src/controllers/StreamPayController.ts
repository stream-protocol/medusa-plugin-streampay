import { Request, Response } from 'express';
import { StreamPayService } from '../services/StreamPayService'; // Import your StreamPay service

class StreamPayController {
  private streamPayService: StreamPayService;

  constructor() {
    this.streamPayService = new StreamPayService(); // Initialize your StreamPay service
  }

  async createStreamPay(req: Request, res: Response) {
    try {
      const streamPayData = req.body; // Extract StreamPay data from the request body

      // Call your StreamPay service to create a new StreamPay transaction
      const createdStreamPay = await this.streamPayService.createStreamPay(streamPayData);

      res.status(201).json(createdStreamPay); // Respond with the created StreamPay transaction
    } catch (error) {
      console.error('Error creating StreamPay transaction:', error);
      res.status(500).json({ error: 'Failed to create StreamPay transaction' });
    }
  }

  async getStreamPayById(req: Request, res: Response) {
    try {
      const streamPayId = req.params.id; // Extract StreamPay ID from the request parameters

      // Call your StreamPay service to fetch a StreamPay transaction by ID
      const streamPay = await this.streamPayService.getStreamPayById(streamPayId);

      if (!streamPay) {
        return res.status(404).json({ error: 'StreamPay transaction not found' });
      }

      res.status(200).json(streamPay); // Respond with the fetched StreamPay transaction
    } catch (error) {
      console.error('Error fetching StreamPay transaction:', error);
      res.status(500).json({ error: 'Failed to fetch StreamPay transaction' });
    }
  }

  // Implement other controller methods for updating, deleting, or listing StreamPay transactions as needed
}

export default StreamPayController;
