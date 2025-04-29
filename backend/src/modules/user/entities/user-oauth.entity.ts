import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, Unique } from 'typeorm';
import BaseTimeEntity from '../../../database/common/base-time.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'user_oauth' })
@Unique(['vendor', 'oauthKey'])
export class UserOAuthEntity extends BaseTimeEntity {
  // 사용자ID
  @PrimaryColumn({ name: 'user_id', type: 'varchar' })
  public userId!: string;

  // 소셜로그인 vendor
  @Column({ type: 'varchar' })
  public vendor!: string;

  // 사용자의 소셜로그인키
  @Column({ name: 'oauth_key', type: 'varchar' })
  public oauthKey!: string;

  // 소셜 서버에서 제공하는 refresh token
  @Column({ name: 'refresh_token', type: 'varchar', nullable: true })
  public refreshToken!: string | null;

  // 소셜 서버에서 제공하는 refresh token 만료시간
  @Column({ name: 'refresh_token_expired_at', type: 'timestamp', nullable: true })
  public refreshTokenExpiredAt!: Date | null;

  @OneToOne(() => UserEntity, (user) => user.oauth)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  public user!: UserEntity;
}
