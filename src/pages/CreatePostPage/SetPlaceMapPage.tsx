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

    const { road_address, address } = result;

    const place =
      road_address?.building_name ||
      `${address.region_3depth_name} ${address.main_address_no}` +
        (address.sub_address_no && `-${address.sub_address_no}`);

    const addressName = road_address?.address_name || address.address_name;

    setPlace(place);
    setAddress(addressName);
  };

  const submitFunc = () => {
    if (!map) return;
    // 현재 위치 참조
    const { x, y } = map.getCenter();

    const registerKey = path ? 'originLocation' : 'destinationLocation';
    setRegisterDataFunc(registerKey, { latitude: y, longitude: x });
    comeBackMain();
  };

  useEffect(() => {
    setAddressInfo(value.longitude, value.latitude);
  }, []);

  return (
    <CreatePostChilePageLayout backHandle={backHandle}>
      <Map
        map={map}
        setMap={setMap}
        setAddressInfo={setAddressInfo}
        path={path}
        defaultCenter={{ lat: value.latitude, lng: value.longitude }}
      />
      <SubmitContainer>
        <LocationInfo keyWord={keyWord} place={place} address={address} />
        <SubmitButton onClick={submitFunc}>{content}</SubmitButton>
      </SubmitContainer>
    </CreatePostChilePageLayout>
  );
};

export default SetPlaceMapPage;
