import { Repository } from 'typeorm';
import { Home } from './entities/home.entity';
export declare class HomesService {
    private homeRepository;
    constructor(homeRepository: Repository<Home>);
    findAll(): Promise<Home[]>;
    findById(id: number): Promise<Home>;
    create(home: Partial<Home>): Promise<Home>;
    update(id: number, home: Partial<Home>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    findHomesByIds(homeIds: number[]): Promise<Home[]>;
}
