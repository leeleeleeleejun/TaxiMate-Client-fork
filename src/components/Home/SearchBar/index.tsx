import {
  SearchBarInput,
  SearchBarWrapper,
} from '@/components/Home/SearchBar/SearchBar.style.ts';
import SearchIcon from '@/assets/icons/map/search-icon.svg?react';

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <SearchIcon />
      <SearchBarInput placeholder='장소 또는 주소를 검색하세요' />
    </SearchBarWrapper>
  );
};

export default SearchBar;
