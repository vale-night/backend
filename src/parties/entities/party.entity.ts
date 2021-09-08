import { Address } from "src/addresses/entities/address.entity";
import { Organizer } from "src/organizers/entities/organizer.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name: "party"
})
export class Party {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    highlight: boolean;

    @Column()
    age_group: string;

    @ManyToOne(type => Organizer)
    organizer: Organizer;

    @ManyToOne(type => Address)
    address: Address;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
