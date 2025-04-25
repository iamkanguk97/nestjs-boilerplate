import React from 'react';
import styled from 'styled-components';
import SocialLoginButton from '../components/SocialLoginButton';
import { SocialProvider } from '../types/auth';

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
          {socialProviders.map((provider) => (
            <SocialLoginButton key={provider} provider={provider} />
          ))}
        </LoginBody>
        <LoginFooter>
          <FooterText>
            이 페이지는 React와 TypeScript로 만들어진 소셜 로그인 데모입니다.
          </FooterText>
        </LoginFooter>
      </LoginCard>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
`;

const LoginCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 420px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const LoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const Logo = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 16px;
`;

const LoginBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;

const LoginFooter = styled.div`
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 14px;
  color: #999;
`;

export default LoginPage; 