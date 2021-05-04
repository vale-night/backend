import { Injectable } from "@nestjs/common";
import { IOHandler } from "../iohandler.interface";
import * as fs from 'fs';
import * as path from 'path';

//TODO - Finalizar implementação de serviço para persistir arquivo localmente;
@Injectable()
export class LocalIOHandlerService implements IOHandler {

    //Provavelmente existe forma melhor de apontar para a raiz do servidor.
    get baseFilePath() {
        return path.join(`${__dirname}`, '../../../uploaded-files');
    };

    saveFile(file: Express.Multer.File, dirName: string, fileName: string): Boolean { 
        fs.mkdirSync(`${this.baseFilePath}//${dirName}`, {recursive: true});
        fs.writeFileSync(`${this.baseFilePath}//${dirName}//${fileName}`, file.buffer);
        return true;
    }
    getFile(key: string): Buffer {
        const result = fs.readFileSync(key);
        return result;
    };

    removeFile: (key: string) => Boolean;

}