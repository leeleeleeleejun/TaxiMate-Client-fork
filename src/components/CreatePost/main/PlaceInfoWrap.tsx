import ContentWrap from '@/components/CreatePost/ContentWrap.tsx';
import LocationInfo from '@/components/common/LocationInfo';
import LocationPinIcon from '@/assets/icons/createPost/location-pin-icon.svg?react';
import { contentWrapType } from '@/types/props';

const PlaceInfoWrap = ({ value, setStep }: contentWrapType) => {
  console.log(value);

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
          place={'공주대학교'}
          address={'충남 천안시 서북구 천안대로 1223-24'}
          inCreate={true}
        />
      </button>
      <button
        onClick={() => {
          setStep('destination');
        }}
      >
        <LocationInfo
          keyWord={'도착지'}
          place={'공주대학교'}
          address={'충남 천안시 서북구 천안대로 1223-24'}
          inCreate={true}
        />
      </button>
    </ContentWrap>
  );
};

export default PlaceInfoWrap;
