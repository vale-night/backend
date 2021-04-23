import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressesService {

  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>
  ) { }

  create(createAddressDto: CreateAddressDto, user: User) {
    if(user.client) {
      createAddressDto.client = user.client;
    } else if (user.organizer) {
      createAddressDto.organizer = user.organizer;
    }
    return this.addressRepository.save(createAddressDto);
  }

  findAll(user: User) {
    let userParams = this.getFindUserParameters(user);
    return this.addressRepository.find(userParams);
  }

  findOne(id: string, user: User) {
    let userParams = this.getFindUserParameters(user);
    return this.addressRepository.findOne({id, ...userParams})
  }

  update(id: string, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: string, user: User) {
    let userParams = this.getFindUserParameters(user);
    return this.addressRepository.delete({id, ...userParams});
  }

  private getFindUserParameters(user: User) {
    let userParams = {};
    if(user.client) {
      userParams = {
        client: user.client
      }
    } else if (user.organizer) {
      userParams = {
        organizer: user.organizer
      }
    }
    return userParams;
  }
}
