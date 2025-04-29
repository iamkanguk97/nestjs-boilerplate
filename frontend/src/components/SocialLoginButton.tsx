import React from 'react';
import styled from 'styled-components';
import { SocialProvider } from '../types/auth';
import { socialLogin } from '../services/authService';

import GoogleLogo from '../assets/images/google-logo.png';
import KakaoLogo from '../assets/images/kakao-logo.png';
import NaverLogo from '../assets/images/naver-logo.png';

interface SocialLoginButtonProps {
    provider: SocialProvider;
}

// 소셜 로그인 제공자별 스타일 설정
const getProviderStyles = (provider: SocialProvider) => {
    switch (provider) {
        case 'google':
            return {
                backgroundColor: '#ffffff',
                color: '#757575',
                hoverColor: '#f2f2f2',
                $borderColor: '#DADCE0',
                logo: GoogleLogo,
                text: 'Google로 로그인'
            };
        case 'kakao':
            return {
                backgroundColor: '#FEE500',
                color: '#000000',
                hoverColor: '#FADA0A',
                $borderColor: 'transparent',
                logo: KakaoLogo,
                text: '카카오로 로그인'
            };
        case 'naver':
            return {
                backgroundColor: '#03C75A',
                color: '#ffffff',
                hoverColor: '#02B350',
                $borderColor: 'transparent',
                logo: NaverLogo,
                text: '네이버로 로그인'
            };
        default:
            return {
                backgroundColor: '#ffffff',
                color: '#757575',
                hoverColor: '#f2f2f2',
                $borderColor: '#DADCE0',
                logo: '',
                text: '소셜 로그인'
            };
    }
};

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ provider }) => {
    const styles = getProviderStyles(provider);

    const handleLogin = () => {
        socialLogin(provider);
    };

    return (
        <StyledButton
            type="button"
            onClick={handleLogin}
            backgroundColor={styles.backgroundColor}
            color={styles.color}
            hoverColor={styles.hoverColor}
            $borderColor={styles.$borderColor}
        >
            <ButtonLogo src={styles.logo} alt={`${provider} 로고`} />
            <span>{styles.text}</span>
        </StyledButton>
    );
};

interface ButtonProps {
    backgroundColor: string;
    color: string;
    hoverColor: string;
    $borderColor: string;
}

const StyledButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 12px 16px;
    margin: 10px 0;
    border-radius: 8px;
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};
    border: 1px solid ${props => props.$borderColor};
    font-size: 15px;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
        background-color: ${props => props.hoverColor};
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
`;

const ButtonLogo = styled.img`
    width: 24px;
    height: 24px;
    margin-right: 12px;
    object-fit: contain;
`;

export default SocialLoginButton;
