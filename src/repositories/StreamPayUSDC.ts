import { EntityRepository, Repository } from 'typeorm';
import { StreamPayUSDC } from '../models/StreamPayUSDC';

@EntityRepository(StreamPayUSDC)
export class StreamPayUSDCRepository extends Repository<StreamPayUSDC> {
  /**
   * Find StreamPayUSDC records by a custom criteria.
   * @param customCriteria - Your custom criteria for filtering records.
   * @returns A Promise that resolves to an array of matching StreamPayUSDC records.
   */
  public async findByCustomCriteria(customCriteria: YourCustomCriteriaType): Promise<StreamPayUSDC[]> {
    try {
      // Implement your custom database query here
      const results = await this.createQueryBuilder('StreamPayUSDC')
        // Add your custom criteria to the query
        .where(/* Your custom WHERE conditions here */)
        .getMany();

      return results;
    } catch (error) {
      // Handle errors, log, or re-throw as needed
      throw new Error(`Error finding StreamPayUSDC records: ${error.message}`);
    }
  }
}
