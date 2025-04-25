import { PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import BaseTimeEntity from './base-time.entity';

export namespace CommonEntity {
  /**
   * UUID Base Entity
   * WAS에서 UUIDv7을 통해 INSERT 예정
   *
   * @author Jason
   */
  export class UUID extends BaseTimeEntity {
    @PrimaryColumn({ type: 'uuid' })
    public id!: string;
  }

  /**
   * Auto-Increment Base Entity
   * 단순 데이터 나열이면 Auto-Increment 사용
   *
   * @author Jason
   */
  export class Increment extends BaseTimeEntity {
    @PrimaryGeneratedColumn()
    public id!: number;
  }
}
