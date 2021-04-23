import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

    @OneToOne(type => User, user => user.organizer, {nullable: true})
    @JoinColumn()
    user: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
