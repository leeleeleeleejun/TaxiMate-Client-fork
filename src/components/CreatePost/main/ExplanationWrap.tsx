import ContentWrap from '@/components/CreatePost/ContentWrap.tsx';
import { TextArea } from '@/components/CreatePost/createPost.style.ts';
import ExplainIcon from '@/assets/icons/createPost/explain-icon .svg?react';
import { contentWrapType } from '@/types/props';

const ExplanationWrap = ({ value, setRegisterDataFunc }: contentWrapType) => {
  if (!setRegisterDataFunc) return null;

  const setExplanationValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRegisterDataFunc('explanation', e.target.value);
  };

  return (
    <ContentWrap
      theme={'간단 설명'}
      explain={'동승자들에게 하고 싶은 말을 자유롭게 작성하세요!'}
      SvgIcon={ExplainIcon}
    >
      <TextArea
        value={value}
        placeholder={'~~ 해주세요'}
        onChange={setExplanationValue}
      />
    </ContentWrap>
  );
};

export default ExplanationWrap;
