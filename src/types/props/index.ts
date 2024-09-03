import { ReactNode } from 'react';
import {
  registerData,
  setActiveMarker,
  setRegisterDataFunc,
  setStep,
  step,
} from '@/types';
import { post } from '@/types/post.ts';

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
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface HomeMapProps {
  map: naver.maps.Map | null;
  setMap: React.Dispatch<React.SetStateAction<naver.maps.Map | null>>;
  setActiveButton: React.Dispatch<React.SetStateAction<boolean>>;
  activeMarker: string | null;
  setActiveMarker: setActiveMarker;
  data: post[];
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

export interface CreateMainPageProps {
  registerData: registerData;
  createPostSubmit: () => void;
  setRegisterDataFunc: setRegisterDataFunc;
  setStep: setStep;
}

export interface ContentWrapProps {
  value: string | { longitude: number; latitude: number };
  setRegisterDataFunc?: setRegisterDataFunc;
  setStep?: setStep;
}

export interface SearchPageProps {
  step?: step;
  setStep?: setStep;
  setRegisterDataFunc?: setRegisterDataFunc;
}

export interface SetPlaceMapPageProps {
  step: step;
  value: { latitude: number; longitude: number };
  comeBackMain: () => void;
  setRegisterDataFunc: setRegisterDataFunc;
  backHandle: () => void;
}

export interface SetDatePageProps {
  value: string;
  setRegisterDataFunc: setRegisterDataFunc;
  comeBackMain: () => void;
}

export interface SetPlaceProps {
  step: step;
  setStep: setStep;
  setRegisterDataFunc: setRegisterDataFunc;
  comeBackMain: () => void;
}

export interface ChatListItemProps {
  id: string;
  title: string;
  currentParticipants: number;
  maxParticipants: number;
  resentMessage: string;
  resentMessageTime: string;
  resentMessageCounter: string;
}
