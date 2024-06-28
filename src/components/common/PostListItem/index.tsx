import {
  PostBodyContainer,
  PostHeaderContainer,
  PostListItemContainer,
} from '@/components/common/PostListItem/PostListItem.style.ts';
import PeopleCountTag from '@/components/common/PeopleCountTag';

import ClockIcon from '@/assets/icons/postList/clock-icon.svg?react';
import LocationIcon from '@/assets/icons/postList/location-dot-icon.svg?react';
import CaretRightIcon from '@/assets/icons/postList/caret-right-icon.svg?react';

const PostListItem = () => {
  return (
    <PostListItemContainer>
      <PostHeader title={'공주대에서 출발'} current={1} max={5} />
      <PostBody
        departureTime={'내일 오후 1:10 쯤'}
        origin={'우리집'}
        destination={'너네집'}
      />
    </PostListItemContainer>
  );
};

export default PostListItem;

const PostHeader = ({
  title,
  current,
  max,
}: {
  title: string;
  current: number;
  max: number;
}) => {
  return (
    <PostHeaderContainer>
      <h2>{title}</h2>
      <PeopleCountTag current={current} max={max} />
    </PostHeaderContainer>
  );
};

const PostBody = ({
  departureTime,
  origin,
  destination,
}: {
  departureTime: string;
  origin: string;
  destination: string;
}) => {
  return (
    <PostBodyContainer>
      <div>
        <ClockIcon />
        {departureTime}
      </div>
      <div>
        <LocationIcon />
        {origin}
        <CaretRightIcon />
        {destination}
      </div>
    </PostBodyContainer>
  );
};
