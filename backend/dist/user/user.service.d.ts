import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User>;
    create(user: Partial<User>): Promise<User>;
    update(id: number, user: Partial<User>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    findUsersByIds(userIds: number[]): Promise<User[]>;
}
