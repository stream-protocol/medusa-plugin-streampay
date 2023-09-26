import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { StreamPay } from './StreamPay'; // Import other related entities if needed

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(() => StreamPay, (streamPay) => streamPay.user)
  streamPays: StreamPay[];

  // Add more user-related fields and relationships as needed

  constructor(username: string, email: string, firstName: string, lastName: string) {
    this.username = username;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
