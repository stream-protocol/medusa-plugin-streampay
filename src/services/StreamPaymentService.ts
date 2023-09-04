import {
  AbstractPaymentsService,
  Cart,
  Data,
  Payment,
  PaymentSession,
  PaymentSessionStatus,
} from "@medusajs/medusa";
import { EntityManager } from "typeorm";
import solanaWeb3 from "@solana/web3.js"; // Import Solana Web3 library
import { StreamPayments } from "../models/stream-payment";
import { StreamPaymentsRepository } from "../repositories/stream-payment";

class StreamPaymentsService extends AbstractPaymentsService {
  protected manager_: EntityManager;
  protected transactionManager_: EntityManager;

  private streamPaymentsRepository: StreamPaymentsRepository;
  private solanaConnection: solanaWeb3.Connection; // Initialize Solana connection
  private streamDaemon: any = null;
  private wallet: any = null;

  constructor(
    {
      streamPaymentsRepository,
    },
    options
  ) {
    super(
      {
        streamPaymentsRepository,
      },
      options
    );

    this.streamPaymentsRepository = streamPaymentsRepository;
    this.solanaConnection = new solanaWeb3.Connection(options.solanaProviderUrl);
  }

  private async connect() {
    if (this.streamDaemon == null) {
      try {
        // Connect to StreamPay daemon
        this.streamDaemon = await solanaWeb3.connectToDaemonRpc(
          options.daemonProviderUrl,
          options.daemonProviderUser,
          options.daemonProviderPassword
        );

        // Create Solana wallet
        this.wallet = solanaWeb3.Keypair.generate();
      } catch (error) {
        throw new Error("Error connecting to StreamPay daemon or creating wallet.");
      }
    }
  }

  async getPaymentData(paymentSession: PaymentSession, tokenType: string): Promise<Data> {
    await this.connect();

    try {
      const streamPayments = new StreamPayments();
      streamPayments.cart_id = paymentSession.cart_id;
      streamPayments.total_amount = paymentSession.cart.total!;
      streamPayments.user_email = paymentSession.cart.email;

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

      streamPayments.payment_wallet_addr = paymentAddress;
      await this.streamPaymentsRepository.save(streamPayments);

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
    if (this.streamDaemon) {
      this.streamDaemon.close();
    }
  }
}

export default StreamPaymentsService;
