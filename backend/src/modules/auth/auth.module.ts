import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { KakaoStrategy } from './strategies/kakao.strategy';
import { GoogleStrategy } from './strategies/google.strategy';
import { AppleStrategy } from './strategies/apple.strategy';
import { NaverStrategy } from './strategies/naver.strategy';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService, KakaoStrategy, GoogleStrategy, AppleStrategy, NaverStrategy],
})
export class AuthModule {}
