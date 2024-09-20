// import { io } from 'socket.io-client';
import { Client } from '@stomp/stompjs';
import { v4 as uuidv4 } from 'uuid';

const client = new Client({
  brokerURL: 'ws://52.78.19.118:8080/ws',
  onConnect: () => {
    client.subscribe(
      '/queue/messages/' + uuidv4().replace('-', ''),
      (message) => console.log(`Received: ${message.body}`)
    );
    client.publish({ destination: '/topic/test01', body: 'First Message' });
  },
});

// const socket = io('http://localhost:3000');

//export default socket;

export default client;
