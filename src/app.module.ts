import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { OrganizersModule } from './organizers/organizers.module';

@Module({
  imports: [ //TODO - Configurar um esquema com variáveis de ambiente, pra facilitar configurações
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'valenight',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ClientsModule,
    OrganizersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
