import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {

  constructor(
    @InjectRepository(Client)
      private clientRepository: Repository<Client>
    ) {}

  create(createClientDto: CreateClientDto) {
    return this.clientRepository.save(createClientDto);

  }

  //TODO - Criar esquema de paginação?
  findAll() {
    return this.clientRepository.find();
  }

  findOne(id: string) {
    return this.clientRepository.findOne(id);
  }

  findOneByEmail(email: string) {
    return this.clientRepository.findOne({email: email})
  }

  update(id: string, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: string) {
    return this.clientRepository.delete({id: id});
  }
}
