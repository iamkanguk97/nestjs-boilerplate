import { IsNotEmpty, IsString } from 'class-validator';

export namespace PostSocialLoginDto {
  /**
   * 소셜 로그인 요청 Request DTO
   */
  export class Req {
    @IsString()
    @IsNotEmpty()
    socialAuthCode!: string;
  }

  /**
   * 소셜 로그인 요청 Response DTO
   */
  export class Res {}
}
