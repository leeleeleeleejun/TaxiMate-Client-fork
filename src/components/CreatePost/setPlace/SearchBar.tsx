import { SearchBarContainer } from '@/components/Home/SearchBar/SearchBar.style.ts';
import { SearchBarWrapper } from '@/components/CreatePost/setPlace/setPlace.style.ts';
import SearchIcon from '@/assets/icons/map/search-icon.svg?react';

const SearchBar = ({ setStepFunc }: { setStepFunc: () => void }) => {
  return (
    <SearchBarWrapper onClick={setStepFunc}>
      <SearchIcon />
      <SearchBarContainer>장소 또는 주소를 검색하세요</SearchBarContainer>
    </SearchBarWrapper>
  );
};

export default SearchBar;
