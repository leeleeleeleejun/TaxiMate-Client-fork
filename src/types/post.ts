export interface post {
  id: string;
  title: string;
  departureTime: string;
  origin: string;
  maxParticipants: number;
  currentParticipants: number;
  destination: string;
  originLocation: { latitude: number; longitude: number };
}

export interface postDetail extends post {
  explanation: string;
  originAddress: string;
  destinationAddress: string;
  originLocation: { latitude: number; longitude: number };
  destinationLocation: { latitude: number; longitude: number };
  status: string;
  createdAt: string;
  views: string;
  host: {
    id: string;
    nickname: string;
    profileImage: string;
    isMe: boolean;
  };
  taxi: {
    route: { latitude: number; longitude: number }[];
    fare: string;
    duration: string;
  };
}

export interface createPostRes {
  success: boolean;
  message: string;
  data: {
    partyId: string;
  };
}
