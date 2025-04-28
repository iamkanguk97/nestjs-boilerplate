import { AuthConfig, AuthProviders, SocialProvider } from '../types/auth';

// 각 소셜 로그인 제공업체의 설정
// 실제 애플리케이션에서는 환경 변수를 사용하는 것이 좋습니다.
const authProviders: AuthProviders = {
    google: {
        clientId: 'YOUR_GOOGLE_CLIENT_ID',
        redirectUri: `${window.location.origin}/auth/google/callback`,
        authUrl: 'https://accounts.google.com/o/oauth2/v2/auth'
    },
    kakao: {
        clientId: 'f106aba3c5816a828c132df25c5982f5',
        redirectUri: `${window.location.origin}/auth/kakao`,
        authUrl: 'https://kauth.kakao.com/oauth/authorize'
    },
    naver: {
        clientId: 'YOUR_NAVER_CLIENT_ID',
        redirectUri: `${window.location.origin}/auth/naver/callback`,
        authUrl: 'https://nid.naver.com/oauth2.0/authorize'
    }
};

// 소셜 로그인 인증 URL 생성
export const generateAuthUrl = (provider: SocialProvider) => {
    const config: AuthConfig = authProviders[provider];

    if (!config) {
        throw new Error(`지원하지 않는 인증 제공자: ${provider}`);
    }

    const params = new URLSearchParams({
        client_id: config.clientId,
        redirect_uri: config.redirectUri,
        response_type: 'code'
    });

    // 제공자별 추가 매개변수 설정
    if (provider === 'google') {
        params.append('scope', 'email profile');
        params.append('access_type', 'offline');
    } else if (provider === 'kakao') {
        params.append('scope', 'profile_nickname profile_image');
    } else if (provider === 'naver') {
        params.append('state', Math.random().toString(36).substring(2, 15));
    }

    return `${config.authUrl}?${params.toString()}`;
};

// 소셜 로그인 실행
export const socialLogin = (provider: SocialProvider): void => {
    const authUrl = generateAuthUrl(provider);
    window.location.href = authUrl;
};

// 인증 코드 처리
export const handleAuthCode = async (provider: SocialProvider, code: string) => {
    // 여기서는 단순히 코드를 콘솔에 출력합니다.
    // 실제 구현에서는 백엔드로 코드를 전송하여 토큰 교환을 처리합니다.
    console.log(`${provider} 인증 코드:`, code);
    return { provider, code };
};
