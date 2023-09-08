import {
    AbstractPaymentService,
    Cart,
    Data,
    Payment,
    PaymentSession,
    PaymentSessionStatus,
  } from "@medusajs/medusa"; // Create and add @stream-payjs/streampay 
  import { EntityManager } from "typeorm";
  import { StreamPaySOL } from "../models/streampay-sol"; // Transfer src/payment folder?
  import { StreamPaySOLRepository } from "../repositories/streampay-sol";
  import { PublicKey, Transaction, Connection } from "@solana/web3.js"; // Import Solana or StreamPay web3.js
  
  class StreamPaySOLService extends AbstractPaymentService {
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager;
  
    private streamPayRepository: StreamPaySOLRepository; // Updated repository type
  
    // Stream Token-specific configuration
    private strmProviderUrl: string;
    private strmProviderUser: string;
    private strmProviderPassword: string;
  
    private strmNetworkType: string; // Mainnet, Testnet, or Custom
    private strmMerchantAddress: string; // Merchant's Stream Token address
  
    private solWalletAddress: string; // Merchant's SOL wallet address
  
    private daemon: Connection | null = null;
    private wallet: any = null;
  
    // Stream Token (STRM) program address
    private strmProgramAddress: PublicKey = new PublicKey(
      "5P3giWpPBrVKL8QP8roKM7NsLdi3ie1Nc2b5r9mGtvwb"
    );
  
    constructor(
      {
        streamPayRepository,
      },
      options
    ) {
      super(options);
  
      this.streamPayRepository = streamPayRepository;
      this.strmProviderUrl = options.strmProviderUrl;
      this.strmProviderUser = options.strmProviderUser;
      this.strmProviderPassword = options.strmProviderPassword;
      this.strmNetworkType = options.strmNetworkType || "mainnet"; // Default to Mainnet if not specified
      this.strmMerchantAddress = options.strmMerchantAddress;
      this.solWalletAddress = options.solWalletAddress;
  
      // Initialize Stream Token-specific configurations
      this.initStrmProvider();
    }
  
    private async initStrmProvider() {
      // Initialize the Stream Token provider based on network type
      this.daemon = new Connection(this.strmProviderUrl, "singleGossip");
  
      // Create a wallet for Stream Token payments
      this.wallet = new Wallet({
        connection: this.daemon,
        payer: this.solWalletAddress,
      });
    }
  
    async getPaymentData(paymentSession: PaymentSession): Promise<Data> {
      const paymentData: Data = {
        paymentMethod: "SOL",
        amount: paymentSession.cart.total || 0,
        solWalletAddress: this.solWalletAddress,
      };
  
      return paymentData;
    }
  
    async createPayment(cart: Cart): Promise<Data> {
      const paymentData: Data = {
        paymentMethod: "SOL",
        amount: cart.total || 0,
        solWalletAddress: this.solWalletAddress,
      };
  
      return paymentData;
    }
  
    async capturePayment(payment: Payment): Promise<Data> {
      const capturedPayment: Data = {
        status: PaymentSessionStatus.CAPTURED,
      };
  
      return capturedPayment;
    }
  }
  
  export default StreamPaySOLService;
  