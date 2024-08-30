export interface searchPlace {
  id: string;
  place_name: string;
  x: string;
  y: string;
  road_address_name?: string;
  address_name: string;
}

export type selectionKey = 'meridiem' | 'hour' | 'minute';

export interface registerData {
  title: string;
  departureTime: string;
  explanation: string;
  originLocation: { longitude: number; latitude: number };
  destinationLocation: { longitude: number; latitude: number };
  maxParticipants: string;
}

export type registerDataKey =
  | 'title'
  | 'departureTime'
  | 'explanation'
  | 'originLocation'
  | 'destinationLocation'
  | 'maxParticipants';

export type step =
  | 'main'
  | 'time'
  | 'origin'
  | 'destination'
  | 'searchOrigin'
  | 'searchDestination'
  | 'originMap'
  | 'destinationMap';

export type setStep = React.Dispatch<React.SetStateAction<step>>;

export type setRegisterDataFunc = (
  name: registerDataKey,
  data: string | { latitude: number; longitude: number }
) => void;

export type setActiveMarker = React.Dispatch<
  React.SetStateAction<string | null>
>;
