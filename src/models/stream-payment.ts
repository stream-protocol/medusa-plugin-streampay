import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
export class StreamPayment {
    @PrimaryColumn()
    id: string

    @Column({ nullable: false })
    cart_id: string

    @Column({ nullable: false })
    total_amount: number

    @Column({ nullable: true })
    user_email: string

    @Column({ nullable: false })
    virtual_wallet_addr: string

    @Column({ nullable: false })
    virtual_wallet_pkey: string

    @Column({ nullable: false })
    virtual_wallet_vkey: string

    @CreateDateColumn({ nullable: false })
    created_at: Date

    @UpdateDateColumn({ nullable: false })
    updated_at: Date

    @DeleteDateColumn({ nullable: true })
    deleted_at: Date
}