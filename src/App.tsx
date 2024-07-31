import Router from '@/Router.tsx';
import { NavermapsProvider } from 'react-naver-maps';
import GlobalStyle from '@/styles/GlobalStyle.ts';

const naverMapApi = import.meta.env.VITE_NAVER_MAP_API;
const kakaoJsKey = import.meta.env.VITE_KAKAO_JS_KEY;

declare global {
  interface Window {
    Kakao: any;
  }
}

window.Kakao.init(kakaoJsKey);

function App() {
  return (
    <>
      <NavermapsProvider ncpClientId={naverMapApi}>
        <GlobalStyle />
        <Router />
      </NavermapsProvider>
    </>
  );
}

export default App;
