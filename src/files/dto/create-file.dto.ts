import { Client } from "src/clients/entities/client.entity";
import { Organizer } from "src/organizers/entities/organizer.entity";

export class CreateFileDto {
    fileName: string;
    filePath: string;
    organizer: Organizer;
    client: Client;
    file: Express.Multer.File
}
