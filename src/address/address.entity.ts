import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { User } from "src/user/user.entity";

@Entity()
export class Address{
    @PrimaryColumn()
        id: number;

    @Column()
        address: string;
    
    @Column()
        sub_district: string;

    @Column()
        district: string;

    @Column()
        province: string;

    @Column()
        postcode: string;
    
    @ManyToOne(() => User, (user) => user.address)
    @JoinColumn()
    user: User
}