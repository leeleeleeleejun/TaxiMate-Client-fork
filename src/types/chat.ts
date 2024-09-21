export interface ChatMessage {
  partyId: string;
  partyTitle: string;
  message: string;
  createdAt?: string;
  sender: {
    id: string;
    nickname: string;
    profileImage: string;
  };
}

export interface ChatRoomList {
  id: string;
  title: string;
  maxParticipants: string; // 최대 참여자 수
  currentParticipants: string; // 현재 참여자 수
  isProgress: boolean;
  recentMessage: string;
  recentMessageTime: string;
  unreadCount: string;
}

interface Chat {
  id: string;
  partyId: string;
  message: string;
  type: 'MESSAGE' | 'SYSTEM';
  createdAt: string;
  sender: {
    id: string;
    nickname: string;
    profileImage: string;
  };
}

export interface ChatList {
  party: {
    id: string;
    title: string;
    departureTime: string;
    origin: string;
    destination: string;
    maxParticipants: string; // 최대 참여자 수
    currentParticipants: string; // 현재 참여자 수
  };
  chat: Chat[];
}
