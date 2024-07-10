import { useNavigate } from 'react-router-dom';

import Header from '@/components/common/Layout/Header';
import { HeaderItem } from '@/components/common/Layout/Header/Header.style.ts';
import { BackButton } from '@/components/Search/Search.style.ts';

import ArrowLeftIcon from '@/assets/icons/arrow-left-icon.svg?react';
import { CreateSubmitButton } from '@/components/CreatePost/createPost.style.ts';
import CreatePost from '@/components/CreatePost';

const CreatePostPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header paddingY={10} paddingX={10}>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
        </BackButton>
        <HeaderItem>팟 생성</HeaderItem>
        <CreateSubmitButton>만들기</CreateSubmitButton>
      </Header>
      <CreatePost />
    </>
  );
};

export default CreatePostPage;
