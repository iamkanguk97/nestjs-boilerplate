import { CommonEntity } from '../../../database/common/common.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity extends CommonEntity.UUID {
  @Column({ type: 'varchar' })
  public name!: string;
}
