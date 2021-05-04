import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from './entities/file.entity';
import { IoService } from './io/io.service';
import { LocalIOHandlerService } from './io/handlers/local.io.handler.service';

@Module({
  imports: [TypeOrmModule.forFeature([File])],
  controllers: [FilesController],
  providers: [FilesService, IoService, LocalIOHandlerService]
})
export class FilesModule {}
