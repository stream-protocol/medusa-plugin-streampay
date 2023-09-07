import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('streampay_usdt_transactions')
export class StreamPayUSDT {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @Column({ type: 'decimal', precision: 18, scale: 6 })
  usdtAmount: number;

  @Column({ type: 'timestamp' })
  timestamp: Date;

  @Column({ type: 'text' })
  trxId: string;
}
