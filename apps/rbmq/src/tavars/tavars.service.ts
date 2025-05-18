import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateTavarsDto } from 'y/shared';
import { UpdateTavarDto } from 'y/shared/dto/update.tavars.dto';

@Injectable()
export class TavarsService {
  constructor(@Inject('PRODS') private readonly prods: ClientProxy) {}
  create(createTavarDto: CreateTavarsDto) {
    return this.prods.send('createTavar', createTavarDto);
  }

  findAll() {
    return this.prods.send('findAllTavars', {});
  }

  findOne(id: number) {
    return this.prods.send('findOneTavar', { id });
  }

  update(id: number, updateTavarDto: UpdateTavarDto) {
    return this.prods.send('updateTavar', { id, updateTavarDto });
  }

  remove(id: number) {
    return this.prods.send('removeTavar', { id });
  }
}
