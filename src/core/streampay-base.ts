import StreamPay from "streampay";
import { EOL } from "os";
import {
  AbstractPaymentProcessor,
  isPaymentProcessorError,
  PaymentProcessorContext,
  PaymentProcessorError,
  PaymentProcessorSessionResponse,
  PaymentSessionStatus,
} from "@medusajs/medusa";
import {
  ErrorCodes,
  ErrorIntentStatus,
  PaymentIntentOptions,
  StreamPayOptions,
} from "../types";

abstract class StreamPayBase extends AbstractPaymentProcessor {
  static identifier = "StreamPayments";

  protected readonly options_: StreamPayOptions;
  protected streampay_: StreamPay;

  protected constructor(_, options) {
    super(_, options);

    this.options_ = options;

    this.init();
  }

  protected init(): void {
    this.streampay_ =
      this.streampay_ ||
      new StreamPay(this.options_.api_key, {
        apiVersion: "2023-09-5",
      });
  }

  abstract get paymentIntentOptions(): PaymentIntentOptions;

  getPaymentIntentOptions(): PaymentIntentOptions {
    const options: PaymentIntentOptions = {};

    if (this?.paymentIntentOptions?.capture_method) {
      options.capture_method = this.paymentIntentOptions.capture_method;
    }

    if (this?.paymentIntentOptions?.setup_future_usage) {
      options.setup_future_usage = this.paymentIntentOptions.setup_future_usage;
    }

    if (this?.paymentIntentOptions?.payment_method_types) {
      options.payment_method_types =
        this.paymentIntentOptions.payment_method_types;
    }

    return options;
  }

  // ... Rest of the methods, unchanged ...
}

export default StreamPayBase;
