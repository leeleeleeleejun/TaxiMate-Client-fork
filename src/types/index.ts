export interface searchPlace {
  id: string;
  title: string;
  x: string;
  y: string;
  roadAddress?: string;
  jibunAddress: string;
}

export type SelectionKey = 'meridiem' | 'hour' | 'minute';

export interface registerDataType {
  title: string;
  departureTime: string;
  explanation: string;
  originLocation: { lat: number; lng: number };
  destinationLocation: { lat: number; lng: number };
  maxParticipants: string;
}

export type registerDataKeys =
  | 'title'
  | 'departureTime'
  | 'explanation'
  | 'originLocation'
  | 'destinationLocation'
  | 'maxParticipants';

export type stepType =
  | 'main'
  | 'time'
  | 'origin'
  | 'destination'
  | 'originMap'
  | 'destinationMap';
