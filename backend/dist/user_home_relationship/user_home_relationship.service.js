"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHomeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_home_relationship_entity_1 = require("./entities/user_home_relationship.entity");
const home_service_1 = require("../home/home.service");
const user_service_1 = require("../user/user.service");
let UserHomeService = class UserHomeService {
    constructor(userHomeRepository, homesService, usersService) {
        this.userHomeRepository = userHomeRepository;
        this.homesService = homesService;
        this.usersService = usersService;
    }
    async findHomesByUser(userId, page = 1, limit = 10) {
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
    async findUsersByHome(homeId) {
        const relations = await this.userHomeRepository.find({ where: { home_id: homeId } });
        const userIds = relations.map(relation => relation.user_id);
        const users = await this.usersService.findUsersByIds(userIds);
        return users;
    }
    async updateUsersForHome(homeId, updatedUsers) {
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
        }
        catch (error) {
            console.error('Error updating users for home:', error);
            throw error;
        }
    }
};
exports.UserHomeService = UserHomeService;
exports.UserHomeService = UserHomeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_home_relationship_entity_1.UserHomeRelationship)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        home_service_1.HomesService,
        user_service_1.UsersService])
], UserHomeService);
//# sourceMappingURL=user_home_relationship.service.js.map