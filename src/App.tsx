import Router from '@/Router.tsx';
import { NavermapsProvider } from 'react-naver-maps';
import { NextUIProvider } from '@nextui-org/system';

import GlobalStyle from '@/styles/GlobalStyle.ts';
import socket from '@/api/SocketTest.ts';

const naverMapApi = import.meta.env.VITE_NAVER_MAP_API;
const kakaoJsKey = import.meta.env.VITE_KAKAO_JS_KEY;

declare global {
  interface Window {
    Kakao: any;
  }
}

window.Kakao.init(kakaoJsKey);

// SDK 초기화 여부를 판단합니다.
console.log(window.Kakao.isInitialized());
socket;
function App() {
  return (
    <NavermapsProvider ncpClientId={naverMapApi}>
      <NextUIProvider>
        <GlobalStyle />
        <Router />
      </NextUIProvider>
    </NavermapsProvider>
  );
}

export default App;
