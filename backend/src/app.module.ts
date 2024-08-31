import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLSettingModule } from './graphql/graphql.module';
import { AppController } from './app.controller';

/* Modules */
import { ChatModule } from './graphql/chat/chat.module';
import { UsersModule } from './graphql/users/users.module';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    GraphQLSettingModule,
    ChatModule,
    UsersModule,
    ServeStaticModule.forRoot({
      rootPath: `${process.cwd()}/public`,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
