import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { searchPlace } from '@/types';
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
  const centerLocation = JSON.parse(localStorage.getItem('Location') || '');

  const searchFunc = async (query: string) => {
    const result = await getSearchList(
      query,
      `${centerLocation.lat},${centerLocation.lng}`
    );
    setSearchListsData(result.place);
  };

  return { searchListsData, searchFunc };
};

const SearchPage = () => {
  const navigate = useNavigate();
  const { searchListsData, searchFunc } = useSearchData();
  const [inputValue, setInputValue] = useState<string>('');
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  return (
    <>
      <Header paddingY={10} paddingX={10}>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
        </BackButton>
        <SearchInput
          ref={inputEl}
          placeholder='장소 또는 주소를 검색하세요'
          onChange={(e) => {
            setInputValue(e.target.value);

            if (e.target.value.length > 0) {
              searchFunc(e.target.value);
            }
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
              lat={item.y}
              lng={item.x}
            />
          ))}
      </SearchList>
    </>
  );
};

export default SearchPage;
