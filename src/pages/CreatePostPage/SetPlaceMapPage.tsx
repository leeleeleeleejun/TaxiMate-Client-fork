import { useEffect, useState } from 'react';
import getAddressKakao from '@/api/kakaoApi.ts';
import { setPlaceMapPageProps } from '@/types/props';

import Map from '@/components/CreatePost/setPlace/Map.tsx';
import LocationInfo from '@/components/common/LocationInfo';
import { SubmitButton } from '@/components/CreatePost/createPost.style.ts';
import { SubmitContainer } from '@/components/CreatePost/setPlace/setPlace.style.ts';
import CreatePostChilePageLayout from '@/components/common/Layout/CreatePostChildPageLayout';

const SetPlaceMapPage = ({
  step,
  value,
  comeBackMain,
  setRegisterDataFunc,
}: setPlaceMapPageProps) => {
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const [address, setAddress] = useState('');
  const [place, setPlace] = useState('');

  const path = step === 'originMap';
  const keyWord = path ? '출발지' : '도착지';
  const content = path ? '여기에서 출발' : '여기로 도착';

  const setAddressInfo = async (lng: number, lat: number) => {
    const result = await getAddressKakao(lng, lat);
    const addressObj = result.documents[0];
    const address = addressObj.road_address || addressObj.address;
    setAddress(address.address_name);
    setPlace(address.building_name || '');
  };

  const submitFunc = () => {
    if (!map) return;
    // 현재 위치 참조
    const { x, y } = map.getCenter();

    const registerKey = path ? 'origin' : 'destination';
    setRegisterDataFunc(registerKey, { lat: y, lng: x });
    comeBackMain();
  };

  useEffect(() => {
    setAddressInfo(value.lng, value.lat);
  }, []);

  return (
    <CreatePostChilePageLayout>
      <Map
        map={map}
        setMap={setMap}
        setAddressInfo={setAddressInfo}
        path={path}
        defaultCenter={value}
      />
      <SubmitContainer>
        <LocationInfo keyWord={keyWord} place={place} address={address} />
        <SubmitButton onClick={submitFunc}>{content}</SubmitButton>
      </SubmitContainer>
    </CreatePostChilePageLayout>
  );
};

export default SetPlaceMapPage;
