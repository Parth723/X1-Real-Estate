import { UserHomeService } from './user_home_relationship.service';
export declare class UserHomeRelationshipController {
    private readonly userHomeService;
    constructor(userHomeService: UserHomeService);
    findByUser(userId: number, page?: number, limit?: number): Promise<{
        data: import("../home/entities/home.entity").Home[];
        total: number;
        page: number;
        pageSize: number;
    }>;
    findByHome(homeId: number): Promise<import("../user/entities/user.entity").User[]>;
    updateUsers(homeId: number, body: {
        updatedUsers: number[];
    }): Promise<({
        user_id: number;
        home_id: number;
    } & import("./entities/user_home_relationship.entity").UserHomeRelationship)[]>;
}
