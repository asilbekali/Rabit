import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TavarsService } from './tavars.service';
import { CreateTavarDto } from './dto/create-tavar.dto';
import { UpdateTavarDto } from './dto/update-tavar.dto';

@Controller('tavars')
export class TavarsController {
  constructor(private readonly tavarsService: TavarsService) {}

  @Post()
  create(@Body() createTavarDto: CreateTavarDto) {
    return this.tavarsService.create(createTavarDto);
  }

  @Get()
  findAll() {
    console.log('sorov keldi');
    return this.tavarsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tavarsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTavarDto: UpdateTavarDto) {
    return this.tavarsService.update(+id, updateTavarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tavarsService.remove(+id);
  }
}
