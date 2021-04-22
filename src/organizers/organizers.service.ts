import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrganizerDto } from './dto/create-organizer.dto';
import { UpdateOrganizerDto } from './dto/update-organizer.dto';
import { Organizer } from './entities/organizer.entity';

@Injectable()
export class OrganizersService {

  constructor(
    @InjectRepository(Organizer)
      private organizerRepository: Repository<Organizer>
  ) {}
  
  create(createOrganizerDto: CreateOrganizerDto) {
    return this.organizerRepository.save(createOrganizerDto);
  }

  findAll() {
    return this.organizerRepository.find();
  }

  findOne(id: string) {
    return this.organizerRepository.findOne(id);
  }

  update(id: string, updateOrganizerDto: UpdateOrganizerDto) {
    return `This action updates a #${id} organizer`;
  }

  remove(id: string) {
    return this.organizerRepository.delete({id: id});
  }
}
