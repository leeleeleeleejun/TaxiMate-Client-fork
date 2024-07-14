import CreatePostChilePageLayout from '@/components/common/Layout/CreatePostChildPageLayout';
import Map from '@/components/CreatePost/setPlace/Map.tsx';
import { SubmitContainer } from '@/components/CreatePost/setPlace/setPlace.style.ts';
import { SubmitButton } from '@/components/CreatePost/createPost.style.ts';
import LocationInfo from '@/components/common/LocationInfo';
import useLocationPathPlace from '@/hooks/useLocationPathPlace.ts';

const SetPlaceMapPage = () => {
  const path = useLocationPathPlace();

  const keyWord = path ? '출발지' : '도착지';

  const content = path ? '여기에서 출발' : '여기로 도착';

  return (
    <CreatePostChilePageLayout>
      <Map />
      <SubmitContainer>
        <LocationInfo
          keyWord={keyWord}
          place={'공주대학교'}
          address={'충남 천안시 서북구 천안대로 1223-24'}
        />
        <SubmitButton to={'/create-post'}>{content}</SubmitButton>
      </SubmitContainer>
    </CreatePostChilePageLayout>
  );
};

export default SetPlaceMapPage;
