import { Client } from "src/clients/entities/client.entity";
import { Organizer } from "src/organizers/entities/organizer.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum AddressType {
    COMMERCIAL = "COMMERCIAL",
    RESIDENTIAL = "RESIDENTIAL"

}

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

    @Column({
        type: 'enum',
        enum: AddressType
    })
    type: AddressType;

    @ManyToOne(type => Organizer)
    organizer: Organizer;

    @ManyToOne(type => Client)
    client: Client;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
