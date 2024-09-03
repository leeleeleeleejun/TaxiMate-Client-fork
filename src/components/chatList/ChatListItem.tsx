import { Link } from 'react-router-dom';

import { ChatListItemProps } from '@/types/props';

import PeopleCountTag from '@/components/common/PeopleCountTag';
import {
  ChatListItemBody,
  ChatListItemContainer,
  ChatListItemHeader,
  MessageCounter,
} from '@/components/chatList/chatList.style.ts';

const ChatListItem = ({
  title,
  currentParticipants,
  maxParticipants,
  resentMessage,
  resentMessageTime,
  resentMessageCounter,
  id,
}: ChatListItemProps) => {
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
