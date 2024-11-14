"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHomeRelationshipModule = void 0;
const common_1 = require("@nestjs/common");
const user_home_relationship_controller_1 = require("./user_home_relationship.controller");
const user_home_relationship_service_1 = require("./user_home_relationship.service");
const typeorm_1 = require("@nestjs/typeorm");
const user_home_relationship_entity_1 = require("./entities/user_home_relationship.entity");
const home_entity_1 = require("../home/entities/home.entity");
const user_entity_1 = require("../user/entities/user.entity");
const home_service_1 = require("../home/home.service");
const user_service_1 = require("../user/user.service");
let UserHomeRelationshipModule = class UserHomeRelationshipModule {
};
exports.UserHomeRelationshipModule = UserHomeRelationshipModule;
exports.UserHomeRelationshipModule = UserHomeRelationshipModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_home_relationship_entity_1.UserHomeRelationship, home_entity_1.Home, user_entity_1.User])],
        controllers: [user_home_relationship_controller_1.UserHomeRelationshipController],
        providers: [user_home_relationship_service_1.UserHomeService, home_service_1.HomesService, user_service_1.UsersService],
    })
], UserHomeRelationshipModule);
//# sourceMappingURL=user_home_relationship.module.js.map