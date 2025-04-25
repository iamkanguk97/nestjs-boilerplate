import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

class BaseTimeEntity {
  @CreateDateColumn()
  public createdAt!: Date;

  @UpdateDateColumn()
  public updatedAt!: Date;

  @DeleteDateColumn()
  public deletedAt!: Date | null;
}

export default BaseTimeEntity;
