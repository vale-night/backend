import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Organizer } from 'src/organizers/entities/organizer.entity';
import { Client } from 'src/clients/entities/client.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    async createForClient(params: CreateUserDto, client: Client) {
        const userToSave = await this.prepareToCreate(params);
        userToSave.client = client;
        return this.userRepository.save(userToSave);
    }

    async createForOrganizer(params: CreateUserDto, organizer: Organizer) {
        const userToSave = await this.prepareToCreate(params);
        userToSave.organizer = organizer;
        return this.userRepository.save(userToSave);
    }

    private async prepareToCreate(params: CreateUserDto): Promise<CreateUserDto> {
        const result = new CreateUserDto();
        result.email = params.email;
        result.password = await bcrypt.hash(params.password, await bcrypt.genSalt(10));
        return result;
    }

    findOneByEmail(email: string) {
        return this.userRepository.findOne({email}, {relations: ['client', 'organizer']});
    }
}
