import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { AuthConstant } from '../../modules/auth/constants';
import { AuthType } from '../../modules/auth/types';

@Injectable()
export class OAuthProviderPipe implements PipeTransform<string, AuthType.OAUTH_PROVIDER> {
  transform(value: string): AuthType.OAUTH_PROVIDER {
    const isValid = Object.values(AuthConstant.Enum.OAUTH_PROVIDER).includes(value as AuthType.OAUTH_PROVIDER);

    if (!isValid) {
      throw new BadRequestException(`유효하지 않은 OAuth 제공자입니다: ${value}`);
    }

    return value as AuthType.OAUTH_PROVIDER;
  }
}
