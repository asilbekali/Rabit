import { Module } from '@nestjs/common';
import { TavarsService } from './tavars.service';
import { TavarsController } from './tavars.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODS',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'product_queue',
        },
      },
    ]),
  ],
  controllers: [TavarsController],
  providers: [TavarsService],
})
export class TavarsModule {}
