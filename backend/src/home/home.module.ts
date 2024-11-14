import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home } from './entities/home.entity';
import { HomesService } from './home.service';
import { HomesController } from './home.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Home])],
  providers: [HomesService],
  controllers: [HomesController],
  exports: [HomesService],
})
export class HomeModule {}
