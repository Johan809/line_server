import { Module } from '@nestjs/common';
import { AppController } from 'app/app.controller';
import { AppService } from 'app/app.service';
import { UserModule } from 'app/user/user.module';
import { UserAdressModule } from 'app/user-adress/user-adress.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    UserModule,
    UserAdressModule,
    GraphQLModule.forRoot({
      playground: process.env.NODE_ENV === 'development',
      autoSchemaFile: join(__dirname, 'src/schema.gql'),
      sortSchema: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
