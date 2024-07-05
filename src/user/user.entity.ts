import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import { Address } from "src/address/address.entity";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        firstname: string;
    
    @Column()
        lastname: string;

    @Column()
        phone: string;

    @OneToMany(() => Address, (address) => address.user)
    @JoinColumn()
    address: Address
    
}