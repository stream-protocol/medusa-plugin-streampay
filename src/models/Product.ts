import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { Category } from './Category';
  
  @Entity()
  export class Product {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    description: string;
  
    @Column('decimal', { precision: 10, scale: 2 })
    price: number;
  
    @Column()
    imageUrl: string;
  
    @ManyToOne(() => Category, (category) => category.products)
    @JoinColumn({ name: 'category_id' })
    category: Category;
  
    // Other product-related fields and methods can be added here
  }
  