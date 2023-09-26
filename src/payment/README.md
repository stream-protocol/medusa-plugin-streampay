An example of what a `payment-gateway.ts` file in a StreamPay project look´s like. This Typescript file represents a Stream Payment Gateway service that interacts with an external payment service provider. Please note that this is a simplified example, and in a real-world application, this need to replace the placeholders with actual implementations and configurations for Solana blockchain-based payment gateway.

```typescript
import axios from 'axios';

class StreamPaymentGatewayService {
  private apiUrl: string; // Replace with Stream Payment Gateway's API URL
  private apiKey: string; // Replace with StreamPay API key or credentials

  constructor(apiUrl: string, apiKey: string) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }

  async createPaymentIntent(amount: number, currency: string): Promise<any> {
    try {
      const response = await axios.post(
        `${this.apiUrl}/payment_intents`,
        {
          amount,
          currency,
        },
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );

      if (response.data && response.data.client_secret) {
        return response.data.client_secret;
      } else {
        throw new Error('Invalid response from Stream Payment Gateway');
      }
    } catch (error) {
      throw new Error(`Error creating payment intent: ${error.message}`);
    }
  }

  async confirmPayment(paymentIntentId: string): Promise<boolean> {
    try {
      const response = await axios.post(
        `${this.apiUrl}/payment_intents/${paymentIntentId}/confirm`,
        {},
        {
          headers: {
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );

      if (response.data && response.data.status === 'succeeded') {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw new Error(`Error confirming payment: ${error.message}`);
    }
  }
}

export default StreamPaymentGatewayService;
```

In this example:

- The `StreamPaymentGatewayService` class is responsible for interacting with the Stream Payment Gateway's API.

- It has methods for creating a payment intent (`createPaymentIntent`) and confirming a payment (`confirmPayment`).

- The constructor takes the Circle API URL and Solana API key as parameters. You should replace these with Stream Payment Gateway's API URL and API key or credentials.

- The `createPaymentIntent` method sends a request to create a payment intent and returns the client secret.

- The `confirmPayment` method sends a request to confirm the payment intent and returns `true` if the payment is successful.

Please keep in mind that this is a simplified example, and the actual implementation may vary depending on the Stream Payment Gateway you are using. We need to refer to the documentation of chosen payment gateway for specific details on how to interact with blockchain platforms APIs.