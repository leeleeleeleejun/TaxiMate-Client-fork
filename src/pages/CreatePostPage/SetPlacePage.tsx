import CreatePostChilePageLayout from '@/components/common/Layout/CreatePostChildPageLayout';
import SearchBar from '@/components/Home/SearchBar';
import useLocationPathPlace from '@/hooks/useLocationPathPlace.ts';

const SetPlacePage = () => {
  const path = useLocationPathPlace();

  const subTitle = (path ? '어디에서 출발' : '어디로 도착') + '하나요?';

  const targetPath =
    '/create-post/' + (path ? 'set-origin' : 'set-destination') + '/search';

  return (
    <CreatePostChilePageLayout subTitle={subTitle}>
      <SearchBar path={targetPath} />
    </CreatePostChilePageLayout>
  );
};

export default SetPlacePage;
