import { Module } from '@nestjs/common';
import { TavarsModule } from './tavars/tavars.module';
@Module({
  imports: [TavarsModule],
  controllers: [],
  providers: [],
})
export class ProductModule {}
