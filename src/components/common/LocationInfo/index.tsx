import {
  LocationInfoBody,
  LocationInfoContainer,
  LocationInfoHeader,
} from '@/components/common/LocationInfo/LocationInfo.style.ts';
import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg?react';

export const LocationInfo = ({
  keyWord,
  title,
  subTitle,
  inCreate,
}: {
  keyWord: string;
  title: string;
  subTitle: string;
  inCreate?: boolean;
}) => {
  return (
    <LocationInfoContainer $inCreate={inCreate}>
      <LocationInfoHeader>
        <div>
          <span>{keyWord}</span>
          {title}
        </div>
        {inCreate && <ArrowRightIcon />}
      </LocationInfoHeader>
      <LocationInfoBody>{subTitle}</LocationInfoBody>
    </LocationInfoContainer>
  );
};
