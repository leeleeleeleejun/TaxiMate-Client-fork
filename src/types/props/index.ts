import { ReactNode } from 'react';
import {
  registerDataType,
  setRegisterDataFunc,
  setStep,
  stepType,
} from '@/types';

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
}

export interface MarkerContainerProps {
  id: string;
  position: {
    latitude: number;
    longitude: number;
  };
  title: string;

  anchor: number[];

  showPlace: boolean;
}

export interface registerProps {
  registerData: registerDataType;
  setRegisterDataFunc: setRegisterDataFunc;
  setStep: setStep;
}

export interface contentWrapType {
  value: string | { lat: number; lng: number };
  setRegisterDataFunc?: setRegisterDataFunc;
  setStep?: setStep;
}

export interface searchPageProps {
  step?: stepType;
  setStep?: setStep;
  setRegisterDataFunc?: setRegisterDataFunc;
}

export interface setPlaceMapPageProps {
  step: stepType;
  value: { lat: number; lng: number };
  comeBackMain: () => void;
  setRegisterDataFunc: setRegisterDataFunc;
}
