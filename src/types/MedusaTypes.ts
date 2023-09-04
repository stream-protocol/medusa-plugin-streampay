import {
    AbstractProduct,
    Cart,
    PaymentSession,
    Payment,
    // Import other types you want to extend or customize
  } from "@medusajs/medusa";
  
  // Define custom interfaces or types
  interface CustomProduct extends AbstractProduct {
    custom_field: string;
  }
  
  // Extend existing types
  interface CustomCart extends Cart {
    custom_discount: number;
  }
  
  // Create a custom payment session type
  interface CustomPaymentSession extends PaymentSession {
    custom_data: {
      // Define custom properties here
    };
  }
  
  // Define a custom payment type
  interface CustomPayment extends Payment {
    custom_property: string;
  }
  
  export {
    CustomProduct,
    CustomCart,
    CustomPaymentSession,
    CustomPayment,
  };
  