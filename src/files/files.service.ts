import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { File } from './entities/file.entity';

@Injectable()
export class FilesService {

  constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>
  ) {}
  create(createFileDto: CreateFileDto, user: User) {
    if(user.client) {
      createFileDto.client = user.client;
    } else if (user.organizer) {
      createFileDto.organizer = user.organizer;
    }
    createFileDto.filePath = '/';
    return this.fileRepository.save(createFileDto);
  }

  findAll(user: User) {
    return this.fileRepository.find({...user.findParameters});
  }

  findOne(id: string, user: User) {
    return this.fileRepository.findOne({id, ...user.findParameters});
  }

  update(id: string, updateFileDto: UpdateFileDto, user: User) {
    return `This action updates a #${id} file`;
  }

  remove(id: string, user: User) {
    return this.fileRepository.delete({id, ...user.findParameters});
  }

}
