import { EntityRepository, Repository } from 'typeorm';
import { StreamPayUSDT } from '../models/StreamPayUSDT';

@EntityRepository(StreamPayUSDT)
export class StreamPayUSDTRepository extends Repository<StreamPayUSDT> {
  /**
   * Find StreamPayUSDT records by a custom criteria.
   * @param customCriteria - Your custom criteria for filtering records.
   * @returns A Promise that resolves to an array of matching StreamPayUSDT records.
   */
  public async findByCustomCriteria(customCriteria: YourCustomCriteriaType): Promise<StreamPayUSDT[]> {
    try {
      // Implement your custom database query here
      const results = await this.createQueryBuilder('StreamPayUSDT')
        // Add your custom criteria to the query
        .where(/* Your custom WHERE conditions here */)
        .getMany();

      return results;
    } catch (error) {
      // Handle errors, log, or re-throw as needed
      throw new Error(`Error finding StreamPayUSDT records: ${error.message}`);
    }
  }
}
