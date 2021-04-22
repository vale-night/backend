import { CreateUserDto } from "src/users/dto/create-user.dto";

export class CreateClientDto {
    name: string;
    cpf: string;
    user: CreateUserDto;
}
