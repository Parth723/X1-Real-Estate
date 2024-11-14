import { Controller, Get, Put, Param, Body, Query } from '@nestjs/common';
import { UserHomeService } from './user_home_relationship.service';

@Controller('relationship')
export class UserHomeRelationshipController {
  constructor(private readonly userHomeService: UserHomeService) {}

  @Get('find-by-user/:userId')
  findByUser(
    @Param('userId') userId: number,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ) {
    return this.userHomeService.findHomesByUser(userId, page, limit);
  }

  @Get('find-by-home/:homeId')
  findByHome(@Param('homeId') homeId: number) {
    return this.userHomeService.findUsersByHome(homeId);
  }

  @Put('update-users/:homeId')
  updateUsers(@Param('homeId') homeId: number, @Body() body: {updatedUsers: number[]}) {
    return this.userHomeService.updateUsersForHome(homeId, body.updatedUsers);
  } 
}
