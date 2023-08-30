import { StreamPayment } from "../models/stream-payment";
import { EntityRepository, FindManyOptions, Repository } from "typeorm";
import { flatten, groupBy, map, merge } from "lodash";

@EntityRepository(StreamPayment)
export class StreamPaymentRepository extends Repository<StreamPayment> {
    public async findByCartId(cartId: string): Promise<StreamPayment> {
        return await this.findOne({
            where: {
                cart_id: cartId,
            },
        }
        );
    }
}