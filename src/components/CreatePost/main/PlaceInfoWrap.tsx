import { useEffect, useState } from 'react';
import getAddressKakao from '@/api/kakaoApi.ts';
import { contentWrapType } from '@/types/props';

import LocationInfo from '@/components/common/LocationInfo';
import ContentWrap from '@/components/CreatePost/ContentWrap.tsx';
import LocationPinIcon from '@/assets/icons/createPost/location-pin-icon.svg?react';

interface PlaceInfoWrapProps extends contentWrapType {
  value2: { lat: number; lng: number };
}

const PlaceInfoWrap = ({ value, value2, setStep }: PlaceInfoWrapProps) => {
  const [originAddress, setOriginAddress] = useState({
    address_name: '',
    building_name: '',
  });
  const [destinationAddress, setDestinationAddress] = useState({
    address_name: '',
    building_name: '',
  });

  const setLocationInfo = async (
    lng: number,
    lat: number,
    target: React.Dispatch<
      React.SetStateAction<{ address_name: string; building_name: string }>
    >
  ) => {
    const result = await getAddressKakao(lng, lat);
    const address = result.road_address || result.address;
    target({
      address_name: address.address_name,
      building_name: address.building_name || '',
    });
  };

  useEffect(() => {
    if (typeof value !== 'string') {
      setLocationInfo(value.lng, value.lat, setOriginAddress);
      setLocationInfo(value2.lng, value2.lat, setDestinationAddress);
    }
  }, []);

  if (!setStep) return null;

  return (
    <ContentWrap theme={'출도착지'} SvgIcon={LocationPinIcon}>
      <button
        onClick={() => {
          setStep('origin');
        }}
      >
        <LocationInfo
          keyWord={'출발지'}
          place={originAddress.building_name}
          address={originAddress.address_name}
          inCreate
        />
      </button>
      <button
        onClick={() => {
          setStep('destination');
        }}
      >
        <LocationInfo
          keyWord={'도착지'}
          place={destinationAddress.building_name}
          address={destinationAddress.address_name}
          inCreate
        />
      </button>
    </ContentWrap>
  );
};

export default PlaceInfoWrap;
