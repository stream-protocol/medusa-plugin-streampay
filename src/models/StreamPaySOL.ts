import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('streampay_sol_transactions')
export class StreamPaySOL {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @Column({ type: 'decimal', precision: 18, scale: 6 })
  solAmount: number;

  @CreateDateColumn()
  timestamp: Date;

  @Column({ type: 'text' })
  trxId: string;

  // Additional fields can be added here
  @Column({ type: 'text', nullable: true })
  additionalField: string | null;

  constructor(
    userId: string,
    solAmount: number,
    trxId: string,
    additionalField: string | null = null
  ) {
    this.userId = userId;
    this.solAmount = solAmount;
    this.trxId = trxId;
    this.additionalField = additionalField;
  }
}
