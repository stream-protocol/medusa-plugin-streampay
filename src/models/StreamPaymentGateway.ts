import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('StreamPaymentGateway')
export class StreamPaymentGateway {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  gateway_name: string;

  @Column()
  gateway_type: string;

  @Column()
  api_key: string;

  @Column()
  webhook_secret: string;

  // Add more fields as needed

  constructor(
    gateway_name: string,
    gateway_type: string,
    api_key: string,
    webhook_secret: string,
    // Add more constructor parameters for additional fields
  ) {
    this.gateway_name = gateway_name;
    this.gateway_type = gateway_type;
    this.api_key = api_key;
    this.webhook_secret = webhook_secret;
    // Assign additional fields here
  }
}
