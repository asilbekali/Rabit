import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TavarsService } from './tavars.service';
import { CreateTavarsDto } from 'y/shared';
import { UpdateTavarDto } from 'y/shared/dto/update.tavars.dto';

@Controller()
export class TavarsController {
  constructor(private readonly tavarsService: TavarsService) {}

  @MessagePattern('createTavar')
  create(@Payload() createTavarDto: CreateTavarsDto) {
    return this.tavarsService.create(createTavarDto);
  }

  @MessagePattern('findAllTavars')
  findAll() {
    return this.tavarsService.findTavars();
  }

  @MessagePattern('findOneTavar')
  findOne(@Payload() id: number) {
    return this.tavarsService.findOne(id);
  }

  @MessagePattern('updateTavar')
  update(@Payload() updateTavarDto: UpdateTavarDto) {
    return this.tavarsService.update(updateTavarDto);
  }

  @MessagePattern('removeTavar')
  remove(@Payload() id: number) {
    return this.tavarsService.remove(id['id']);
  }
}
