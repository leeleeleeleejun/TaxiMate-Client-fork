import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import { searchPlace } from '@/types';
import { RootState } from '@/store';
import { getSearchList } from '@/api/searchAPI.ts';

import Header from '@/components/common/Layout/Header';
import SearchListItem from '@/components/Search/SearchListItem.tsx';
import {
  BackButton,
  SearchInput,
  SearchList,
} from '@/components/Search/Search.style.ts';
import ArrowLeftIcon from '@/assets/icons/arrow-left-icon.svg?react';

const useSearchData = () => {
  const [searchListsData, setSearchListsData] = useState<searchPlace[]>([]);
  const currentLocation = useSelector(
    (state: RootState) => state.mapSlice.centerLocation
  );
  const searchFunc = async (query: string) => {
    const result = await getSearchList(
      query,
      `${currentLocation.lat},${currentLocation.lng}`
    );
    setSearchListsData(result.place);
  };

  return { searchListsData, searchFunc };
};

const SearchPage = () => {
  const navigate: NavigateFunction = useNavigate();
  const { searchListsData, searchFunc } = useSearchData();
  const [inputValue, setInputValue] = useState<string>('');

  return (
    <div>
      <Header paddingY={10} paddingX={10}>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
        </BackButton>
        <SearchInput
          placeholder='장소 또는 주소를 검색하세요'
          onChange={(e) => {
            searchFunc(e.target.value);
            setInputValue(e.target.value);
          }}
          value={inputValue}
        />
      </Header>
      <SearchList>
        {inputValue &&
          searchListsData.map((item) => (
            <SearchListItem
              key={item.id}
              inputValue={inputValue}
              title={item.title}
              address={item.roadAddress || item.jibunAddress}
            />
          ))}
      </SearchList>
    </div>
  );
};

export default SearchPage;
