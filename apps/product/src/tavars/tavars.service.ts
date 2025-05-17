import { Injectable } from '@nestjs/common';
import { CreateTavarsDto } from 'y/shared';
import { UpdateTavarDto } from 'y/shared/dto/update.tavars.dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class TavarsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createTavarDto: CreateTavarsDto) {
    return 'This action adds a new tavar';
  }

  findAll() {
    return this.prisma.tavars.findMany();
    return 'dfd';
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
