import {
    AbstractPaymentService,
    Cart,
    Data,
    Payment,
    PaymentSession,
    PaymentSessionStatus,
  } from "@medusajs/medusa"; // Create and add @stream-payjs/streampay 
  import { EntityManager } from "typeorm";
  import { StreamPayUSDC } from "../models/streampay-usdc"; // Transfer src/payment folder?
  import { StreamPayUSDCRepository } from "../repositories/streampay-usdc";
  import { PublicKey, Transaction, Connection } from "@solana/web3.js";
  
  // Import Axios for making API requests
  import axios from "axios";
  
  class StreamPayUSDCService extends AbstractPaymentService {
    // ... Other class members ...
  
    async getPaymentData(paymentSession: PaymentSession): Promise<Data> {
      // Fetch real-time value rate for USDC from CoinGecko or your preferred API
      const usdcRate = await this.fetchRealTimeUSDCRate();
  
      const paymentData: Data = {
        paymentMethod: "USDC",
        amount: paymentSession.cart.total || 0,
        usdcWalletAddress: this.usdcWalletAddress,
        realtimeValueRate: usdcRate,
        // Include other data as needed
      };
  
      return paymentData;
    }
  
    // ... Other methods ...
  
    private async fetchRealTimeUSDCRate(): Promise<number> {
      try {
        // Replace with your preferred cryptocurrency price API URL
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "usd-coin", // USDC ID in CoinGecko
              vs_currencies: "usd", // Convert to USD
            },
          }
        );
  
        // Extract the USDC to USD rate from the response
        const usdcRate = response.data["usd-coin"].usd;
  
        return usdcRate;
      } catch (error) {
        console.error("Error fetching USDC real-time rate:", error);
        return 1; // Default to 1 if the rate cannot be fetched
      }
    }
  }
  
  export default StreamPayUSDCService;
  