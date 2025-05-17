import { Inject, Injectable } from '@nestjs/common';
import { CreateTavarDto } from './dto/create-tavar.dto';
import { UpdateTavarDto } from './dto/update-tavar.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TavarsService {
  constructor(@Inject('PRODS') private readonly prods: ClientProxy) {}
  create(createTavarDto: CreateTavarDto) {
    return 'This action adds a new tavar';
  }

  findAll() {
    console.log('servicega sorov keldi');
    return this.prods.send('findAllTavars', {});
  }

  findOne(id: number) {
    return `This action returns a #${id} tavar`;
  }

  update(id: number, updateTavarDto: UpdateTavarDto) {
    return `This action updates a #${id} tavar`;
  }

  remove(id: number) {
    return `This action removes a #${id} tavar`;
  }
}
