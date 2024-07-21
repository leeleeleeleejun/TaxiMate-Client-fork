import {
  MatchText,
  SearchListItemContainer,
} from '@/components/Search/Search.style.ts';
import LocationDotIcon from '@/assets/icons/postList/location-dot-icon.svg?react';

const SearchListItem = ({
  inputValue,
  title,
  address,
  clickHandler,
}: {
  inputValue: string;
  title: string;
  address: string;
  clickHandler: () => void;
}) => {
  return (
    <SearchListItemContainer onClick={clickHandler}>
      <div>
        <LocationDotIcon />
        <SetTitle title={title} inputValue={inputValue} />
      </div>
      <span>{address}</span>
    </SearchListItemContainer>
  );
};

export default SearchListItem;

const SetTitle = ({
  title,
  inputValue,
}: {
  title: string;
  inputValue: string;
}) => {
  const highlightWord = () => {
    const regex = new RegExp(`(${inputValue})`, 'gi');
    const parts = title.split(regex);

    return parts.map((part, index) =>
      regex.test(part) ? <MatchText key={index}>{part}</MatchText> : part
    );
  };

  return <h3>{highlightWord()}</h3>;
};