import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('streampay_transactions') // Replace with your actual table name
export class StreamPay extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  userId: string;

  @Column('decimal', { precision: 18, scale: 6 })
  amount: number;

  @Column('timestamp')
  timestamp: Date;

  @Column('text')
  trxId: string;

  // Add additional fields as needed
}
