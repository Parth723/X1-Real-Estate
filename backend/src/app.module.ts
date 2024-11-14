import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { UserHomeRelationshipModule } from './user_home_relationship/user_home_relationship.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'db_user',
      password: '6equj5_db_user',
      database: 'home_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    HomeModule,
    UserHomeRelationshipModule,
  ],
})
export class AppModule { }
