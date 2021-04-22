import { Client } from "src/clients/entities/client.entity";
import { Organizer } from "src/organizers/entities/organizer.entity";

export class CreateAddressDto {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    uf: string;
    complement: string;
    latitude: string;
    longitude: string;
    organizer: Organizer;
    client: Client;
}
