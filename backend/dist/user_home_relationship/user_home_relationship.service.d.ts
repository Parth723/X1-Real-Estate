import { Repository } from 'typeorm';
import { UserHomeRelationship } from './entities/user_home_relationship.entity';
import { HomesService } from 'src/home/home.service';
import { UsersService } from 'src/user/user.service';
export declare class UserHomeService {
    private userHomeRepository;
    private homesService;
    private usersService;
    constructor(userHomeRepository: Repository<UserHomeRelationship>, homesService: HomesService, usersService: UsersService);
    findHomesByUser(userId: number, page?: number, limit?: number): Promise<{
        data: import("../home/entities/home.entity").Home[];
        total: number;
        page: number;
        pageSize: number;
    }>;
    findUsersByHome(homeId: number): Promise<import("../user/entities/user.entity").User[]>;
    updateUsersForHome(homeId: number, updatedUsers: number[]): Promise<({
        user_id: number;
        home_id: number;
    } & UserHomeRelationship)[]>;
}
