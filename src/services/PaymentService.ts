import { Payment } from '../models/Payment'; // Import the Payment model
import { PaymentRepository } from '../repository/PaymentRepository';

export class PaymentService {
  private paymentRepository: PaymentRepository;

  constructor(paymentRepository: PaymentRepository) {
    this.paymentRepository = paymentRepository;
  }

  async createPayment(payment: Payment): Promise<void> {
    // Implement business logic for creating a payment
    // For example, you can validate the payment details and perform any necessary calculations

    // Call the repository to save the payment to the database
    await this.paymentRepository.createPayment(payment);
  }

  async getPaymentById(paymentId: string): Promise<Payment | null> {
    // Implement business logic for retrieving a payment by its ID
    // You can add additional logic here, such as checking the payment status

    // Call the repository to fetch the payment from the database
    return this.paymentRepository.getPaymentById(paymentId);
  }

  async updatePayment(payment: Payment): Promise<void> {
    // Implement business logic for updating a payment
    // For example, you can update the payment status or other details

    // Call the repository to update the payment in the database
    await this.paymentRepository.updatePayment(payment);
  }

  async deletePayment(paymentId: string): Promise<void> {
    // Implement business logic for deleting a payment
    // You can perform additional checks or validations here

    // Call the repository to delete the payment from the database
    await this.paymentRepository.deletePayment(paymentId);
  }
}
