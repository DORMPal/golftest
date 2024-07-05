import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

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
    
}