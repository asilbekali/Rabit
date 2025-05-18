import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto, UpdateUserDto } from 'y/shared';
@Injectable()
export class UserService {
  constructor(@Inject('USERS') private readonly users: ClientProxy) {}

  create(createUserDto: CreateUserDto) {
    return this.users.send('createUser', { createUserDto });
  }

  findAll() {
    return this.users.send('findAllUser', {});
  }

  remove(id: number) {
    return this.users.send('removeUser', { id });
  }
}
