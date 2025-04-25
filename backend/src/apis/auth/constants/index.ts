export namespace AuthConstant {
  /**
   * 소셜로그인 정보제공자
   */
  export const OAUTH_PROVIDER = {
    KAKAO: 'KAKAO',
    GOOGLE: 'GOOGLE',
    NAVER: 'NAVER',
  } as const;
  export type OAUTH_PROVIDER = keyof typeof OAUTH_PROVIDER;
}
