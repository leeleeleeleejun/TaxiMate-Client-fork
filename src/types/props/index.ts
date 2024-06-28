import { ReactNode } from 'react';

export interface NavItemContainerProps {
  children: ReactNode;
  contentName?: string;
  path: string;
}

export interface PeopleCountTagProps {
  current: number;
  max: number;
}

export interface PostHeaderProps extends PeopleCountTagProps {
  title: string;
}

export interface PostBodyProps {
  departureTime: string;
  origin: string;
  destination: string;
}
