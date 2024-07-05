import {
  MatchText,
  SearchListItemContainer,
} from '@/components/Search/Search.style.ts';
import LocationDotIcon from '@/assets/icons/postList/location-dot-icon.svg?react';
import { useNavigate } from 'react-router-dom';

const SearchListItem = ({
  inputValue,
  title,
  address,
  lat,
  lng,
}: {
  inputValue: string;
  title: string;
  address: string;
  lat: string;
  lng: string;
}) => {
  const navigate = useNavigate();

  return (
    <SearchListItemContainer
      onClick={() => {
        localStorage.setItem('Location', JSON.stringify({ lat, lng }));
        navigate('/');
      }}
    >
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
