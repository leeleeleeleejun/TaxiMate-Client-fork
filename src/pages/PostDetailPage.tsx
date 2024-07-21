import { useNavigate } from 'react-router-dom';

import Header from '@/components/common/Layout/Header';
import PostDetail from '@/components/PostDetail';
import DropDown from '@/components/common/DropDown.tsx';
import { BackButton } from '@/components/Search/Search.style.ts';

import ArrowLeftIcon from '@/assets/icons/arrow-left-icon.svg?react';

const PostDetailPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
        </BackButton>
        <DropDown />
      </Header>
      <PostDetail />
    </>
  );
};

export default PostDetailPage;
