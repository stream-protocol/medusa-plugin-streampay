import StreamPaymentGatewayRepository from './StreamPaymentGatewayRepository';

class StreamPaymentGatewayService {
  private paymentGatewayRepository: StreamPaymentGatewayRepository;

  constructor(paymentGatewayRepository: StreamPaymentGatewayRepository) {
    this.paymentGatewayRepository = paymentGatewayRepository;
  }

  async createPayment(amount: number, currency: string, customerEmail: string): Promise<any> {
    try {
      // You can add additional business logic here if needed
      const payment = await this.paymentGatewayRepository.createPayment(amount, currency, customerEmail);
      return payment;
    } catch (error) {
      throw new Error('Failed to create payment');
    }
  }

  // Add more methods for payment-related operations as needed

  // For example, you might have methods for capturing payments, refunding, querying payment status, etc.
}

export default StreamPaymentGatewayService;
