export type SocialProvider = 'google' | 'kakao' | 'naver';

export interface AuthConfig {
  clientId: string;
  redirectUri: string;
  authUrl: string;
}

export interface AuthProviders {
  [key: string]: AuthConfig;
} 