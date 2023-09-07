import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('streampay_sol_transactions')
export class StreamPaySOL {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @Column({ type: 'decimal', precision: 18, scale: 6 })
  solAmount: number;

  @Column({ type: 'timestamp' })
  timestamp: Date;

  @Column({ type: 'text' })
  trxId: string;
}
