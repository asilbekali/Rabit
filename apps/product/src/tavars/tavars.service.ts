import { Injectable } from '@nestjs/common';
import { CreateTavarDto } from './dto/create-tavar.dto';
import { UpdateTavarDto } from './dto/update-tavar.dto';

@Injectable()
export class TavarsService {
  create(createTavarDto: CreateTavarDto) {
    return 'This action adds a new tavar';
  }

  findAll() {
    return ['apple', 'nimadur', 'salom', 'qalay'];
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
