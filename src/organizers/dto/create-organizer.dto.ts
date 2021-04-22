import { CreateUserDto } from "src/users/dto/create-user.dto";

export class CreateOrganizerDto {

    fantasyName: string;
    cnpj: string;
    socialReason: string;
    user: CreateUserDto
}
