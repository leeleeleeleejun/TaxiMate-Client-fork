import CreatePostChilePageLayout from '@/components/common/Layout/CreatePostChildPageLayout';
import SearchBar from '@/components/Home/SearchBar';

const SetOriginPage = () => {
  return (
    <CreatePostChilePageLayout subTitle={'어디에서 출발하나요?'}>
      <SearchBar path={'/create-post/set-origin/search'} />
    </CreatePostChilePageLayout>
  );
};

export default SetOriginPage;
