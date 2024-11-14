import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { HomesService } from './home.service';
import { Home } from './entities/home.entity';

@Controller('homes')
export class HomesController {
  constructor(private readonly homesService: HomesService) {}

  @Get()
  findAll() {
    return this.homesService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.homesService.findById(id);
  }

  @Post()
  create(@Body() home: Partial<Home>) {
    return this.homesService.create(home);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() home: Partial<Home>) {
    return this.homesService.update(id, home);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.homesService.remove(id);
  }
}
