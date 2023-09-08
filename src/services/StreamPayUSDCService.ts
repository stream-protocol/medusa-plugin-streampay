import {
    AbstractPaymentService,
    Cart,
    Data,
    Payment,
    PaymentSession,
    PaymentSessionStatus,
  } from "@medusajs/medusa"; // Create and add @stream-payjs/streampay 
  import { EntityManager } from "typeorm";
  import { StreamPayUSDC } from "../models/StreamPayUSDC";
  import { StreamPayUSDCRepository } from "../repositories/streampay-usdc";
  import { PublicKey, Transaction, Connection } from "@solana/web3.js";
  
  class StreamPayUSDCService extends AbstractPaymentService {
    private streamPayRepository: StreamPayUSDCRepository;
  
    // Stream Token-specific configuration
    private strmProviderUrl: string;
    private strmProviderUser: string;
    private strmProviderPassword: string;
  
    private strmNetworkType: string; // Mainnet, Testnet, or Custom
    private strmMerchantAddress: string; // Merchant's Stream Token address
    private usdcWalletAddress: string; // Merchant's USDC wallet address
  
    // Wallet addresses
    private merchantWalletAddress: string; // Merchant Wallet Address
    private charityWalletAddress: string; // Charity Wallet Address
    private transactionFeeWalletAddress: string; // Transaction Fee Wallet Address
  
    // Tax rate (e.g., 24% VAT)
    private taxRate: number;
  
    private daemon: Connection | null = null;
    private wallet: any = null;
  
    // Stream Token (STRM) program address
    private strmProgramAddress: PublicKey = new PublicKey(
      "5P3giWpPBrVKL8QP8roKM7NsLdi3ie1Nc2b5r9mGtvwb"
    );
  
    constructor(
      {
        streamPayRepository,
        strmProviderUrl,
        strmProviderUser,
        strmProviderPassword,
        strmNetworkType,
        strmMerchantAddress,
        usdcWalletAddress,
        merchantWalletAddress, // Add Merchant Wallet Address
        charityWalletAddress, // Add Charity Wallet Address
        transactionFeeWalletAddress, // Add Transaction Fee Wallet Address
        taxRate, // Add Tax Rate
      },
      options
    ) {
      super(options);
  
      this.streamPayRepository = streamPayRepository;
      this.strmProviderUrl = strmProviderUrl;
      this.strmProviderUser = strmProviderUser;
      this.strmProviderPassword = strmProviderPassword;
      this.strmNetworkType = strmNetworkType || "mainnet"; // Default to Mainnet if not specified
      this.strmMerchantAddress = strmMerchantAddress;
      this.usdcWalletAddress = usdcWalletAddress;
      this.merchantWalletAddress = merchantWalletAddress; // Initialize Merchant Wallet Address
      this.charityWalletAddress = charityWalletAddress; // Initialize Charity Wallet Address
      this.transactionFeeWalletAddress = transactionFeeWalletAddress; // Initialize Transaction Fee Wallet Address
      this.taxRate = taxRate; // Initialize Tax Rate
  
      // Initialize Stream Token-specific configurations
      this.initStrmProvider();
    }
  
    private async initStrmProvider() {
      // Initialize the Stream Token provider based on network type
      this.daemon = new Connection(this.strmProviderUrl, "singleGossip");
  
      // Create a wallet for Stream Token payments
      this.wallet = new Wallet({
        connection: this.daemon,
        payer: this.usdcWalletAddress, // Use the USDC wallet address for payments
      });
    }
  
    async getPaymentData(paymentSession: PaymentSession): Promise<Data> {
      // Implement logic to get payment data for StreamPay (USDC)
      // Include StreamPay (USDC)-specific details here
  
      // Calculate the total amount with fees and taxes
      const totalAmount = this.calculateTotalAmount(paymentSession.cart.total);
  
      const paymentData: Data = {
        paymentMethod: "USDC",
        amount: totalAmount,
        // Add other payment data fields, such as USDC-specific details
      };
  
      return paymentData;
    }
  
    async createPayment(cart: Cart): Promise<Data> {
      // Implement logic to create a USDC payment
      // You can create a payment request or transaction here
      // Include USDC-specific details as needed
  
      // Calculate the total amount with fees and taxes
      const totalAmount = this.calculateTotalAmount(cart.total);
  
      const paymentData: Data = {
        paymentMethod: "USDC",
        amount: totalAmount,
        // Add other payment data fields, such as USDC-specific details
      };
  
      return paymentData;
    }
  
    async capturePayment(payment: Payment): Promise<Data> {
      // Implement logic to capture a StreamPay (USDC) payment
      // You can mark the payment as captured or complete here
      // Include USDC-specific details as needed
  
      const capturedPayment: Data = {
        status: PaymentSessionStatus.CAPTURED,
        // Add other captured payment details as needed
      };
  
  