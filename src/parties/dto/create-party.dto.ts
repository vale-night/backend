import { Address } from "src/addresses/entities/address.entity";
import { Organizer } from "src/organizers/entities/organizer.entity";


export class CreatePartyDto {
    name: string;
    description: string;
    highlight: boolean;
    age_group: string;
    uf: string;
    organizer: Organizer;
    address: Address;
}
