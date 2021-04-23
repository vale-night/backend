import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ClientsModule } from 'src/clients/clients.module';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'VAl3N1G8',
      signOptions: {
        expiresIn: 3600
      }
    })
  ],
  providers: [AuthService, JwtStrategy],
  exports: [
    PassportModule, 
    JwtModule,
    AuthService
  ]
})
export class AuthModule {}
