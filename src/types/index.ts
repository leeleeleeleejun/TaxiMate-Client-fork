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
  originLocation: { longitude: number; latitude: number };
  destinationLocation: { longitude: number; latitude: number };
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
  | 'searchOrigin'
  | 'searchDestination'
  | 'originMap'
  | 'destinationMap';

export type setStep = React.Dispatch<React.SetStateAction<stepType>>;

export type setRegisterDataFunc = (
  name: registerDataKeys,
  data: string | { latitude: number; longitude: number }
) => void;

export type setActiveMarker = React.Dispatch<
  React.SetStateAction<string | null>
>;
