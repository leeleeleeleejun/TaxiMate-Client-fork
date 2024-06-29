import {
  PostBodyContainer,
  PostHeaderContainer,
  PostListItemContainer,
} from '@/components/common/PostListItem/PostListItem.style.ts';
import PeopleCountTag from '@/components/common/PeopleCountTag';

import ClockIcon from '@/assets/icons/postList/clock-icon.svg?react';
import LocationIcon from '@/assets/icons/postList/location-dot-icon.svg?react';
import CaretRightIcon from '@/assets/icons/postList/caret-right-icon.svg?react';

import { PostBodyProps, PostHeaderProps } from '@/types/props';

const PostListItem = ({
  title,
  currentPassengers,
  maxPassengers,
  departureTime,
  origin,
  destination,
}: {
  title: string;
  currentPassengers: number;
  maxPassengers: number;
  departureTime: string;
  origin: string;
  destination: string;
}) => {
  return (
    <PostListItemContainer>
      <PostHeader
        title={title}
        current={currentPassengers}
        max={maxPassengers}
      />
      <PostBody
        departureTime={departureTime}
        origin={origin}
        destination={destination}
      />
    </PostListItemContainer>
  );
};

export default PostListItem;

const PostHeader = ({ title, current, max }: PostHeaderProps) => {
  return (
    <PostHeaderContainer>
      <h2>{title}</h2>
      <PeopleCountTag current={current} max={max} />
    </PostHeaderContainer>
  );
};

const PostBody = ({ departureTime, origin, destination }: PostBodyProps) => {
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
