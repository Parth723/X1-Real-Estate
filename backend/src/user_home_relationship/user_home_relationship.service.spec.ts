import { Test, TestingModule } from '@nestjs/testing';
import { UserHomeRelationshipService } from './user_home_relationship.service';

describe('UserHomeRelationshipService', () => {
  let service: UserHomeRelationshipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserHomeRelationshipService],
    }).compile();

    service = module.get<UserHomeRelationshipService>(UserHomeRelationshipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
