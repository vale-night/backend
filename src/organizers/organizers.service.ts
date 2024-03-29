import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateOrganizerDto } from './dto/create-organizer.dto';
import { UpdateOrganizerDto } from './dto/update-organizer.dto';
import { Organizer } from './entities/organizer.entity';

@Injectable()
export class OrganizersService {

  constructor(
    @InjectRepository(Organizer)
      private organizerRepository: Repository<Organizer>,
      private userService: UsersService
  ) {}
  
  async create(createOrganizerDto: CreateOrganizerDto) {
    const userParams = createOrganizerDto.user;
    if(createOrganizerDto.id) {
      createOrganizerDto.createdAt = null;
      createOrganizerDto.updatedAt = null;
      await this.organizerRepository.update({id: createOrganizerDto.id}, {
        name: createOrganizerDto.name,
        cpf: createOrganizerDto.cpf,
        fantasyName: createOrganizerDto.fantasyName,
        cnpj: createOrganizerDto.cnpj,
        socialReason: createOrganizerDto.socialReason,
        rg: createOrganizerDto.rg,
        birthDate: createOrganizerDto.birthDate,
      });
      return this.organizerRepository.findOne(createOrganizerDto.id);
    }
    createOrganizerDto.user = null;
    const savedOrganizer = await this.organizerRepository.save(createOrganizerDto);
    const user = await this.userService.createForOrganizer(userParams, savedOrganizer);
    this.organizerRepository.update({id: savedOrganizer.id}, {user});
    savedOrganizer.user = user;
    savedOrganizer.user.organizer = null;
    return savedOrganizer;
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
