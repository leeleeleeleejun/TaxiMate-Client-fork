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
