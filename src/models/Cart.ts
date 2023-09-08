// Import necessary modules and dependencies
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    JoinTable,
  } from 'typeorm';
  import { Product } from './src/product';
  
  @Entity()
  export class Cart {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToMany(() => Product, (product) => product.carts)
    @JoinTable()
    products: Product[];
  
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    total: number;
  
    @Column({ type: 'integer', default: 0 })
    quantity: number;
  
    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;
  
    // Add any custom methods or properties as needed
  
    // Constructor and other methods can be added here if required
  }
  