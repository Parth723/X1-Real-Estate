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
exports.UserHomeRelationshipController = void 0;
const common_1 = require("@nestjs/common");
const user_home_relationship_service_1 = require("./user_home_relationship.service");
let UserHomeRelationshipController = class UserHomeRelationshipController {
    constructor(userHomeService) {
        this.userHomeService = userHomeService;
    }
    findByUser(userId, page = 1, limit = 10) {
        return this.userHomeService.findHomesByUser(userId, page, limit);
    }
    findByHome(homeId) {
        return this.userHomeService.findUsersByHome(homeId);
    }
    updateUsers(homeId, body) {
        return this.userHomeService.updateUsersForHome(homeId, body.updatedUsers);
    }
};
exports.UserHomeRelationshipController = UserHomeRelationshipController;
__decorate([
    (0, common_1.Get)('find-by-user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], UserHomeRelationshipController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Get)('find-by-home/:homeId'),
    __param(0, (0, common_1.Param)('homeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserHomeRelationshipController.prototype, "findByHome", null);
__decorate([
    (0, common_1.Put)('update-users/:homeId'),
    __param(0, (0, common_1.Param)('homeId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], UserHomeRelationshipController.prototype, "updateUsers", null);
exports.UserHomeRelationshipController = UserHomeRelationshipController = __decorate([
    (0, common_1.Controller)('relationship'),
    __metadata("design:paramtypes", [user_home_relationship_service_1.UserHomeService])
], UserHomeRelationshipController);
//# sourceMappingURL=user_home_relationship.controller.js.map