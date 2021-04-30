import { Client } from "src/clients/entities/client.entity";
import { Organizer } from "src/organizers/entities/organizer.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({
    name: "file"
})
export class File {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @CreateDateColumn()
    uploadDate: Date;

    @Column()
    filePath: string;

    @Column()
    fileName: string;

    @ManyToOne(type => Organizer)
    organizer: Organizer;

    @ManyToOne(type => Client)
    client: Client;
}
