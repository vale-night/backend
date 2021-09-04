import { CreateUserDto } from "src/users/dto/create-user.dto";

export class CreateOrganizerDto {
    id?: string;
    name: string;
    cpf: string;
    fantasyName: string;
    cnpj: string;
    socialReason: string;
    rg: string;
    birthDate: Date;
    user: CreateUserDto;
    created_at: Date;
    createdAt: Date;
    updated_at: Date;
    updatedAt: Date;
}
