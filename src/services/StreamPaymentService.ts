import {
  AbstractPaymentService,
  Cart,
  Data,
  Payment,
  PaymentSession,
  PaymentSessionStatus,
} from "@medusajs/medusa";
import { EntityManager } from "typeorm";
import solanaWeb3 from "your-solana-web3-library"; // Import your Solana Web3 library
import streampayjs from "streampay-web3.js@stream-pay/web3.js";
import { StreamPayment } from "../models/stream-payment";
import { StreamPaymentRepository } from "../repositories/stream-payment";

class StreamPaymentService extends AbstractPaymentService {
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
    super(
      {
        streamPaymentRepository,
      },
      options
    );

    this.streamPaymentRepository = streamPaymentRepository;
    this.solanaConnection = new solanaWeb3.Connection(options.solanaProviderUrl);
  }

  private async connect() {
    if (this.streamDaemon == null) {
      try {
        // Connect to StreamPay daemon
        this.streamDaemon = await streampayjs.connectToDaemonRpc(
          this.options.daemonProviderUrl,
          this.options.daemonProviderUser,
          this.options.daemonProviderPassword
        );

        // Create Solana wallet
        this.wallet = await solanaWeb3.Keypair.generate();
      } catch (error) {
        throw new Error("Error connecting to StreamPay daemon or creating wallet.");
      }
    }
  }

  async getPaymentData(paymentSession: PaymentSession, tokenType: string): Promise<Data> {
    await this.connect();

    try {
      const streamPayment = new StreamPayment();
      streamPayment.cart_id = paymentSession.cart_id;
      streamPayment.total_amount = paymentSession.cart.total!;
      streamPayment.user_email = paymentSession.cart.email;

      let paymentAddress = "";

      switch (tokenType) {
        case "USDC":
          paymentAddress = this.wallet.publicKey.toString();
          break;
        case "SOL":
          paymentAddress = this.wallet.publicKey.toString();
          break;
        case "STRM":
          paymentAddress = this.wallet.publicKey.toString();
          break;
        case "EURC":
          paymentAddress = this.wallet.publicKey.toString();
          break;
        default:
          throw new Error("Invalid token type.");
      }

      streamPayment.payment_wallet_addr = paymentAddress;
      await this.streamPaymentRepository.save(streamPayment);

      return {
        "paymentAddress": paymentAddress,
      };
    } catch (error) {
      throw new Error("Error getting payment data: " + error.message);
    }
  }

  async updatePaymentData(paymentSessionData: Data, data: Data): Promise<Data> {
    // Implement method to update payment data
  }

  async createPayment(cart: Cart): Promise<Data> {
    // Implement method to create a payment
  }

  async retrievePayment(paymentData: Data): Promise<Data> {
    // Implement method to retrieve payment data
  }

  async updatePayment(paymentSessionData: Data, cart: Cart): Promise<Data> {
    // Implement method to update a payment
  }

  async authorizePayment(
    paymentSession: PaymentSession,
    context: Data
  ): Promise<{ data: Data; status: PaymentSessionStatus }> {
    // Implement method to authorize a payment
  }

  async capturePayment(payment: Payment): Promise<Data> {
    // Implement method to capture a payment
  }

  async refundPayment(payment: Payment, refundAmount: number): Promise<Data> {
    // Implement method to refund a payment
  }

  async cancelPayment(payment: Payment): Promise<Data> {
    // Implement method to cancel a payment
  }

  async deletePayment(paymentSession: PaymentSession): Promise<void> {
    // Implement method to delete a payment session
  }

  async getStatus(data: Data): Promise<PaymentSessionStatus> {
    // Implement method to get the status of a payment session
  }

  dispose() {
    if (this.solanaConnection) {
      this.solanaConnection.disconnect();
    }
    if (this.streampayDaemon) {
      this.streampayDaemon.close();
    }
  }
}

export default StreamPaymentService;
