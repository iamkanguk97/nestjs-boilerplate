import { Injectable } from '@nestjs/common';
import { AuthType } from './types';
import { AuthConstant } from './constants';
import { PostSocialLoginDto } from './dtos/post-social-login.dto';
import { KakaoStrategy } from './strategies/kakao.strategy';
import { AppleStrategy } from './strategies/apple.strategy';
import { GoogleStrategy } from './strategies/google.strategy';
import { NaverStrategy } from './strategies/naver.strategy';

@Injectable()
export class AuthService {
  private readonly socialLoginStrategyMap: Record<AuthType.OAUTH_PROVIDER, AuthType.SOCIAL_STRATEGY>;

  constructor(
    private readonly kakaoStrategy: KakaoStrategy,
    private readonly googleStrategy: GoogleStrategy,
    private readonly naverStrategy: NaverStrategy,
    private readonly appleStrategy: AppleStrategy
  ) {
    this.socialLoginStrategyMap = {
      [AuthConstant.Enum.OAUTH_PROVIDER.KAKAO]: this.kakaoStrategy,
      [AuthConstant.Enum.OAUTH_PROVIDER.GOOGLE]: this.googleStrategy,
      [AuthConstant.Enum.OAUTH_PROVIDER.NAVER]: this.naverStrategy,
      [AuthConstant.Enum.OAUTH_PROVIDER.APPLE]: this.appleStrategy,
    };
  }

  /**
   * 소셜 로그인 기능
   */
  public async createSocialLogin(provider: AuthType.OAUTH_PROVIDER, body: PostSocialLoginDto.Req) {
    const { socialAuthCode } = body;

    const strategy = this.socialLoginStrategyMap[provider];
    const validateSocialAuthCodeResult = await strategy.validateSocialAuthCode(socialAuthCode);

    // 인증 결과를 가지고 회원가입 또는 로그인 작업 수행
    // 결과값 Return

    return;
  }
}
