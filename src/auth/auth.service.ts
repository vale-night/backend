import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService,
    private readonly jwtService: JwtService) {
    }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOneByEmail(username);
        if (!user) {
          throw new UnauthorizedException();
        }
        const { password, ...result } = user;
        return result;
    }

    async login(loginDto: {username: string, password: string}) {
      const user = await this.userService.findByLogin(loginDto);

      const token = this._createToken(user);

      return {
        username: user.email,
        ...token
      }
    }

    private _createToken({ email }: User): any {
      const user: {username} = { username: email };    
      const accessToken = this.jwtService.sign(user);    
      return {
          expiresIn: process.env.JWT_EXPIRES_IN,
          accessToken,    
      };  
  }
}
