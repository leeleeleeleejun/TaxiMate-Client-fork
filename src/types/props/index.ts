import { ReactNode } from 'react';
import {
  registerDataType,
  setActiveMarker,
  setRegisterDataFunc,
  setStep,
  stepType,
} from '@/types';
import { Post } from '@/types/post.ts';

export interface NavItemContainerProps {
  children: ReactNode;
  contentName?: string;
  path: string;
}

export interface PeopleCountTagProps {
  currentParticipants: number;
  maxParticipants: number;
  isClose?: boolean;
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
    PeopleCountTagProps {
  id: string;
}

export interface MoveCurrentLocationProps {
  map: naver.maps.Map | null;
  activeButton: boolean;
  setActiveButton: React.Dispatch<React.SetStateAction<boolean>>;
  activeMarker: string | null;
  postListHeight: number;
}

export interface HomeMapProps {
  map: naver.maps.Map | null;
  setMap: React.Dispatch<React.SetStateAction<naver.maps.Map | null>>;
  setActiveButton: React.Dispatch<React.SetStateAction<boolean>>;
  activeMarker: string | null;
  setActiveMarker: setActiveMarker;
  data: Post[];
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
  activeMarker: string | null;
  setActiveMarker?: setActiveMarker;
}

export interface registerProps {
  registerData: registerDataType;
  createPostSubmit: () => void;
  setRegisterDataFunc: setRegisterDataFunc;
  setStep: setStep;
}

export interface contentWrapType {
  value: string | { longitude: number; latitude: number };
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
  value: { latitude: number; longitude: number };
  comeBackMain: () => void;
  setRegisterDataFunc: setRegisterDataFunc;
  backHandle: () => void;
}

export interface setDatePageProps {
  value: string;
  setRegisterDataFunc: setRegisterDataFunc;
  comeBackMain: () => void;
}

export interface setPlaceProps {
  step: stepType;
  setStep: setStep;
  setRegisterDataFunc: setRegisterDataFunc;
  comeBackMain: () => void;
}
