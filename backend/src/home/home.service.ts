import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Home } from './entities/home.entity';
import { In } from 'typeorm';


@Injectable()
export class HomesService {
  constructor(
    @InjectRepository(Home)
    private homeRepository: Repository<Home>,
  ) {}

  findAll() {
    return this.homeRepository.find();
  }

  findById(id: number) {
    return this.homeRepository.findOneBy({ id });
  }

  create(home: Partial<Home>) {
    const newHome = this.homeRepository.create(home);
    return this.homeRepository.save(newHome);
  }

  update(id: number, home: Partial<Home>) {
    return this.homeRepository.update(id, home);
  }

  remove(id: number) {
    return this.homeRepository.delete(id);
  }

  async findHomesByIds(homeIds: number[]) {
    return this.homeRepository.findBy({
      id: In(homeIds),
    });
  }
}
