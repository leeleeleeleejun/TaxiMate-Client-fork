import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import Layout from '@/components/common/Layout';
import SearchPage from '@/pages/SearchPage.tsx';
import PostDetailPage from '@/pages/PostDetailPage.tsx';
import CreatePostPage from '@/pages/CreatePostPage';
import ChatListPage from '@/pages/ChatListPage.tsx';
import ChatRoomPage from '@/pages/ChatRoomPage.tsx';
import UsageHistoryPage from '@/pages/UsageHistoryPage.tsx';
import MyProfilePage from '@/pages/MyProfilePage.tsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/search'} element={<SearchPage />} />
          <Route path={'/post-detail'} element={<PostDetailPage />} />
          <Route path={'/create-post'} element={<CreatePostPage />} />
          <Route path={'/chat-list'} element={<ChatListPage />} />
          <Route path={'/chat-list/a'} element={<ChatRoomPage />} />
          <Route path={'/usage-history/'} element={<UsageHistoryPage />} />
          <Route path={'/my-profile/'} element={<MyProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
