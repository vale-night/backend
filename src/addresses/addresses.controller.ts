import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/entities/user.entity';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createAddressDto: CreateAddressDto, @Req() req: any) {
    const user = <User> req.user;
    return this.addressesService.create(createAddressDto, user);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Req() req: any) {
    const user = <User> req.user;
    return this.addressesService.findAll(user);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string, @Req() req: any) {
    const user = <User> req.user;
    return this.addressesService.findOne(id, user);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto, @Req() req: any) {
    const user = <User> req.user;
    return this.addressesService.update(id, updateAddressDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string, @Req() req: any) {
    const user = <User> req.user;
    return this.addressesService.remove(id, user);
  }
}
