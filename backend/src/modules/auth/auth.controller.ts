import { Body, Controller, Param, Post } from '@nestjs/common';
import { AuthType } from './types';
import { AuthService } from './auth.service';
import { PostSocialLoginDto } from './dtos/post-social-login.dto';
import { OAuthProviderPipe } from '../../common/pipes/oauth-provider.pipe';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Router) Social Login with Strategy Pattern.
   * Provider(Vendor) will be given by path-variable.
   *
   * @param provider
   * @author Jason
   */
  @Post('social-login/:provider')
  public async postSocialLogin(
    @Param('provider', OAuthProviderPipe) provider: AuthType.OAUTH_PROVIDER,
    @Body() body: PostSocialLoginDto.Req
  ) {
    console.log(provider);
    console.log(body);
    const result = await this.authService.createSocialLogin(provider, body);
    return result;
  }
}
