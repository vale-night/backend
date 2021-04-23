import { Client } from "src/clients/entities/client.entity";
import { Organizer } from "src/organizers/entities/organizer.entity";
import { AddressType } from "../entities/address.entity";

export class CreateAddressDto {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    uf: string;
    complement: string;
    latitude: string;
    longitude: string;
    type: AddressType;
    organizer: Organizer;
    client: Client;
}
