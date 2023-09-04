// Import necessary modules and dependencies
import { EntityRepository, Repository } from "typeorm";
import StreamPayment from "../models/stream-payment";

@EntityRepository(StreamPayment)
class StreamPaymentRepository extends Repository<StreamPayment> {
  // You can add custom repository methods here if needed
}

export default StreamPaymentRepository;
