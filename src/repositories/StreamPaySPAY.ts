import { EntityRepository, Repository } from 'typeorm';
import { StreamPaySPAY } from '../models/StreamPaySPAY';

@EntityRepository(StreamPaySPAY)
export class StreamPaySPAYRepository extends Repository<StreamPaySPAY> {
  /**
   * Find StreamPaySPAY records by a custom criteria.
   * @param customCriteria - Your custom criteria for filtering records.
   * @returns A Promise that resolves to an array of matching StreamPaySPAY records.
   */
  public async findByCustomCriteria(customCriteria: YourCustomCriteriaType): Promise<StreamPaySPAY[]> {
    try {
      // Implement your custom database query here
      const results = await this.createQueryBuilder('StreamPaySPAY')
        // Add your custom criteria to the query
        .where(/* Your custom WHERE conditions here */)
        .getMany();

      return results;
    } catch (error) {
      // Handle errors, log, or re-throw as needed
      throw new Error(`Error finding StreamPaySPAY records: ${error.message}`);
    }
  }
}
