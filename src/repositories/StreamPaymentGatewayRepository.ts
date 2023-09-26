import axios from 'axios';

class StreamPaymentGatewayRepository {
  private readonly apiUrl: string;
  private readonly apiKey: string;

  constructor(apiUrl: string, apiKey: string) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }

  async createPayment(amount: number, currency: string, customerEmail: string): Promise<any> {
    try {
      const response = await axios.post(
        `${this.apiUrl}/payments`,
        {
          amount,
          currency,
          customer_email: customerEmail,
        },
        {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error('Failed to create payment');
    }
  }

  // Add more methods for payment-related operations as needed

  // For example, you might have methods for capturing payments, refunding, querying payment status, etc.
}

export default StreamPaymentGatewayRepository;
