import { PartialType } from '@nestjs/mapped-types';
import { CreateUserHomeRelationshipDto } from './create-user_home_relationship.dto';

export class UpdateUserHomeRelationshipDto extends PartialType(CreateUserHomeRelationshipDto) {}
