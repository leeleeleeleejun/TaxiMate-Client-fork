import CreatePostChilePageLayout from '@/components/common/Layout/CreatePostChildPageLayout';
import Map from '@/components/CreatePost/setPlace/Map.tsx';
import { SubmitContainer } from '@/components/CreatePost/setPlace/setPlace.style.ts';
import { SubmitButton } from '@/components/CreatePost/createPost.style.ts';
import LocationInfo from '@/components/common/LocationInfo';

const SetOriginMapPage = () => {
  return (
    <CreatePostChilePageLayout>
      <Map />
      <SubmitContainer>
        <LocationInfo
          keyWord={'출발지'}
          place={'공주대학교'}
          address={'충남 천안시 서북구 천안대로 1223-24'}
        />
        <SubmitButton>여기에서 출발</SubmitButton>
      </SubmitContainer>
    </CreatePostChilePageLayout>
  );
};

export default SetOriginMapPage;
