import { Client } from "src/clients/entities/client.entity";
import { Organizer } from "src/organizers/entities/organizer.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "address"
})
export class Address {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    street: string;

    @Column()
    number: string;

    @Column()
    neighborhood: string;

    @Column()
    city: string;

    @Column()
    uf: string;

    @Column()
    complement: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @ManyToOne(type => Organizer)
    organizer: Organizer;

    @ManyToOne(type => Client)
    client: Client;

}
