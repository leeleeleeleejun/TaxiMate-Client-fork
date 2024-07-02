import { SearchListItemContainer } from '@/components/Search/Search.style.ts';
import LocationDotIcon from '@/assets/icons/postList/location-dot-icon.svg?react';

const SearchListItem = ({
  title,
  address,
}: {
  title: string;
  address: string;
}) => {
  return (
    <SearchListItemContainer>
      <div>
        <LocationDotIcon />
        <h3>{title}</h3>
      </div>
      <span>{address}</span>
    </SearchListItemContainer>
  );
};

export default SearchListItem;
