import PeopleCountTagIcon from '@/assets/icons/common/people-count-tag-icon.svg?react';
import { PeopleCountTagContainer } from '@/components/common/PeopleCountTag/PeopleCountTag.style.ts';
import { PeopleCountTagProps } from '@/types/props';

const PeopleCountTag = ({
  currentParticipants,
  maxParticipants,
}: PeopleCountTagProps) => {
  const isMax = currentParticipants === maxParticipants;

  return (
    <PeopleCountTagContainer $isMax={isMax}>
      <PeopleCountTagIcon />
      {currentParticipants + ' / ' + maxParticipants}
    </PeopleCountTagContainer>
  );
};

export default PeopleCountTag;
