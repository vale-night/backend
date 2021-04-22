import { Client } from "src/clients/entities/client.entity";
import { Organizer } from "src/organizers/entities/organizer.entity";

export class CreateUserDto {
    email: string;
    password: string;
    client?: Client;
    organizer?: Organizer;
}
