import { Module } from '@nestjs/common';
import { ClientsModule } from 'src/clients/clients.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [ClientsModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
