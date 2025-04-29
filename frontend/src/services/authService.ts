import ky, { HTTPError } from 'ky';
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
    console.log(authUrl);
    window.location.href = authUrl;
};

// 인증 코드 처리
export const handleAuthCode = async (provider: SocialProvider, code: string) => {
    // 백엔드 API 엔드포인트 URL
    // const backendApiUrl = `/api/auth/${provider}/callback`;
    const backendApiUrl = `http://localhost:8000/auth/social-login/${provider}`;

    try {
        // 백엔드로 인증 코드를 POST 요청으로 전송 (ky 사용)
        const result = await ky
            .post(backendApiUrl, {
                json: { socialAuthCode: code }, // 요청 본문에 인증 코드 포함 (ky가 자동으로 직렬화)
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .json(); // 응답을 JSON으로 파싱

        // 콘솔에 결과 로깅 (디버깅 목적)
        console.log(`${provider} 인증 성공:`, result);

        // 백엔드에서 받은 결과 반환 (실제 반환 타입에 맞게 단언 또는 검증 필요)
        return result;
    } catch (error: unknown) {
        // catch 블록의 error 타입을 unknown으로 명시
        console.error(`${provider} 인증 처리 중 오류 발생:`, error);

        // ky의 HTTPError 인스턴스인지 확인 (HTTPError 직접 사용)
        if (error instanceof HTTPError) {
            try {
                // 오류 응답 본문을 텍스트로 읽어옴
                const responseBody = await error.response.text();
                console.error('오류 응답 본문:', responseBody);
                // 구체적인 오류 메시지와 함께 에러 throw
                throw new Error(`백엔드 API 호출 실패 (${error.response.status}): ${responseBody || '서버 오류'}`);
            } catch (parsingError) {
                // 응답 본문 파싱 중 오류 발생 시 대체 메시지
                console.error('오류 응답 본문 파싱 실패:', parsingError);
                throw new Error(`백엔드 API 호출 실패 (${error.response.status}) 및 응답 본문 확인 불가`);
            }
        } else if (error instanceof Error) {
            // 일반 Error 인스턴스인 경우 그대로 다시 throw
            throw error;
        } else {
            // 그 외 알 수 없는 타입의 오류 처리
            throw new Error('인증 처리 중 알 수 없는 오류 발생');
        }
    }
};
