import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserController } from '../user/user.controller'

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USERS',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'user_queue',
        },
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
