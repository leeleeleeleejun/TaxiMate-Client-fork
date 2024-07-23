import {
  ChatListItemBody,
  ChatListItemContainer,
  ChatListItemHeader,
  MessageCounter,
} from '@/components/chatList/chatList.style.ts';
import PeopleCountTag from '@/components/common/PeopleCountTag';

const ChatListItem = ({
  title,
  currentPassengers,
  maxPassengers,
  resentMessage,
  resentMessageTime,
  resentMessageCounter,
}: {
  title: string;
  currentPassengers: number;
  maxPassengers: number;
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
            currentPassengers={currentPassengers}
            maxPassengers={maxPassengers}
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
