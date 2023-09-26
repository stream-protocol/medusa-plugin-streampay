import { EntityRepository, Repository } from 'typeorm';
import { StreamPayEURC } from '../models/StreamPayEURC';

@EntityRepository(StreamPayEURC)
export class StreamPayEURCRepository extends Repository<StreamPayEURC> {
  /**
   * Find StreamPayEURC records by a custom criteria.
   * @param customCriteria - Your custom criteria for filtering records.
   * @returns A Promise that resolves to an array of matching StreamPayEURC records.
   */
  public async findByCustomCriteria(customCriteria: YourCustomCriteriaType): Promise<StreamPayEURC[]> {
    try {
      // Implement your custom database query here
      const results = await this.createQueryBuilder('StreamPayEURC')
        // Add your custom criteria to the query
        .where(/* Your custom WHERE conditions here */)
        .getMany();

      return results;
    } catch (error) {
      // Handle errors, log, or re-throw as needed
      throw new Error(`Error finding StreamPayEURC records: ${error.message}`);
    }
  }
}
