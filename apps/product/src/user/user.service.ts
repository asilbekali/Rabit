import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'y/shared';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    
    return await this.prisma.user.create({
      data: { name: createUserDto.name },
    });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async remove(id: number) {
    const baza = await this.prisma.user.findFirst({ where: { id: id } });
    if (!baza) {
      return { message: 'User not found' };
    }
    return { message: await this.prisma.user.delete({ where: { id: id } }) };
  }
}
