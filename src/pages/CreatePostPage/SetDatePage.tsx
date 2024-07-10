import SetDate from '@/components/CreatePost/SetDate';
import CreatePostChilePageLayout from '@/components/common/Layout/CreatePostChildPageLayout';
import { DateStringContainer } from '@/components/CreatePost/SetDate/SetDate.style.ts';

const SetDatePage = () => {
  return (
    <CreatePostChilePageLayout subTitle={'언제 출발하나요?'}>
      <DateStringContainer>2024년 6월 3일(월) 오후 9:20 쯤</DateStringContainer>
      <SetDate />
    </CreatePostChilePageLayout>
  );
};

export default SetDatePage;
