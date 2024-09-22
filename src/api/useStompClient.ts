import { useEffect, useRef } from 'react';
import { Client } from '@stomp/stompjs';
import { v4 as uuidv4 } from 'uuid';
import SockJS from 'sockjs-client';

import { accessToken } from '@/api/localApi.ts';
import { eventBus } from '@/utils/eventBus.ts';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const uuid = uuidv4().replace('-', '');

export const useStompClient = (): Client | null => {
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
            // console.log('Received message from STOMP : ', message);
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

  return clientRef.current;
};

export default useStompClient;

//
// const client = new Client({
//   webSocketFactory: () => {
//     return new SockJS(API_BASE_URL + '/ws');
//   },
//   heartbeatIncoming: 4000,
//   heartbeatOutgoing: 4000,
//   reconnectDelay: 5000,
//   // onConnect: () => {
//   //   client.subscribe(
//   //     '/queue/messages/' + uuid,
//   //     (message) => console.log(`Received: ${message.body}`),
//   //     { Authorization: `Bearer ${accessToken}` }
//   //   );
//   // },
//   onStompError: (frame) => {
//     console.error(frame);
//   },
// });
//
// export default client;
