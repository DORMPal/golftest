import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
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
    
}