import { Client } from '@stomp/stompjs';
import { v4 as uuidv4 } from 'uuid';
import SockJS from 'sockjs-client';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const client = new Client({
  webSocketFactory: () => {
    return new SockJS(API_BASE_URL + '/ws');
  },
  heartbeatIncoming: 4000,
  heartbeatOutgoing: 4000,
  reconnectDelay: 5000,
  onConnect: () => {
    client.subscribe(
      '/queue/messages/' + uuidv4().replace('-', ''),
      (message) => console.log(`Received: ${message.body}`)
    );
    client.publish({ destination: '/topic/test01', body: 'First Message' });
  },
  onStompError: (frame) => {
    console.error(frame);
  },
});

// const socket = io('http://localhost:3000');

//export default socket;

export default client;
