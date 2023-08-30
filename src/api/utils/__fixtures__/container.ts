import { asValue, createContainer } from "awilix"
import {
  existingCartId,
  existingCartIdWithCapturedStatus,
  existingResourceId,
  existingResourceNotCapturedId,
  nonExistingCartId,
  orderIdForExistingCartId,
  paymentId,
  paymentIntentId,
  throwingCartId,
} from "./data"

export const container = createContainer()

container.register(
  "logger",
  asValue({
    warn: jest.fn(),
    error: jest.fn(),
  })
)

// Register other mock implementations for various services...

// Example mock implementation for orderService
container.register(
  "orderService",
  asValue({
    withTransaction: function () {
      return this
    },
    retrieveByCartId: jest.fn().mockImplementation(async (cartId) => {
      if (cartId === existingCartId) {
        return {
          id: orderIdForExistingCartId,
          payment_status: "pending",
        }
      }

      // Other mock scenarios...

      return {}
    }),
    capturePayment: jest.fn(),
  })
)

// Register other mock implementations for various services...

export default container
