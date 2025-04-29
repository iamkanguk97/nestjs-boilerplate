import styled from 'styled-components';

/**
 * Container of Login Page
 */
export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    background-color: rgb(114, 181, 189);
`;

/**
 * Sub-Container of Login Page's Container
 */
export const LoginCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 5500px;
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

/**
 * Header of Login Page Card
 */
export const LoginHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
`;

/**
 * Logo of Login Page Card
 */
export const Logo = styled.div`
    font-size: 48px;
    margin-bottom: 16px;
`;

/**
 * Title of Login Page Card
 */
export const Title = styled.h1`
    font-size: 28px;
    font-weight: 700;
    color: #333;
    margin-bottom: 8px;
    text-align: center;
`;

/**
 * Subtitle of Login Page Card
 */
export const Subtitle = styled.p`
    font-size: 16px;
    color: #666;
    text-align: center;
    margin-bottom: 16px;
`;

/**
 * Body of Login Page Card
 */
export const LoginBody = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
`;

/**
 * Footer of Login Page Card
 */
export const LoginFooter = styled.div`
    text-align: center;
`;

/**
 * Footer Text of Login Page Card
 */
export const FooterText = styled.p`
    font-size: 14px;
    color: #999;
`;
