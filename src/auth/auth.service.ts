import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService) {
    }

    //TODO - Melhorar para trabalhar com duas entidades
    //TODO - Salvar senha em BCrypt
    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOneByEmail(username);
        if (user && bcrypt.compareSync(pass, user.password)) {
          const { password, ...result } = user;
          return result;
        }
        return null;
    }
}
