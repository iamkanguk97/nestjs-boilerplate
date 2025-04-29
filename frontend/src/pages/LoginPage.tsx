import React from 'react';
import SocialLoginButton from '../components/SocialLoginButton';
import { SocialProvider } from '../types/auth';
import { FooterText, LoginBody, LoginCard, LoginContainer, LoginFooter, LoginHeader, Logo, Subtitle, Title } from '../styles/LoginPageStyle';

const LoginPage: React.FC = () => {
    const socialProviders: SocialProvider[] = ['google', 'kakao', 'naver'];

    return (
        <LoginContainer>
            <LoginCard>
                <LoginHeader>
                    <Logo>🔐</Logo>
                    <Title>소셜 로그인</Title>
                    <Subtitle>다양한 소셜 계정으로 간편하게 로그인하세요</Subtitle>
                </LoginHeader>
                <LoginBody>
                    {socialProviders.map(provider => (
                        <SocialLoginButton key={provider} provider={provider} />
                    ))}
                </LoginBody>
                <LoginFooter>
                    <FooterText>이 페이지는 소셜로그인 테스트를 위한 React와 TypeScript로 만들어진 페이지입니다.</FooterText>
                </LoginFooter>
            </LoginCard>
        </LoginContainer>
    );
};

export default LoginPage;
