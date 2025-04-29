import { IsDateString, IsEmail } from 'class-validator';
import { CommonEntity } from '../../../database/common/common.entity';
import { Column, Entity, JoinColumn, OneToOne, Unique } from 'typeorm';
import { UserOAuthEntity } from './user-oauth.entity';

@Entity({ name: 'user' })
@Unique(['userCode'])
@Unique(['email'])
export class UserEntity extends CommonEntity.UUID {
  // 사용자ID (UUID가 아닌 ID)
  @Column({ name: 'user_code', type: 'varchar' })
  public userCode!: string;

  // 이메일
  @Column({ type: 'varchar' })
  @IsEmail()
  public email!: string;

  // 생년월일
  @Column({ name: 'birth_date', type: 'date', nullable: true })
  @IsDateString()
  public birthDate!: Date | null;

  // 이름(성)
  @Column({ name: 'first_name', type: 'varchar', nullable: true })
  public firstName!: string | null;

  // 이름(이름)
  @Column({ name: 'given_name', type: 'varchar', nullable: true })
  public givenName!: string | null;

  // 이름(풀네임)
  @Column({ type: 'varchar' })
  public name!: string;

  // 닉네임
  @Column({ type: 'varchar', nullable: true })
  public nickname!: string | null;

  // 프로필이미지
  @Column({ name: 'profile_image_url', type: 'text', nullable: true })
  public profileImageUrl!: string | null;

  // 로그인 일시
  @Column({ name: 'login_date', type: 'timestamp' })
  public loginDate!: Date;

  // OAuth 정보와의 관계
  @OneToOne(() => UserOAuthEntity, (oauth) => oauth.user)
  @JoinColumn({ name: 'id', referencedColumnName: 'userId' })
  public oauth!: UserOAuthEntity;
}
