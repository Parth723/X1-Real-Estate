import { HomesService } from './home.service';
import { Home } from './entities/home.entity';
export declare class HomesController {
    private readonly homesService;
    constructor(homesService: HomesService);
    findAll(): Promise<Home[]>;
    findById(id: number): Promise<Home>;
    create(home: Partial<Home>): Promise<Home>;
    update(id: number, home: Partial<Home>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
