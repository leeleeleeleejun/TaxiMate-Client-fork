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
  backHandle,
}: setPlaceMapPageProps) => {
  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const [address, setAddress] = useState('');
  const [place, setPlace] = useState('');

  const path = step === 'originMap';
  const keyWord = path ? '출발지' : '도착지';
  const content = path ? '여기에서 출발' : '여기로 도착';

  const setAddressInfo = async (lng: number, lat: number) => {
    const result = await getAddressKakao(lng, lat);
    const address = result.road_address || result.address;
    setAddress(
      address.building_name
        ? address.address_name
        : address.region_3depth_name + +address.main_address_no
    );
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
    <CreatePostChilePageLayout backHandle={backHandle}>
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
