import { AuthConstant } from '../constants';
import { AppleStrategy } from '../strategies/apple.strategy';
import { GoogleStrategy } from '../strategies/google.strategy';
import { KakaoStrategy } from '../strategies/kakao.strategy';
import { NaverStrategy } from '../strategies/naver.strategy';

export namespace AuthType {
  export type OAUTH_PROVIDER = (typeof AuthConstant.Enum.OAUTH_PROVIDER)[keyof typeof AuthConstant.Enum.OAUTH_PROVIDER];

  export type SOCIAL_STRATEGY = KakaoStrategy | GoogleStrategy | AppleStrategy | NaverStrategy;

  export namespace ValidateSocialAuthCodeResult {
    export interface IKakao {
      id: string;
      email: string;
      nickname: string;
      profileImageUrl: string;
    }

    export interface IGoogle {
      id: string;
      email: string;
      nickname: string;
      profileImageUrl: string;
    }

    export interface INaver {
      id: string;
      email: string;
      nickname: string;
      profileImageUrl: string;
    }

    export interface IApple {
      id: string;
      email: string;
      nickname: string;
      profileImageUrl: string;
    }
  }
}
