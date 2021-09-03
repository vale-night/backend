import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { File } from './entities/file.entity';
import { IoService } from './io/io.service';

@Injectable()
export class FilesService {

  constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
    private readonly ioService: IoService
  ) {}

  //TODO - Pendente criar melhor forma de organizar os arquivos por nome.
  async create(createFileDtos: Array<CreateFileDto>, user: User) {
    for (const createFileDto of createFileDtos) {
      if(user.client) {
        createFileDto.client = user.client;
      } else if (user.organizer) {
        createFileDto.organizer = user.organizer;
      }
      createFileDto.fileName = createFileDto.file.originalname;
      createFileDto.filePath = '/';
    }
    const result = await this.fileRepository.save(createFileDtos);
    for (const savedFile of result) {
      savedFile.filePath = this.ioService.saveFile(savedFile);
      savedFile.file = null;
    }

    return this.fileRepository.save(result);
  }

  findAll(user: User) {
    return this.fileRepository.find({...user.findParameters});
  }

  //TODO - Provavelmente, quando alguém quiser recuperar um único arquivo, está desejando apenas os bytes. Revisar este processo
  async findOne(id: string, user: User) {
    const fileEntity = await this.fileRepository.findOne({id, ...user.findParameters});
    const fileContent = this.ioService.getFile(fileEntity);
    return {fileEntity, fileContent}
  }

  update(id: string, updateFileDto: UpdateFileDto, user: User) {
    return `This action updates a #${id} file`;
  }

  remove(id: string, user: User) {
    return this.fileRepository.delete({id, ...user.findParameters});
  }

}
