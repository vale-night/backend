import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { 
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'MyS3Cr3tKey',
        });  
    }
    
    async validate(payload: {username: string, password: string}): Promise<User> {
      const {username, password} = payload;
      const user = await this.authService.validateUser(username, password);
      if (!user) {
          throw new UnauthorizedException();    
      }    payload
      return user;  
    }
}