// Export StreamPaymentsOptions interface
export interface StreamPaymentsOptions {
  api_key: string;
  webhook_secret: string;
  capture?: boolean;
  automatic_payment_methods?: boolean;
  payment_description?: string;
}

// Export PaymentIntentOptions interface
export interface PaymentIntentOptions {
  capture_method?: "automatic" | "manual";
  setup_future_usage?: "on_session" | "off_session";
  payment_method_types?: string[];
}

// Export ErrorCodes object
export const ErrorCodes = {
  PAYMENT_INTENT_UNEXPECTED_STATE: "payment_intent_unexpected_state",
};

// Export ErrorIntentStatus object
export const ErrorIntentStatus = {
  SUCCEEDED: "succeeded",
  CANCELED: "canceled",
};

// Export PaymentProviderKeys object
export const PaymentProviderKeys = {
  STREAMPAY: "streampay",
  SOLANA: "StreamPaySOL",
  USDC: "StreamPayUSDC",
  EURC: "StreamPayEURC",
  USDT: "StreamPayUSDT",
  STRM: "StreamPaySTRM",
};
