import PeopleCountTagIcon from '@/assets/icons/common/people-count-tag-icon.svg?react';
import { PeopleCountTagContainer } from '@/components/common/PeopleCountTag/PeopleCountTag.style.ts';
import { PeopleCountTagProps } from '@/types/props';

const PeopleCountTag = ({
  currentPassengers,
  maxPassengers,
}: PeopleCountTagProps) => {
  return (
    <PeopleCountTagContainer>
      <PeopleCountTagIcon />
      {currentPassengers + ' / ' + maxPassengers}
    </PeopleCountTagContainer>
  );
};

export default PeopleCountTag;
