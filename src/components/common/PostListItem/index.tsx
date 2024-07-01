import {
  PostBodyContainer,
  PostHeaderContainer,
  PostListItemContainer,
} from '@/components/common/PostListItem/PostListItem.style.ts';
import PeopleCountTag from '@/components/common/PeopleCountTag';

import ClockIcon from '@/assets/icons/postList/clock-icon.svg?react';
import ArrowRightIcon from '@/assets/icons/arrow-right-icon.svg?react';
import LocationIcon from '@/assets/icons/postList/location-dot-icon.svg?react';
import CaretRightIcon from '@/assets/icons/postList/caret-right-icon.svg?react';

import {
  PostBodyProps,
  PostHeaderProps,
  PostListItemProps,
} from '@/types/props';

const PostListItem = ({
  title,
  currentPassengers,
  maxPassengers,
  departureTime,
  origin,
  destination,
  activePostList,
}: PostListItemProps) => {
  return (
    <PostListItemContainer>
      <PostHeader
        title={title}
        currentPassengers={currentPassengers}
        maxPassengers={maxPassengers}
        activePostList={activePostList}
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

const PostHeader = ({
  title,
  currentPassengers,
  maxPassengers,
  activePostList,
}: PostHeaderProps) => {
  return (
    <PostHeaderContainer>
      <div>
        <h2>{title}</h2>
        <PeopleCountTag
          currentPassengers={currentPassengers}
          maxPassengers={maxPassengers}
        />
      </div>
      {activePostList && <ArrowRightIcon />}
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
