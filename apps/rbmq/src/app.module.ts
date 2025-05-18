import { Module } from '@nestjs/common';
import { TavarsModule } from './tavars/tavars.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from 'apps/product/src/prisma/prisma.module';
@Module({
  imports: [TavarsModule, UserModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
