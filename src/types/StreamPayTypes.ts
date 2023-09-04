import { PaymentIntentOptions } from "stream-pay"; // Import relevant StreamPay types

// Define custom interfaces or types
interface CustomPaymentIntentOptions extends PaymentIntentOptions {
  custom_field: string;
}

// Extend existing types
interface CustomStreamPayOptions {
  api_key: string;
  webhook_secret: string;
  // Add custom configuration options specific to your integration
}

// Export the custom types and interfaces
export {
  CustomPaymentIntentOptions,
  CustomStreamPayOptions,
};
