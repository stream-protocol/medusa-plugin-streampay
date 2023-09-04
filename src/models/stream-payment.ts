// Import necessary modules and dependencies
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity()
  class StreamPayment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: "integer" })
    cart_id: number;
  
    @Column({ type: "decimal", precision: 10, scale: 2 })
    total_amount: number;
  
    @Column({ type: "string" })
    user_email: string;
  
    @Column({ type: "string", nullable: true })
    payment_wallet_addr: string;
  
    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;
  
    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
  }
  
  export default StreamPayment;
  