import { Module } from '@nestjs/common';
import { TavarsModule } from './tavars/tavars.module';
import { PrismaModule } from 'apps/product/src/prisma/prisma.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [TavarsModule,  PrismaModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
