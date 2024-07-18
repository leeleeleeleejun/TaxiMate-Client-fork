import { TitleInput } from '@/components/CreatePost/createPost.style.ts';
import ContentWrap from '@/components/CreatePost/ContentWrap.tsx';
import TitleIcon from '@/assets/icons/createPost/title-icon.svg?react';
import { contentWrapType } from '@/types/props';

const TitleWrap = ({ value, setRegisterDataFunc }: contentWrapType) => {
  if (!setRegisterDataFunc) return null;

  const setTitleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterDataFunc('title', e.target.value);
  };

  return (
    <ContentWrap
      theme={'제목'}
      explain={'팟을 한 줄로 표현해주세요!'}
      SvgIcon={TitleIcon}
    >
      <TitleInput
        value={value}
        onChange={setTitleValue}
        placeholder={'오후 1시 반쯤 학교에서 역으로'}
      />
    </ContentWrap>
  );
};

export default TitleWrap;
