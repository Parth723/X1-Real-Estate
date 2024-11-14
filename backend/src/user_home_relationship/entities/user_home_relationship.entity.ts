import { Entity, PrimaryColumn, ManyToOne } from 'typeorm';

@Entity('user_home_relationship')
export class UserHomeRelationship {
  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  home_id: number;
}
