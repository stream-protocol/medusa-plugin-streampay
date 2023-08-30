import StreamPayCore from "../streampay-core"
import { PaymentIntentOptions } from "../../types"

export class StreamPayTest extends StreamPayCore {
  constructor(_, options) {
    super(_, options)
  }

  get paymentIntentOptions(): PaymentIntentOptions {
    return {}
  }
}