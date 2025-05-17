import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TavarsService } from './tavars.service';
import { CreateTavarDto } from './dto/create-tavar.dto';
import { UpdateTavarDto } from './dto/update-tavar.dto';

@Controller()
export class TavarsController {
  constructor(private readonly tavarsService: TavarsService) {}

  @MessagePattern('createTavar')
  create(@Payload() createTavarDto: CreateTavarDto) {
    return this.tavarsService.create(createTavarDto);
  }

  @MessagePattern('findAllTavars')
  findAll() {
    console.log('rbbitmq ni controllergisa sorov keldi');
    return this.tavarsService.findAll();
  }

  @MessagePattern('findOneTavar')
  findOne(@Payload() id: number) {
    return this.tavarsService.findOne(id);
  }

  @MessagePattern('updateTavar')
  update(@Payload() updateTavarDto: UpdateTavarDto) {
    return this.tavarsService.update(updateTavarDto.id, updateTavarDto);
  }

  @MessagePattern('removeTavar')
  remove(@Payload() id: number) {
    return this.tavarsService.remove(id);
  }
}
