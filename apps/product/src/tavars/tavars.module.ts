import { Module } from '@nestjs/common';
import { TavarsService } from './tavars.service';
import { TavarsController } from './tavars.controller';

@Module({
  controllers: [TavarsController],
  providers: [TavarsService],
})
export class TavarsModule {}
