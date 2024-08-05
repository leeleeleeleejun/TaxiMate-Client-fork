import {
  ChatListItemBody,
  ChatListItemContainer,
  ChatListItemHeader,
  MessageCounter,
} from '@/components/chatList/chatList.style.ts';
import PeopleCountTag from '@/components/common/PeopleCountTag';
import { Link } from 'react-router-dom';

const ChatListItem = ({
  title,
  currentParticipants,
  maxParticipants,
  resentMessage,
  resentMessageTime,
  resentMessageCounter,
  id,
}: {
  title: string;
  currentParticipants: number;
  maxParticipants: number;
  resentMessage: string;
  resentMessageTime: string;
  resentMessageCounter: string;
  id: string;
}) => {
  return (
    <ChatListItemContainer>
      <Link to={'/chat-list/' + id}>
        <ChatListItemHeader>
          <div>
            <h3>{title}</h3>
            <PeopleCountTag
              currentParticipants={currentParticipants}
              maxParticipants={maxParticipants}
            />
          </div>
          <span>{resentMessageTime}</span>
        </ChatListItemHeader>
        <ChatListItemBody>
          <p>{resentMessage}</p>
          <MessageCounter>{resentMessageCounter}</MessageCounter>
        </ChatListItemBody>
      </Link>
    </ChatListItemContainer>
  );
};

export default ChatListItem;
