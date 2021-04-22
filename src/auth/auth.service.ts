import { Injectable } from '@nestjs/common';
import { ClientsService } from 'src/clients/clients.service';

@Injectable()
export class AuthService {
    constructor(private clientsService: ClientsService) {
    }

    //TODO - Melhorar para trabalhar com duas entidades
    //TODO - Salvar senha em BCrypt
    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.clientsService.findOneByEmail(username);
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
    }
}
