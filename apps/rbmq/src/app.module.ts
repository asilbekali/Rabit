import { Module } from '@nestjs/common';
import { TavarsModule } from './tavars/tavars.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TavarsModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
