import GlobalStyle from "@/styles/GlobalStyle.ts";
import { NavermapsProvider } from 'react-naver-maps';


const naverMapApi = import.meta.env.VITE_NAVER_MAP_API;

function App() {
  return (
    <>
      <NavermapsProvider ncpClientId={naverMapApi}>
        <GlobalStyle />
      </NavermapsProvider>
    </>
  )
}

export default App
