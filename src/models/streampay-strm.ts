import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('streampay_strm_transactions')
export class StreamPaySTRM {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @Column({ type: 'decimal', precision: 18, scale: 6 })
  strmAmount: number;

  @Column({ type: 'timestamp' })
  timestamp: Date;

  @Column({ type: 'text' })
  trxId: string;
}
