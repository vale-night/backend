import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {

  constructor(
      @InjectRepository(Client)
      private clientRepository: Repository<Client>,
      private userService: UsersService
    ) {}

  async create(createClientDto: CreateClientDto) {
    const userParams = createClientDto.user;
    createClientDto.user = null;
    const savedClient = await this.clientRepository.save(createClientDto);
    const user = await this.userService.createForClient(userParams, savedClient);
    this.clientRepository.update({id: savedClient.id}, {user});
    return savedClient;

  }

  //TODO - Criar esquema de paginação?
  findAll() {
    return this.clientRepository.find();
  }

  findOne(id: string) {
    return this.clientRepository.findOne(id);
  }

  findOneByEmail(email: string) {
    return null;
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: string) {
    return this.clientRepository.delete({id: id});
  }
}
