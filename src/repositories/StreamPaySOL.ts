import { EntityRepository, Repository } from 'typeorm';
import { StreamPaySOL } from '../models/StreamPaySOL';

@EntityRepository(StreamPaySOL)
export class StreamPaySOLRepository extends Repository<StreamPaySOL> {
  /**
   * Find StreamPaySOL records by a custom criteria.
   * @param customCriteria - Your custom criteria for filtering records.
   * @returns A Promise that resolves to an array of matching StreamPaySOL records.
   */
  public async findByCustomCriteria(customCriteria: YourCustomCriteriaType): Promise<StreamPaySOL[]> {
    try {
      // Implement your custom database query here
      const results = await this.createQueryBuilder('StreamPaySOL')
        // Add your custom criteria to the query
        .where(/* Your custom WHERE conditions here */)
        .getMany();

      return results;
    } catch (error) {
      // Handle errors, log, or re-throw as needed
      throw new Error(`Error finding StreamPaySOL records: ${error.message}`);
    }
  }
}
