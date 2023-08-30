import { StreamPaymentCoreTest } from "./stream-payment-core-test";
import { StreamPayTest } from "streampay-test"; // Import StreamPay Test for mocking
import { container } from "./test-container"; // Import StreamPay testing container

describe("StreamPaymentCoreTest", () => {
  let mockStreamPayTest: StreamPayTest;

  beforeEach(() => {
    mockStreamPayTest = {
      // Mock StreamPay test methods and behaviors here
    } as any;
    container.register("streampay-test_", asValue(mockStreamPayTest));
  });

  afterEach(() => {
    container.reset();
  });

  it("should initiate payment and return session data", async () => {
    // Mock your payment context and other necessary data
    const context = {
      // ...
    };

    // Create an instance of StreamPaymentCoreTest
    const paymentProcessor = container.resolve(StreamPaymentCore);

    // Mock the streampay_.paymentIntents.create method
    mockStreamPayTest.paymentIntents.create = jest.fn().mockResolvedValue({
      id: "payment-intent-id",
    });

    // Call the initiatePayment method
    const result = await paymentProcessor.initiatePayment(context);

    // Expectations
    expect(mockStreamPayTest.paymentIntents.create).toHaveBeenCalledWith(
      // Expected payment intent request data
      // ...
    );

    // Expect the result to match your expectations
    expect(result).toEqual({
      // ...
    });
  });

  // Write more test cases for other methods...
});
