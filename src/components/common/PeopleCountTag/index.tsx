import PeopleCountTagIcon from '@/assets/icons/common/people-count-tag-icon.svg?react';
import { PeopleCountTagContainer } from '@/components/common/PeopleCountTag/PeopleCountTag.style.ts';
import { PeopleCountTagProps } from '@/types/props';

const PeopleCountTag = ({
  currentParticipants,
  maxParticipants,
  isClose,
}: PeopleCountTagProps) => {
  const isMax = currentParticipants === maxParticipants;

  return (
    <PeopleCountTagContainer $isClose={isClose} $isMax={isClose || isMax}>
      <PeopleCountTagIcon />
      {currentParticipants + ' / ' + maxParticipants}
    </PeopleCountTagContainer>
  );
};

export default PeopleCountTag;
