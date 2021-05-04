import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { FilesService } from './files.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/entities/user.entity';
import { AnyFilesInterceptor } from '@nestjs/platform-express';

@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(AnyFilesInterceptor())
  create(@UploadedFiles() files: Array<Express.Multer.File>, @Body() body, @Req() req: any) {
    const createFileDtos = [];
    console.log(body);
    for (const file of files) {
      const createFileDto = new CreateFileDto();
      createFileDto.file = file;
      createFileDtos.push(createFileDto);
    }
    const user = <User> req.user;
    return this.filesService.create(createFileDtos, user);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll(@Req() req: any) {
    const user = <User> req.user;
    return this.filesService.findAll(user);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string, @Req() req: any) {
    const user = <User> req.user;
    return this.filesService.findOne(id, user);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateFileDto: UpdateFileDto, @Req() req: any) {
    const user = <User> req.user;
    return this.filesService.update(id, updateFileDto, user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string, @Req() req: any) {
    const user = <User> req.user;
    return this.filesService.remove(id, user);
  }
}
