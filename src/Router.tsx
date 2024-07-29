import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '@/pages/HomePage';
import Layout from '@/components/common/Layout';
//import SearchPage from '@/pages/SearchPage.tsx';
//import PostDetailPage from '@/pages/PostDetailPage.tsx';
//import CreatePostPage from '@/pages/CreatePostPage';
//import ChatListPage from '@/pages/ChatListPage.tsx';
//import ChatRoomPage from '@/pages/ChatRoomPage.tsx';
//import UsageHistoryPage from '@/pages/UsageHistoryPage.tsx';
//import MyProfilePage from '@/pages/MyProfilePage.tsx';
//import LoginPage from '@/pages/LoginPage.tsx';
import { lazy, Suspense } from 'react';

const SearchPage = lazy(() => import('@/pages/SearchPage'));
const PostDetailPage = lazy(() => import('@/pages/PostDetailPage'));
const CreatePostPage = lazy(() => import('@/pages/CreatePostPage'));
const ChatListPage = lazy(() => import('@/pages/ChatListPage'));
const ChatRoomPage = lazy(() => import('@/pages/ChatRoomPage'));
const UsageHistoryPage = lazy(() => import('@/pages/UsageHistoryPage'));
const MyProfilePage = lazy(() => import('@/pages/MyProfilePage'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div> 로딩중... </div>}>
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
            <Route path={'/login'} element={<LoginPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
