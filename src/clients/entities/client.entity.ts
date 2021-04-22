import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "client"
})
export class Client {
    
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    email: string;
    
    @Column()
    password: string;
}
