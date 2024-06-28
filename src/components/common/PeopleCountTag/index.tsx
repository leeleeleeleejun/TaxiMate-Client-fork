import PeopleCountTagIcon from '@/assets/icons/common/people-count-tag-icon.svg?react';
import { PeopleCountTagContainer } from '@/components/common/PeopleCountTag/PeopleCountTag.style.ts';

const PeopleCountTag = ({ current, max }: { current: number; max: number }) => {
  return (
    <PeopleCountTagContainer>
      <PeopleCountTagIcon />
      {current + ' / ' + max}
    </PeopleCountTagContainer>
  );
};

export default PeopleCountTag;
