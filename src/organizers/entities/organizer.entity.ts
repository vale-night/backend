import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({
    name:"organizer"
})
export class Organizer {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({nullable: true})
    cpf: string;

    @Column({nullable: true})
    rg: string;

    @Column({nullable: true})
    birthDate: Date;
    
    @Column({nullable: true})
    fantasyName: string;

    @Column({nullable: true})
    cnpj: string;

    @Column({nullable: true})
    socialReason: string;

    @OneToOne(type => User, user => user.organizer, {nullable: true})
    @JoinColumn()
    user: User;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
