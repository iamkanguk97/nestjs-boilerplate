import { Injectable } from '@nestjs/common';
import { ISocialLoginStrategy } from './interfaces/social-login.strategy.interface';

@Injectable()
export class KakaoStrategy implements ISocialLoginStrategy {
  async validateSocialAuthCode(authCode: string): Promise<any> {
    return authCode;
    // const result = await lastValueFrom<ValidateKakaoSocialTokenResponse>(
    //   this.httpService
    //     .get(this.KAKAO_SOCIAL_TOKEN_VERIFY_API_URL, {
    //       headers: {
    //         Authorization: `Bearer ${socialAccessToken}`,
    //         'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    //       },
    //     })
    //     .pipe(
    //       map((res) => res.data),
    //       catchError(
    //         (
    //           err: AxiosError<{
    //             msg: string;
    //             code: ValidateKakaoSocialTokenErrorCode;
    //           }>
    //         ) => {
    //           this.logger.error(err);
    //           const kakaoErrorCode = err.response?.data.code;
    //           switch (kakaoErrorCode) {
    //             case -401:
    //               throw new UnauthorizedException(
    //                 '유효하지 않은 카카오 액세스 토큰으로 요청하셨습니다. 토큰을 갱신해주세요.'
    //               );
    //             case -1:
    //               throw new InternalServerErrorException('카카오 플랫폼 서비스의 일시적 내부 장애 상태입니다.');
    //             case -2:
    //               throw new BadRequestException('카카오 액세스 토큰 정보가 잘못된 형식입니다. 다시 확인해주세요.');
    //             default:
    //               throw new InternalServerErrorException('카카오 서버로 요청 중 알 수 없는 오류 발생.');
    //           }
    //         }
    //       )
    //     )
    // );
    // const kakaoAccount = result.kakao_account;
    // if (!kakaoAccount?.email) {
    //   throw new BadRequestException('이메일 수집에 필수로 동의해야 합니다.');
    // }
    // return {
    //   socialProvider: SocialProviderTypeEnum.KAKAO,
    //   socialId: result.id.toString(),
    //   email: kakaoAccount.email,
    //   nickname: kakaoAccount?.profile?.nickname ?? kakaoAccount.name ?? '카카오_랜덤닉네임', // TODO: 랜덤닉네임 설정 유틸함수 만들기!
    //   profileImageUrl: '', // TODO: 카카오의 프로필 이미지 사용할건지?
    //   introduce: null,
    // };
  }
}
