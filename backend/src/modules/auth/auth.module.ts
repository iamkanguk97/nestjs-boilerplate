import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OAuthProviderEntity } from './entities/oauth-provider.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([OAuthProviderEntity])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
