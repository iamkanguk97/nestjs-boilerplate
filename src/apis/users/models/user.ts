import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ type: 'uuid' })
  public id!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;
}
