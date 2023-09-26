import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Cart } from './Cart'; // Import the Cart entity

@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  currency: string;

  @ManyToOne(() => Cart, (cart) => cart.payments)
  @JoinColumn({ name: 'cart_id' })
  cart: Cart;
}
