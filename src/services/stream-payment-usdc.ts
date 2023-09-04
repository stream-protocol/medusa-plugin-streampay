import {
  AbstractPaymentService,
  PaymentSession,
  Data,
} from "@medusajs/medusa";
import { EntityManager } from "typeorm";
import solanaWeb3 from "solana/web3.js"; // Import your Solana Web3 library// Import StreamPay Web3 library
import { StreamPayment } from "../models/stream-payment";
import { StreamPaymentRepository } from "../repositories/stream-payment";

class StreamUSDCPaymentService extends AbstractPaymentService {
  protected manager_: EntityManager;
  protected transactionManager_: EntityManager;

  private streamPaymentRepository: StreamPaymentRepository;
  private solanaConnection: solanaWeb3.Connection; // Initialize your Solana connection
  private streamDaemon: any = null;
  private wallet: any = null;

  constructor(
    {
      streamPaymentRepository,
    },
    options
  ) {
    super();
    this.streamPaymentRepository = streamPaymentRepository;
    this.solanaConnection = new solanaWeb3.Connection(options.solanaProviderUrl);
    this.options = options; // You should store your options to access them later
  }

  private async connect() {
    if (!this.streamDaemon) {
      try {
        // Connect to StreamPay daemon
        this.streamDaemon = await streampayjs.connectToDaemonRpc(
          this.options.daemonProviderUrl,
          this.options.daemonProviderUser,
          this.options.daemonProviderPassword
        );

        // Create USDC (Solana-based) wallet
        this.wallet = solanaWeb3.Keypair.generate();
      } catch (error) {
        throw new Error("Error connecting to StreamPay daemon or creating wallet.");
      }
    }
  }

  async getPaymentData(paymentSession: PaymentSession): Promise<Data> {
    await this.connect();

    const streamPayment = new StreamPayment();
    streamPayment.cart_id = paymentSession.cart_id;
    streamPayment.total_amount = paymentSession.cart.total!;
    streamPayment.user_email = paymentSession.cart.email;
    streamPayment.usdc_wallet_addr = this.wallet.publicKey.toString();

    await this.streamPaymentRepository.save(streamPayment);

    return {
      "paymentAddress": streamPayment.usdc_wallet_addr,
    };
  }

  // Implement other methods for USDC (Solana) transactions and interactions
}

export default StreamUSDCPaymentService;
