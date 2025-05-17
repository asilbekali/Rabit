import { Module } from '@nestjs/common';
import { TavarsService } from './tavars.service';
import { TavarsController } from './tavars.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TavarsController],
  providers: [TavarsService],
})
export class TavarsModule {}
