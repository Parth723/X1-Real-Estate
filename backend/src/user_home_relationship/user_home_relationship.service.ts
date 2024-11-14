import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { UserHomeRelationship } from './entities/user_home_relationship.entity';
import { HomesService } from 'src/home/home.service';
import { UsersService } from 'src/user/user.service';  

@Injectable()
export class UserHomeService {
  constructor(
    @InjectRepository(UserHomeRelationship)
    private userHomeRepository: Repository<UserHomeRelationship>,
    private homesService: HomesService,
    private usersService: UsersService,  
  ) {}

  async findHomesByUser(userId: number, page: number = 1, limit: number = 10) {
    const offset = (page - 1) * limit;
  
    const relations = await this.userHomeRepository.find({
      where: { user_id: userId },
      skip: offset,
      take: limit,
    });
  
    const total = await this.userHomeRepository.count({ where: { user_id: userId } });

    const homeIds = relations.map(relation => relation.home_id);
  
    const homes = await this.homesService.findHomesByIds(homeIds);
  
    return { data: homes, total, page, pageSize: limit };
  }
  

  async findUsersByHome(homeId: number) {
    const relations = await this.userHomeRepository.find({ where: { home_id: homeId } });
    const userIds = relations.map(relation => relation.user_id);
    const users = await this.usersService.findUsersByIds(userIds);
    return users;
  }

  async updateUsersForHome(homeId: number, updatedUsers: number[]) {
    try {
      if (!Array.isArray(updatedUsers)) {
        throw new Error('updatedUsers should be an array');
      }

      await this.userHomeRepository.delete({ home_id: homeId });

      const newRelations = updatedUsers.map(userId => ({  
        user_id: userId,
        home_id: homeId,
      }));

      return await this.userHomeRepository.save(newRelations);
    } catch (error) {
      console.error('Error updating users for home:', error);
      throw error;
    }
  }
}
