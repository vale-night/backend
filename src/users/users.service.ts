import { Injectable, UnauthorizedException } from '@nestjs/common';
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

    //TODO - Melhorar, utilizar hooks do próprio TypeORM, para criar a hash antes de persistir. Fazendo isto, estes métodos não serão necessários
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

    async findByLogin({ username, password }: {username, password}): Promise<User> {    
        const user = await this.findOneByEmail(username);
        
        if (!user) {
            throw new UnauthorizedException('Usuário não encontrado');    
        }
        
        // compare passwords    
        const areEqual = await this.comparePasswords(user.password, password);
        
        if (!areEqual) {
            throw new UnauthorizedException('Credenciais inválidas');    
        }
        
        user.password = null;
        return user;  
    }

    private async comparePasswords(originalPassword, receivedPassword) {
        return bcrypt.compareSync(receivedPassword, originalPassword);
    }
}
