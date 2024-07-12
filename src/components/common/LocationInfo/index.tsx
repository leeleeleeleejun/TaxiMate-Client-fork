import {
  LocationInfoBody,
  LocationInfoContainer,
  LocationInfoHeader,
} from '@/components/common/LocationInfo/LocationInfo.style.ts';
import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg?react';

const LocationInfo = ({
  keyWord,
  place,
  address,
  inCreate,
}: {
  keyWord: string;
  place: string;
  address: string;
  inCreate?: boolean;
}) => {
  return (
    <LocationInfoContainer $inCreate={inCreate}>
      <LocationInfoHeader>
        <div>
          <span>{keyWord}</span>
          {place}
        </div>
        {inCreate && <ArrowRightIcon />}
      </LocationInfoHeader>
      <LocationInfoBody>{address}</LocationInfoBody>
    </LocationInfoContainer>
  );
};

export default LocationInfo;
