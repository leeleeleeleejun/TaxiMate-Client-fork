import NextRadio from '@/components/CreatePost/Radio.tsx';
import ContentWrap from '@/components/CreatePost/ContentWrap.tsx';
import MemberIcon from '@/assets/icons/createPost/member-icon.svg?react';
import { contentWrapType } from '@/types/props';

const MemberWrap = ({ value, setRegisterDataFunc }: contentWrapType) => {
  if (!setRegisterDataFunc) return null;

  const setMemberValue = (e: string) => {
    setRegisterDataFunc('maxParticipants', e);
  };

  return (
    <ContentWrap theme={'탑승인원'} SvgIcon={MemberIcon}>
      <NextRadio value={value} setMemberValue={setMemberValue} />
    </ContentWrap>
  );
};

export default MemberWrap;
