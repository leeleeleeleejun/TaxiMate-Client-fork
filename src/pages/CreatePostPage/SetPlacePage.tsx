import { setPlaceProps } from '@/types/props';
import getCurrentLocation from '@/utils/getCurrentlocation.ts';

import CreatePostChilePageLayout from '@/components/common/Layout/CreatePostChildPageLayout';
import SearchBar from '@/components/CreatePost/setPlace/SearchBar.tsx';
import { MyLocationButton } from '@/components/CreatePost/setPlace/setPlace.style.ts';
import ActiveMoveLocationIcon from '@/assets/icons/map/active-move-location-icon.svg?react';

const SetPlacePage = ({
  step,
  setStep,
  setRegisterDataFunc,
  comeBackMain,
}: setPlaceProps) => {
  const path = step === 'origin';

  const subTitle = (path ? '어디에서 출발' : '어디로 도착') + '하나요?';

  const setStepFunc = () => {
    path ? setStep('searchOrigin') : setStep('searchDestination');
  };

  const MyLocationButtonClickHandle = async () => {
    const { lat, lng } = await getCurrentLocation();
    const registerKey = path ? 'originLocation' : 'destinationLocation';
    setRegisterDataFunc(registerKey, { latitude: lat, longitude: lng });
    path ? setStep('originMap') : setStep('destinationMap');
  };

  return (
    <CreatePostChilePageLayout subTitle={subTitle} backHandle={comeBackMain}>
      <SearchBar setStepFunc={setStepFunc} />
      <MyLocationButton onClick={MyLocationButtonClickHandle}>
        <ActiveMoveLocationIcon />내 위치
      </MyLocationButton>
    </CreatePostChilePageLayout>
  );
};

export default SetPlacePage;
