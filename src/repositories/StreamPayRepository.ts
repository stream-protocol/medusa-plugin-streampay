import { StreamPay } from "../models/StreamPay";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(StreamPay)
export class StreamPayRepository extends Repository<StreamPay> {
    /**
     * Find a StreamPay record by cart ID.
     * @param cartId - The cart ID to search for.
     * @returns A Promise that resolves to a StreamPay record or null if not found.
     */
    public async findByCartId(cartId: string): Promise<StreamPay | null> {
        try {
            const streamPay = await this.findOne({
                where: {
                    cart_id: cartId,
                },
            });
            return streamPay || null; // Return null if not found
        } catch (error) {
            // Handle errors, log, or re-throw as needed
            throw new Error(`Error finding StreamPay by cart ID: ${error.message}`);
        }
    }
}
