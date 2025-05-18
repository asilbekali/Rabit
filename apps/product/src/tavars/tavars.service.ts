import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateTavarsDto } from 'y/shared';
import { UpdateTavarDto } from 'y/shared/dto/update.tavars.dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class TavarsService {
  constructor(private prisma: PrismaService) {}
  async create(createTavarDto: CreateTavarsDto) {
    return await this.prisma.product.create({ data: createTavarDto });
  }

  async findTavars() {
    return await this.prisma.product.findMany();
  }

  async findOne(data: number) {
    const baza = await this.prisma.product.findFirst({
      where: { id: data['id'] },
    });

    if (!baza) {
      return { message: 'Produc not found' };
    }
    return baza;
  }

  async update(updateTavarDto: any) {
    const baza = await this.prisma.product.findFirst({
      where: { id: updateTavarDto.id },
    });
    if (!baza) {
      return { message: 'Produc not found' };
    }

    return await this.prisma.product.update({
      where: { id: updateTavarDto.id },
      data: { name: updateTavarDto.name },
    });
  }

  async remove(id: number) {
    const baza = await this.prisma.product.findFirst({
      where: { id: id },
    });
    if (!baza) {
      return { message: 'Produc not found' };
    }

    return {
      ProductDeleted: await this.prisma.product.delete({ where: { id: id } }),
    };
  }
}
