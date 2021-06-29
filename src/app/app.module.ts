import { Module } from "@nestjs/common";
import { AppController } from "app/app.controller";
import { AppService } from "app/app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";

import { UserModule } from "./entities/user/user.module";
import { UserAdressModule } from "./entities/user-adress/user-adress.module";
import { UserPreferencesModule } from "./entities/user-preferences/user-preferences.module";

@Module({
  imports: [
    MongooseModule.forRoot(""),
    GraphQLModule.forRoot({
      playground: process.env.NODE_ENV === "development",
      autoSchemaFile: join(__dirname, "src/schema.gql"),
      sortSchema: true,
    }),
    UserModule,
    UserAdressModule,
    UserPreferencesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
