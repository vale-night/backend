import { Module } from '@nestjs/common';
import { PartiesService } from './parties.service';
import { PartiesController } from './parties.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Party } from './entities/party.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Party])],
  controllers: [PartiesController],
  providers: [PartiesService]
})
export class PartiesModule {}
