import { Client } from "src/clients/entities/client.entity";
import { Organizer } from "src/organizers/entities/organizer.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "user"})
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    email: string;
    
    @Column()
    password: string;

    @OneToOne(type => Client, client => client.user, {nullable: true})
    @JoinColumn()
    client: Client;

    @OneToOne(type => Organizer, organizer => organizer.user, {nullable: true})
    @JoinColumn()
    organizer: Organizer;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}