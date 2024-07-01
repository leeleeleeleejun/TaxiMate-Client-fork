import { ReactNode } from 'react';

export interface NavItemContainerProps {
  children: ReactNode;
  contentName?: string;
  path: string;
}

export interface PeopleCountTagProps {
  currentPassengers: number;
  maxPassengers: number;
}

export interface PostHeaderProps extends PeopleCountTagProps {
  title: string;
  activePostList?: boolean;
}

export interface PostBodyProps {
  departureTime: string;
  origin: string;
  destination: string;
}

export interface PostListItemProps
  extends PostHeaderProps,
    PostBodyProps,
    PeopleCountTagProps {}

export interface MoveCurrentLocationProps {
  map: naver.maps.Map | null;
  activeButton: boolean;
  setLocation: React.Dispatch<
    React.SetStateAction<{ lat: number; lng: number }>
  >;
}

export interface MarkerContainerProps {
  id: string;
  position: {
    latitude: number;
    longitude: number;
  };
  title: string;
}
