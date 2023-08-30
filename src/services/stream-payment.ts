import {
  AbstractPaymentService,
  Cart,
  Data,
  Payment,
  PaymentSession,
  PaymentSessionStatus,
} from "@medusajs/medusa";
import { EntityManager } from "typeorm";
import streampayjs from "@stream-pay/web3.js";
import { StreamPayment } from "../models/stream-payment";
import { StreamPaymentRepository } from "../repositories/stream-payment";

class StreamPaymentService extends AbstractPaymentService {
  protected manager_: EntityManager;
  protected transactionManager_: EntityManager;

  private streamPaymentRepository: StreamPaymentRepository;

  private daemonProviderUrl: string;
  private daemonProviderUser: string;
  private daemonProviderPassword: string;
  private merchantPaymentAddress: string;

  private daemon: any = null;
  private wallet: any = null;

  constructor(
    {
      streamPaymentRepository
    },
    options
  ) {
    super(
      {
        streamPaymentRepository
      },
      options
    );

    this.streamPaymentRepository = streamPaymentRepository;
    this.daemonProviderUrl = options.daemonProviderUrl;
    this.daemonProviderUser = options.daemonProviderUser;
    this.daemonProviderPassword = options.daemonProviderPassword;
    this.merchantPaymentAddress = options.merchantPaymentAddress;
  }

  private async connect(networkType: "mainnet" | "testnet") {
    if (this.daemon == null) {
      // Connect to StreamPay daemon based on the network type
      this.daemon = await streampayjs.connectToDaemonRpc(
        this.daemonProviderUrl,
        this.daemonProviderUser,
        this.daemonProviderPassword
      );

      // Create wallet for the specific network type
      this.wallet = await streampayjs.createWalletKeys({
        networkType: networkType
      });
    }
  }

  async getPaymentData(paymentSession: PaymentSession, networkType: "mainnet" | "testnet"): Promise<Data> {
    await this.connect(networkType);

    const streamPayment = new StreamPayment();
    streamPayment.cart_id = paymentSession.cart_id;
    streamPayment.total_amount = paymentSession.cart.total!;
    streamPayment.user_email = paymentSession.cart.email;
    streamPayment.virtual_wallet_addr = this.wallet.getAddress(0, 0);
    streamPayment.virtual_wallet_pkey = this.wallet.getPrivateSpendKey();
    streamPayment.virtual_wallet_vkey = this.wallet.getPrivateViewKey();
    await this.streamPaymentRepository.save(streamPayment);

    return {
      "paymentAddress": streamPayment.virtual_wallet_addr
    };
  }

  // ... Other methods ...

}

export default StreamPaymentService;
