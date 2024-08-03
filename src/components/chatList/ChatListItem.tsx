import {
  ChatListItemBody,
  ChatListItemContainer,
  ChatListItemHeader,
  MessageCounter,
} from '@/components/chatList/chatList.style.ts';
import PeopleCountTag from '@/components/common/PeopleCountTag';

const ChatListItem = ({
  title,
  currentParticipants,
  maxParticipants,
  resentMessage,
  resentMessageTime,
  resentMessageCounter,
}: {
  title: string;
  currentParticipants: number;
  maxParticipants: number;
  resentMessage: string;
  resentMessageTime: string;
  resentMessageCounter: string;
}) => {
  return (
    <ChatListItemContainer>
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
    </ChatListItemContainer>
  );
};

export default ChatListItem;
