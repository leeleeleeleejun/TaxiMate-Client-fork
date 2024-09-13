export interface Post {
  id: string;
  title: string;
  departureTime: string;
  origin: string;
  maxParticipants: number;
  currentParticipants: number;
  destination: string;
  originLocation: { latitude: number; longitude: number };
}

export type PostDetailStatus =
  | 'NONE'
  | 'PARTICIPATING'
  | 'TERMINATED'
  | 'WARNED'
  | 'BANNED';

export interface PostDetail extends Post {
  explanation: string;
  originAddress: string;
  destinationAddress: string;
  originLocation: { latitude: number; longitude: number };
  destinationLocation: { latitude: number; longitude: number };
  status: PostDetailStatus;
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

export interface CreatePostRes {
  success: boolean;
  message: string;
  data: {
    partyId: string;
  };
}
