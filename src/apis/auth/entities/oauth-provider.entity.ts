import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'oauth_provider' })
@Unique(['name'])
export class OAuthProviderEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'varchar' })
  public name!: string;

  @Column({ type: 'boolean', default: true })
  public isActive!: boolean;

  @CreateDateColumn()
  public createdAt!: Date;
}
