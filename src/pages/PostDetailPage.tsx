import { useNavigate } from 'react-router-dom';

import { BackButton } from '@/components/Search/Search.style.ts';
import Header from '@/components/common/Layout/Header';
import ArrowLeftIcon from '@/assets/icons/arrow-left-icon.svg?react';
import PostDetail from '@/components/PostDetail';
import DropDown from '@/components/common/dropDown.tsx';

const PostDetailPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header paddingY={10} paddingX={10}>
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
