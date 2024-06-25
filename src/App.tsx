import GlobalStyle from "@/styles/GlobalStyle.ts";
import { NavermapsProvider } from 'react-naver-maps';
import Router from "@/Router.tsx";


const naverMapApi = import.meta.env.VITE_NAVER_MAP_API;

function App() {
  return (
    <>
      <NavermapsProvider ncpClientId={naverMapApi}>
        <GlobalStyle />
        <Router/>
      </NavermapsProvider>
    </>
  )
}

export default App
