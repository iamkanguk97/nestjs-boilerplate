export interface ISocialLoginStrategy {
  validateSocialAuthCode(authCode: string): Promise<any>;
  // createValidateSocialAuthCodeRequest(): Promise<any>;
}
