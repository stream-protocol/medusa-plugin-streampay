import { EntityRepository, Repository } from 'typeorm';
import { StreamPaySTRM } from '../models/StreamPaySTRM';

@EntityRepository(StreamPaySTRM)
export class StreamPaySTRMRepository extends Repository<StreamPaySTRM> {
  /**
   * Find StreamPaySTRM records by a custom criteria.
   * @param customCriteria - Your custom criteria for filtering records.
   * @returns A Promise that resolves to an array of matching StreamPaySTRM records.
   */
  public async findByCustomCriteria(customCriteria: YourCustomCriteriaType): Promise<StreamPaySTRM[]> {
    try {
      // Implement your custom database query here
      const results = await this.createQueryBuilder('StreamPaySTRM')
        // Add your custom criteria to the query
        .where(/* Your custom WHERE conditions here */)
        .getMany();

      return results;
    } catch (error) {
      // Handle errors, log, or re-throw as needed
      throw new Error(`Error finding StreamPaySTRM records: ${error.message}`);
    }
  }
}
