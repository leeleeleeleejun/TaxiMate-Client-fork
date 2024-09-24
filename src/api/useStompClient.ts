import { useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import { v4 as uuidv4 } from 'uuid';
import SockJS from 'sockjs-client';

import { accessToken } from '@/api/localApi.ts';
import { eventBus } from '@/utils/eventBus.ts';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const uuid = uuidv4().replace('-', '');

export const useStompClient = (): {
  client: Client | null;
  sendMessage: (partyId: string, message: string) => void;
} => {
  const clientRef = useRef<Client | null>(null);

  useEffect(() => {
    const client = new Client({
      webSocketFactory: () => new SockJS(API_BASE_URL + '/ws'),
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      reconnectDelay: 5000,
      onConnect: () => {
        console.log('Connected to STOMP');
        client.subscribe(
          '/queue/messages/' + uuid,
          (message) => {
            const receivedMessage = JSON.parse(message.body);
            eventBus.publish('newMessage', receivedMessage);
          },
          { Authorization: `Bearer ${accessToken}` }
        );
      },
      onStompError: (frame) => {
        console.error(frame);
      },
      onDisconnect: () => {
        console.log('Disconnected');
      },
    });

    client.activate();

    clientRef.current = client;

    return () => {
      client.deactivate();
    };
  }, []);

  const sendMessage = (partyId: string, message: string) => {
    if (clientRef.current) {
      clientRef.current.publish({
        destination: '/app/messages',
        headers: { Authorization: `Bearer ${accessToken}` },
        body: JSON.stringify({
          partyId,
          message,
        }),
      });
    }
  };

  return { client: clientRef.current, sendMessage };
};

export default useStompClient;
