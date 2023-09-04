import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    JoinColumn,
  } from 'typeorm';
  import { CartItem } from './CartItem';
  
  @Entity()
  export class Cart {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
  
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;
  
    @OneToMany(() => CartItem, (cartItem) => cartItem.cart, {
      cascade: true,
      eager: true,
    })
    @JoinColumn()
    items: CartItem[];
  
    // Other cart-related fields and methods can be added here
  }
  