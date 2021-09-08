import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/entities/user.entity';
import { PartiesService } from './parties.service';
import { CreatePartyDto } from './dto/create-party.dto';
import { UpdatePartyDto } from './dto/update-party.dto';

@Controller('parties')
export class PartiesController {
  constructor(private readonly partiesService: PartiesService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createPartyCreatePartyDto: CreatePartyDto, @Req() req: any) {
    const user = <User> req.user;
    return this.partiesService.create(createPartyCreatePartyDto, user);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Req() req: any) {
    const user = <User> req.user;
    return this.partiesService.findAll(user);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string, @Req() req: any) {
    const user = <User> req.user;
    return this.partiesService.findOne(id, user);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updatePartyCreatePartyDto: UpdatePartyDto, @Req() req: any) {
    const user = <User> req.user;
    return this.partiesService.update(id, updatePartyCreatePartyDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string, @Req() req: any) {
    const user = <User> req.user;
    return this.partiesService.remove(id, user);
  }
}
