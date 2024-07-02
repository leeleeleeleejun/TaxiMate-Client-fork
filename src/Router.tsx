import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import Layout from '@/components/common/Layout';
import SearchPage from '@/pages/SearchPage.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/search'} element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
