import axios from 'axios';

export class StreamPaymentGatewayAPI {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async createPayment(userId: string, amount: number, description: string): Promise<any> {
    try {
      const response = await axios.post(`${this.baseURL}/payments`, {
        userId,
        amount,
        description,
      });

      return response.data;
    } catch (error) {
      console.error('Error creating payment:', error);
      throw error;
    }
  }

  async checkPaymentStatus(paymentId: string): Promise<string> {
    try {
      const response = await axios.get(`${this.baseURL}/payments/${paymentId}/status`);

      return response.data.status;
    } catch (error) {
      console.error('Error checking payment status:', error);
      throw error;
    }
  }
}
