// Import necessary dependencies
import { EntityManager, createConnection, getConnection } from "typeorm";
import { StreamPaymentsRepository } from "./repositories/stream-payment"; // Import your repositories
import { StreamPayments } from "./models/stream-payment"; // Import your models

// Define a utility function to connect to the test database
export async function setupTestDatabase() {
  // Create a test database connection
  await createConnection({
    type: "sqlite",
    database: ":memory:",
    dropSchema: true,
    entities: [StreamPayments], // Add your entities here
    synchronize: true,
  });
}

// Define a utility function to close the test database connection
export async function closeTestDatabase() {
  // Close the test database connection
  await getConnection().close();
}

// Define a utility function to create a mock StreamPayments entity
export async function createMockStreamPayment(
  manager: EntityManager,
  data: Partial<StreamPayments>
): Promise<StreamPayments> {
  const streamPaymentRepository = manager.getCustomRepository(StreamPaymentsRepository);

  const streamPayment = streamPaymentRepository.create(data);
  return await streamPaymentRepository.save(streamPayment);
}

// Define a utility function to clean up mock data
export async function cleanupTestDatabase() {
  // Get the database connection
  const connection = getConnection();

  // Get the repository for your entity (e.g., StreamPayments)
  const streamPaymentRepository = connection.getCustomRepository(StreamPaymentsRepository);

  // Delete all records from the repository
  await streamPaymentRepository.delete({});
}
