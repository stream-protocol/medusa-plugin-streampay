import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('streampay_spay_transactions')
export class StreamPaySPAY {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @Column({ type: 'decimal', precision: 18, scale: 6 })
  spayAmount: number;

  @Column({ type: 'decimal', precision: 18, scale: 6 })
  usdcAmount: number;

  @Column({ type: 'timestamp' })
  timestamp: Date;

  @Column({ type: 'text' })
  trxId: string;
}
