import { Injectable } from '@nestjs/common';
import { create } from 'eslint/lib/rules/*';
import { CreateFileDto } from '../dto/create-file.dto';
import { LocalIOHandlerService } from './handlers/local.io.handler.service';
import { IOHandler } from './iohandler.interface';

@Injectable()
export class IoService {

    constructor(
        private readonly localIOHandlerService: LocalIOHandlerService
    ) {
    }

    saveFile(createFileDto: CreateFileDto): string {
        //TODO - Melhorar criação de diretório com base na entidade pai.
        const dir = createFileDto.client ? `client/${createFileDto.client.id}` : `organizer/${createFileDto.organizer.id}`;
        this.ioHandlerImplementation.saveFile(createFileDto.file, dir,createFileDto.fileName);
        return `${dir}/${createFileDto.fileName}`;
    }

    //TODO - Implementar outros handlers e lógica para escolher o correto de acordo com alguma configuração
    get ioHandlerImplementation(): IOHandler {
        return this.localIOHandlerService;
    }
}
