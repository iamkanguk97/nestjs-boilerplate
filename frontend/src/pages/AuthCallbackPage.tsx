import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { SocialProvider } from '../types/auth';
import { handleAuthCode } from '../services/authService';

const AuthCallbackPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [authData, setAuthData] = useState<{ provider: SocialProvider; code: string } | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const processAuth = async () => {
            try {
                // URL에서 경로 정보를 가져옴
                const pathSegments = location.pathname.split('/');
                // /auth/{provider}/callback 형식에서 {provider}를 추출
                const provider = pathSegments[2] as SocialProvider;

                // URL 쿼리 파라미터에서 인증 코드 추출
                const queryParams = new URLSearchParams(location.search);
                const code = queryParams.get('code');

                if (!code) {
                    throw new Error('인증 코드를 찾을 수 없습니다.');
                }

                // 인증 코드 처리
                const result = await handleAuthCode(provider, code);
                console.log(result);
                // setAuthData(result);

                // 5초 후 홈페이지로 리다이렉트 (데모용)
                setTimeout(() => {
                    navigate('/');
                }, 15000);
            } catch (err) {
                setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.');
            } finally {
                setLoading(false);
            }
        };

        processAuth();
    }, [location, navigate]);

    if (loading) {
        return (
            <CallbackContainer>
                <LoadingSpinner />
                <LoadingText>인증 처리 중입니다...</LoadingText>
            </CallbackContainer>
        );
    }

    if (error) {
        return (
            <CallbackContainer>
                <ErrorIcon>❌</ErrorIcon>
                <ErrorTitle>인증 실패</ErrorTitle>
                <ErrorMessage>{error}</ErrorMessage>
                <BackButton onClick={() => navigate('/')}>홈으로 돌아가기</BackButton>
            </CallbackContainer>
        );
    }

    return (
        <CallbackContainer>
            <SuccessIcon>✅</SuccessIcon>
            <SuccessTitle>인증 성공!</SuccessTitle>
            <SuccessMessage>
                {authData?.provider.toUpperCase()} 로그인에 성공했습니다.
                <CodeBox>
                    <CodeLabel>인증 코드:</CodeLabel>
                    <CodeValue>{authData?.code}</CodeValue>
                </CodeBox>
            </SuccessMessage>
            <RedirectMessage>5초 후 메인 페이지로 이동합니다...</RedirectMessage>
            <BackButton onClick={() => navigate('/')}>지금 돌아가기</BackButton>
        </CallbackContainer>
    );
};

const CallbackContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    min-height: 60vh;
    margin: 20px auto;
    padding: 40px;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    text-align: center;
`;

const LoadingSpinner = styled.div`
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3498db;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-bottom: 20px;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const LoadingText = styled.p`
    font-size: 18px;
    color: #333;
    margin-bottom: 20px;
`;

const SuccessIcon = styled.div`
    font-size: 60px;
    margin-bottom: 20px;
`;

const SuccessTitle = styled.h2`
    font-size: 28px;
    font-weight: 700;
    color: #333;
    margin-bottom: 20px;
`;

const SuccessMessage = styled.div`
    font-size: 18px;
    color: #333;
    margin-bottom: 20px;
`;

const RedirectMessage = styled.p`
    font-size: 16px;
    color: #666;
    margin-bottom: 20px;
`;

const ErrorIcon = styled.div`
    font-size: 60px;
    margin-bottom: 20px;
`;

const ErrorTitle = styled.h2`
    font-size: 28px;
    font-weight: 700;
    color: #e74c3c;
    margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
    font-size: 18px;
    color: #333;
    margin-bottom: 20px;
`;

const BackButton = styled.button`
    padding: 12px 24px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #2980b9;
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
`;

const CodeBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 20px;
    padding: 15px;
    background-color: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #e9ecef;
    text-align: left;
`;

const CodeLabel = styled.span`
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
`;

const CodeValue = styled.code`
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #e9ecef;
    border-radius: 4px;
    font-family: monospace;
    font-size: 14px;
    word-break: break-all;
    color: #333;
`;

export default AuthCallbackPage;
