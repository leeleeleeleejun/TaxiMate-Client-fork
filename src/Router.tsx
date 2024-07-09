import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import Layout from '@/components/common/Layout';
import SearchPage from '@/pages/SearchPage.tsx';
import PostDetailPage from '@/pages/PostDetailPage.tsx';
import CreatePostPage from '@/pages/CreatePostPage';
import SetDatePage from '@/pages/CreatePostPage/SetDatePage.tsx';
import SetOriginPage from '@/pages/CreatePostPage/SetOriginPage.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/search'} element={<SearchPage />} />
          <Route path={'/post-detail'} element={<PostDetailPage />} />
          <Route path={'/create-post'} element={<CreatePostPage />} />
          <Route path={'/create-post/set-date'} element={<SetDatePage />} />
          <Route path={'/create-post/set-origin'} element={<SetOriginPage />} />
          <Route
            path={'/create-post/set-origin/search'}
            element={<SearchPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
