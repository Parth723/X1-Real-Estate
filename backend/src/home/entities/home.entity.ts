import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('home')
export class Home {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  street_address: string;

  @Column({ type: 'varchar', length: 50 })
  state: string;

  @Column({ type: 'varchar', length: 10 })
  zip: string;

  @Column({ type: 'int' })
  sqft: number;

  @Column({ type: 'int' })
  beds: number;

  @Column({ type: 'int' })
  baths: number;

  @Column({ type: 'float' })
  list_price: number;
}
