import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreatePartyDto } from './dto/create-party.dto';
import { UpdatePartyDto } from './dto/update-party.dto';
import { Party } from './entities/party.entity';

@Injectable()
export class PartiesService {

  constructor(
    @InjectRepository(Party)
    private readonly partyRepository: Repository<Party>
  ) { }

  create(createPartyDto: CreatePartyDto, user: User) {
    createPartyDto.organizer = user.organizer;
    return this.partyRepository.save(createPartyDto);
  }

  findAll(user: User) {
    let userParams = user.findParameters;
    return this.partyRepository.find(userParams);
  }

  findOne(id: string, user: User) {
    let userParams = user.findParameters;
    return this.partyRepository.findOne({id, ...userParams})
  }

  update(id: string, updatePartyDto: UpdatePartyDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: string, user: User) {
    let userParams = user.findParameters;
    return this.partyRepository.delete({id, ...userParams});
  }
}
