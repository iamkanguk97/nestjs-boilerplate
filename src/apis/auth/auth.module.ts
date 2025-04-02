import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OAuthProviderEntity } from './entities/oauth-provider.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OAuthProviderEntity])],
  controllers: [],
  providers: [],
})
export class AuthModule {}
