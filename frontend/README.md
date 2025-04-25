# 소셜 로그인 데모 프로젝트

이 프로젝트는 React와 TypeScript를 사용하여 구글, 카카오, 네이버 소셜 로그인 기능을 구현한 데모 애플리케이션입니다.

## 주요 기능

- 구글 로그인
- 카카오 로그인
- 네이버 로그인
- 인증 콜백 처리

## 프로젝트 설정 방법

1. 프로젝트 클론:
```bash
git clone <repository-url>
cd social-login-demo
```

2. 의존성 설치:
```bash
npm install
```

3. 소셜 로그인 API 키 설정:
`src/services/authService.ts` 파일에서 다음 값들을 각 서비스에서 발급받은 클라이언트 ID로 변경하세요:
```typescript
const authProviders: AuthProviders = {
  google: {
    clientId: 'YOUR_GOOGLE_CLIENT_ID',
    ...
  },
  kakao: {
    clientId: 'YOUR_KAKAO_CLIENT_ID',
    ...
  },
  naver: {
    clientId: 'YOUR_NAVER_CLIENT_ID',
    ...
  },
};
```

4. 개발 서버 실행:
```bash
npm start
```

## 소셜 로그인 설정 방법

### 구글 로그인 설정
1. [Google Cloud Console](https://console.cloud.google.com/)에서 프로젝트 생성
2. OAuth 동의 화면 설정
3. OAuth 클라이언트 ID 발급
4. 승인된 리디렉션 URI에 `http://localhost:3000/auth/google/callback` 추가

### 카카오 로그인 설정
1. [Kakao Developers](https://developers.kakao.com/)에서 애플리케이션 생성
2. 플랫폼 > 웹 플랫폼 등록 및 `http://localhost:3000` 추가
3. 카카오 로그인 활성화 및 동의항목 설정
4. 리디렉션 URI에 `http://localhost:3000/auth/kakao/callback` 추가

### 네이버 로그인 설정
1. [Naver Developers](https://developers.naver.com/main/)에서 애플리케이션 등록
2. 로그인 오픈 API 서비스 환경 추가
3. 리디렉션 URI에 `http://localhost:3000/auth/naver/callback` 추가
4. 애플리케이션 기본 정보에서 클라이언트 ID 확인

## 주의사항

- 이 프로젝트는 데모용으로 인증 코드까지만 받아오도록 구현되어 있습니다. 실제 서비스에서는 백엔드와 연동하여 인증 토큰 교환 및 사용자 정보 요청 등의 과정이 필요합니다.
- 보안상의 이유로 clientId와 같은 값은 환경 변수로 관리하는 것이 좋습니다.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
