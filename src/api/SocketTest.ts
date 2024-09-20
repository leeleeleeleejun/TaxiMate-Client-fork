import { Client } from '@stomp/stompjs';
import { v4 as uuidv4 } from 'uuid';
import SockJS from 'sockjs-client';
import { accessToken } from '@/api/localApi.ts';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const uuid = uuidv4().replace('-', '');

const client = new Client({
  webSocketFactory: () => {
    return new SockJS(API_BASE_URL + '/ws');
  },
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
  reconnectDelay: 5000,
  onConnect: () => {
    client.subscribe(
      '/queue/messages/' + uuid,
      (message) => console.log(`Received: ${message.body}`),
      { Authorization: `Bearer ${accessToken}` }
    );
  },
  onStompError: (frame) => {
    console.error(frame);
  },
});

export default client;

export const sendMessageWS = (partyId: string, message: string) => {
  client.publish({
    destination: '/app/messages',
    headers: { Authorization: `Bearer ${accessToken}` },
    body: JSON.stringify({
      partyId,
      message,
    }),
  });
};
