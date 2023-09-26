export interface StreamPayOptions {
    api_key: string; // treamPay API key
    capture: boolean; // Whether to automatically capture payments (true/false)
    automatic_payment_methods: boolean; // Whether automatic payment methods are enabled (true/false)
    payment_description: string; // Default payment description
    webhook_secret: string; // Webhook secret for verifying events
    // Add more options as needed
  }
  
  // Example usage:
  const StreamPayOptions: StreamPayOptions = {
    api_key: 'your_api_key_here',
    capture: true,
    automatic_payment_methods: false,
    payment_description: 'Default payment description',
    webhook_secret: 'your_webhook_secret_here',
  };
  export default StreamPayOptions;
  