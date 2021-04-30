import { Client } from "src/clients/entities/client.entity";
import { Organizer } from "src/organizers/entities/organizer.entity";
import { AfterInsert, AfterLoad, AfterUpdate, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    //Campo virtual, para facilitar a recuperação de entidades a partir do usuário logado
    findParameters: any;

    @AfterLoad()
    @AfterInsert()
    @AfterUpdate()
    generateFindParameters() {
        if(this.client) {
            this.findParameters = {
                client: this.client
            }
            return;
        }
        if(this.organizer) {
            this.findParameters = {
                organizer: this.organizer
            }
            return;
        }
    }

}