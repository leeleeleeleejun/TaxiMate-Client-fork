import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { RootState } from '@/store';
import getAddressKakao from '@/api/kakaoApi.ts';
import useLocationPathPlace from '@/hooks/useLocationPathPlace.ts';
import {
  setDestinationLocation,
  setOriginLocation,
} from '@/components/CreatePost/CreatePostSlice.ts';

import Map from '@/components/CreatePost/setPlace/Map.tsx';
import LocationInfo from '@/components/common/LocationInfo';
import { SubmitButton } from '@/components/CreatePost/createPost.style.ts';
import { SubmitContainer } from '@/components/CreatePost/setPlace/setPlace.style.ts';
import CreatePostChilePageLayout from '@/components/common/Layout/CreatePostChildPageLayout';

const SetPlaceMapPage = () => {
  const dispatch = useDispatch();

  const [map, setMap] = useState<naver.maps.Map | null>(null);
  const [address, setAddress] = useState('');
  const [place, setPlace] = useState('');

  const navigate = useNavigate();

  const path = useLocationPathPlace();

  const originLocationValue = useSelector(
    (state: RootState) => state.createPostSlice.originLocation
  );

  const destinationLocation = useSelector(
    (state: RootState) => state.createPostSlice.destinationLocation
  );

  const defaultCenter = path ? originLocationValue : destinationLocation;

  const keyWord = path ? '출발지' : '도착지';

  const content = path ? '여기에서 출발' : '여기로 도착';

  const setLocationInfo = async (lng: number, lat: number) => {
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

    path
      ? dispatch(setOriginLocation({ lat: y, lng: x }))
      : dispatch(setDestinationLocation({ lat: y, lng: x }));
    navigate('/create-post');
  };

  useEffect(() => {
    setLocationInfo(defaultCenter.lng, defaultCenter.lat);
  }, []);

  return (
    <CreatePostChilePageLayout>
      <Map
        map={map}
        setMap={setMap}
        setLocationInfo={setLocationInfo}
        path={path}
        defaultCenter={defaultCenter}
      />
      <SubmitContainer>
        <LocationInfo keyWord={keyWord} place={place} address={address} />
        <SubmitButton onClick={submitFunc}>{content}</SubmitButton>
      </SubmitContainer>
    </CreatePostChilePageLayout>
  );
};

export default SetPlaceMapPage;
