import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { AuthConstant } from '../../modules/auth/constants';
import { AuthType } from '../../modules/auth/types';

@Injectable()
export class OAuthProviderPipe implements PipeTransform<string, AuthType.OAuthProvider> {
  transform(value: string): AuthType.OAuthProvider {
    const isValid = Object.values(AuthConstant.Enum.OAUTH_PROVIDER).includes(value as AuthType.OAuthProvider);

    if (!isValid) {
      throw new BadRequestException(`유효하지 않은 OAuth 제공자입니다: ${value}`);
    }

    return value as AuthType.OAuthProvider;
  }
}
