import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersResolver } from './users.resolver';

import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { User } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersResolver, UsersService, ConfigService],
})
export class UsersModule {}
