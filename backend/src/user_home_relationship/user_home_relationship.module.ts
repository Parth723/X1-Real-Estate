import { Module } from '@nestjs/common';
import { UserHomeRelationshipController } from './user_home_relationship.controller';
import { UserHomeService } from './user_home_relationship.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserHomeRelationship } from './entities/user_home_relationship.entity';
import { Home } from 'src/home/entities/home.entity';
import { User } from 'src/user/entities/user.entity';
import { HomesService } from 'src/home/home.service';
import { UsersService } from 'src/user/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserHomeRelationship,Home,User])],
  controllers: [UserHomeRelationshipController],
  providers: [UserHomeService, HomesService, UsersService],
})
export class UserHomeRelationshipModule {}
