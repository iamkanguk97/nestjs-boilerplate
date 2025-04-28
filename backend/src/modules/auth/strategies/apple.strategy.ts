import { Injectable } from '@nestjs/common';
import { ISocialLoginStrategy } from './interfaces/social-login.strategy.interface';

@Injectable()
export class AppleStrategy implements ISocialLoginStrategy {
  async validateSocialAuthCode(authCode: string): Promise<any> {
    return authCode;
  }
}
