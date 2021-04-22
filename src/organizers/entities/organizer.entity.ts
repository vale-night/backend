import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name:"organizer"
})
export class Organizer {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    fantasyName: string;

    @Column()
    cnpj: string;

    @Column()
    socialReason: string;

    @Column()
    email: string;
    
    @Column()
    password: string;
}
