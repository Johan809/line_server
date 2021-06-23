import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserAdressModule } from './user-adress/user-adress.module';

@Module({
  imports: [UserModule, UserAdressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
