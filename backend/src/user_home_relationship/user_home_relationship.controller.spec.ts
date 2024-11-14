import { Test, TestingModule } from '@nestjs/testing';
import { UserHomeRelationshipController } from './user_home_relationship.controller';
import { UserHomeRelationshipService } from './user_home_relationship.service';

describe('UserHomeRelationshipController', () => {
  let controller: UserHomeRelationshipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserHomeRelationshipController],
      providers: [UserHomeRelationshipService],
    }).compile();

    controller = module.get<UserHomeRelationshipController>(UserHomeRelationshipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
