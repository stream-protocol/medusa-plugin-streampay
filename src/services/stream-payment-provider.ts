import StreamPaymentCore from "../core/streampayment-core"
import { PaymentIntentOptions, PaymentProviderKeys } from "../types"

class StreamPaymentProviderService extends StreamPaymentCore {
  static identifier = PaymentProviderKeys.STREAMPAY

  constructor(_, options) {
    super(_, options)
  }

  get paymentIntentOptions(): PaymentIntentOptions {
    return {}
  }
}

export default StreamPaymentProviderService