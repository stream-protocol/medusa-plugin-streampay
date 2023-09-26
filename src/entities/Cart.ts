import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Product } from './Product'; // Import the Product entity

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Product, (product) => product.cart)
  products: Product[];

  @ManyToOne(() => User, (user) => user.carts)
  user: User;
}
