import {
  AbstractPaymentService,
  Cart,
  Data,
  PaymentSession,
  PaymentSessionStatus,
} from "@medusajs/medusa";
import { EntityManager } from "typeorm";
import solanaWeb3 from "your-solana-web3-library"; // Import your Solana Web3 library
import streampayjs from "stream-javascript";
import { StreamPayment } from "../models/stream-payment";
import { StreamPaymentRepository } from "../repositories/stream-payment";

class StreamSTRMPaymentService extends AbstractPaymentService {
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
      // Connect to StreamPay daemon
      this.streamDaemon = await streampayjs.connectToDaemonRpc(
        options.daemonProviderUrl,
        options.daemonProviderUser,
        options.daemonProviderPassword
      );

      // Create Stream Token (STRM) wallet. SPL-token compliant wallet, example. Phantom.
      this.wallet = await solanaWeb3.Keypair.generate();
    }
  }

  async getPaymentData(paymentSession: PaymentSession): Promise<Data> {
    await this.connect();

    const streamPayment = new StreamPayment();
    streamPayment.cart_id = paymentSession.cart_id;
    streamPayment.total_amount = paymentSession.cart.total!;
    streamPayment.user_email = paymentSession.cart.email;
    streamPayment.strm_wallet_addr = this.wallet.publicKey.toString();
    await this.streamPaymentRepository.save(streamPayment);

    return {
      "paymentAddress": streamPayment.strm_wallet_addr,
    };
  }

  // Implement other methods for Stream Token transactions and interactions

}

export default StreamSTRMPaymentService;
