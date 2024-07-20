import { stepType, setStep } from '@/types';

import CreatePostChilePageLayout from '@/components/common/Layout/CreatePostChildPageLayout';
import SearchBar from '@/components/CreatePost/setPlace/SearchBar.tsx';
import ActiveMoveLocationIcon from '@/assets/icons/map/active-move-location-icon.svg?react';
import { MyLocationButton } from '@/components/CreatePost/setPlace/setPlace.style.ts';

const SetPlacePage = ({
  step,
  setStep,
  comeBackMain,
}: {
  step: stepType;
  setStep: setStep;
  comeBackMain: () => void;
}) => {
  const path = step === 'origin';

  const subTitle = (path ? '어디에서 출발' : '어디로 도착') + '하나요?';

  const setStepFunc = () => {
    path ? setStep('searchOrigin') : setStep('searchDestination');
  };

  return (
    <CreatePostChilePageLayout subTitle={subTitle} backHandle={comeBackMain}>
      <SearchBar setStepFunc={setStepFunc} />
      <MyLocationButton>
        <ActiveMoveLocationIcon />내 위치
      </MyLocationButton>
    </CreatePostChilePageLayout>
  );
};

export default SetPlacePage;
