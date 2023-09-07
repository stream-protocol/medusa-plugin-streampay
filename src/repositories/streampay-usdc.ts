import { EntityRepository, Repository } from "typeorm";
import { StreamPayUSDC } from "../models/streampay-usdc";

@EntityRepository(StreamPayUSDC)
export class StreamPayUSDCRepository extends Repository<StreamPayUSDC> {
  // Define custom repository methods if needed
}
