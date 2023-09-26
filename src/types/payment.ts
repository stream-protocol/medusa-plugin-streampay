// payment.ts
export interface Payment {
    id: string;
    amount: number;
    status: 'pending' | 'completed' | 'failed';
    paymentMethod: PaymentMethod;
    // ... other fields related to payments
  }
  
  export interface PaymentMethod {
    type: 'credit_card' | 'paypal' | 'bank_transfer';
    // ... other fields specific to each payment method
  }
  