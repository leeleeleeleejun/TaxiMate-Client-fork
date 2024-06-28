import PeopleCountTagIcon from '@/assets/icons/common/people-count-tag-icon.svg?react';
import { PeopleCountTagContainer } from '@/components/common/PeopleCountTag/PeopleCountTag.style.ts';
import { PeopleCountTagProps } from '@/types/props';

const PeopleCountTag = ({ current, max }: PeopleCountTagProps) => {
  return (
    <PeopleCountTagContainer>
      <PeopleCountTagIcon />
      {current + ' / ' + max}
    </PeopleCountTagContainer>
  );
};

export default PeopleCountTag;
