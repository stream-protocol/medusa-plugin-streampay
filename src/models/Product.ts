import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToMany,
    JoinTable,
  } from 'typeorm';
  import { Cart } from './Cart';
  
  @Entity()
  export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column('decimal', { precision: 10, scale: 2 })
    price: number;
  
    @ManyToMany(() => Cart, (cart) => cart.products)
    @JoinTable()
    carts: Cart[];
  
    // Add more properties and methods as needed
  
    // Example method to calculate the total price for a given quantity
    calculateTotalPrice(quantity: number): number {
      return this.price * quantity;
    }
  }
  