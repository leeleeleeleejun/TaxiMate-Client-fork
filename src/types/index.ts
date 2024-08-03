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
  origin: { lat: number; lng: number };
  destination: { lat: number; lng: number };
  maxParticipants: string;
}

export type registerDataKeys =
  | 'title'
  | 'departureTime'
  | 'explanation'
  | 'origin'
  | 'destination'
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
  data: string | { lat: number; lng: number }
) => void;

export type setActiveMarker = React.Dispatch<
  React.SetStateAction<string | null>
>;
