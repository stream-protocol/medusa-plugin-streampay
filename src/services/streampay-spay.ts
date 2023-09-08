import {
    AbstractPaymentService,
    Cart,
    Data,
    Payment,
    PaymentSession,
    PaymentSessionStatus,
  } from "@medusajs/medusa"; // Create and add @stream-payjs/streampay 
  import { EntityManager } from "typeorm";
  import { StreamPaySPAY } from "../models/streampay-spay"; // Transfer src/payment folder?
  import { StreamPaySPAYRepository } from "../repositories/streampay-spay";
  import { PublicKey, Transaction, Connection } from "@solana/web3.js";
  
  class StreamPaySPAYService extends AbstractPaymentService {
    // Stream Token (STRM) program address
    private strmProgramAddress: PublicKey = new PublicKey(
      "5P3giWpPBrVKL8QP8roKM7NsLdi3ie1Nc2b5r9mGtvwb"
    );
  
    constructor(
      {
        streamPayRepository,
        // Add any additional dependencies or options here
      },
      options
    ) {
      super(options);
      // Initialize your service with the provided options and dependencies
      // Add any additional initialization logic here
    }
  
    async getPaymentData(paymentSession: PaymentSession): Promise<Data> {
      // Implement logic to get payment data for StreamPay (SPAY)
      // Include StreamPay (SPAY)-specific details here
  
      // Calculate the total amount with fees
      const totalAmount = this.calculateTotalAmount(paymentSession.cart.total);
  
      const paymentData: Data = {
        paymentMethod: "SPAY",
        amount: totalAmount,
        // Add other payment data fields, such as SPAY-specific details
        strmProgramAddress: this.strmProgramAddress.toBase58(), // Include the STRM program address
      };
  
      return paymentData;
    }
  
    async createPayment(cart: Cart): Promise<Data> {
      // Implement logic to create a SPAY payment
      // You can create a payment request or transaction here
      // Include SPAY-specific details as needed
  
      // Calculate the total amount with fees
      const totalAmount = this.calculateTotalAmount(cart.total);
  
      const paymentData: Data = {
        paymentMethod: "SPAY",
        amount: totalAmount,
        // Add other payment data fields, such as SPAY-specific details
        strmProgramAddress: this.strmProgramAddress.toBase58(), // Include the STRM program address
      };
  
      return paymentData;
    }
  
    async capturePayment(payment: Payment): Promise<Data> {
      // Implement logic to capture a StreamPay (SPAY) payment
      // You can mark the payment as captured or complete here
      // Include SPAY-specific details as needed
  
      const capturedPayment: Data = {
        status: PaymentSessionStatus.CAPTURED,
        // Add other captured payment details as needed
      };
  
      return capturedPayment;
    }
  
    // Implement other payment-related methods as needed for StreamPay
  
    // Add any additional methods or logic specific to StreamPayments™
  
    private calculateTotalAmount(cartTotal: number): number {
      // Calculate StreamPayments operational / commission fees (e.g., 1.5%)
      const operationalFeesPercentage = 1.5;
      const operationalFees = (cartTotal * operationalFeesPercentage) / 100;
  
      // Calculate local tax fees (e.g., 24% VAT)
      const localTaxPercentage = 24;
      const localTaxFees = (cartTotal * localTaxPercentage) / 100;
  
      // Calculate donation (if provided)
      const donation = 0; // Replace with the actual donation amount from the merchant or charity wallet
  
      // Calculate the total amount with all fees
      const totalAmount = cartTotal + operationalFees + localTaxFees - donation;
  
      return totalAmount;
    }
  }
  
  export default StreamPaySPAYService;
  