import Header from '@/components/common/Layout/Header';
import ArrowLeftIcon from '@/assets/icons/arrow-left-icon.svg?react';
import { useNavigate } from 'react-router-dom';
import { Container, SubTitle } from './CreatePostChildPageLayout.style.ts';
import { ReactNode } from 'react';

const CreatePostChilePageLayout = ({
  subTitle,
  children,
}: {
  subTitle: string;
  children: ReactNode;
}) => {
  const navigate = useNavigate();

  return (
    <>
      <Header paddingX={10} paddingY={10}>
        <button onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
        </button>
      </Header>
      <Container>
        <SubTitle>{subTitle}</SubTitle>
        {children}
      </Container>
    </>
  );
};

export default CreatePostChilePageLayout;
