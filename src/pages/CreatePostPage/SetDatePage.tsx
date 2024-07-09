import SetDate from '@/components/CreatePost/SetDate';
import CreatePostChilePageLayout from '@/components/common/Layout/CreatePostChildPageLayout';

const SetDatePage = () => {
  return (
    <CreatePostChilePageLayout subTitle={'언제 출발하나요?'}>
      <SetDate />
    </CreatePostChilePageLayout>
  );
};

export default SetDatePage;
