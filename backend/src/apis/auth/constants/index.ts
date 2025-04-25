export namespace AuthConstant {

  export namespace Enum {
    /**
     * 소셜로그인 정보제공자
     */
    export const OAUTH_PROVIDER = {
      KAKAO: 'kakao',
      GOOGLE: 'google',
      NAVER: 'naver',
      APPLE: 'apple'
    } as const;
  }
}
