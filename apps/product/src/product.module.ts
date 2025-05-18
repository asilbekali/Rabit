import { Module } from '@nestjs/common';
import { TavarsModule } from './tavars/tavars.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TavarsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class ProductModule {}
