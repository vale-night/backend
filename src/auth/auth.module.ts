import { Module } from '@nestjs/common';
import { ClientsModule } from 'src/clients/clients.module';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UsersModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
