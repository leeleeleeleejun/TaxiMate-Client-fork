import Header from '@/components/common/Layout/Header';
import ArrowLeftIcon from '@/assets/icons/arrow-left-icon.svg?react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import {
  BackButton,
  SearchInput,
  SearchList,
} from '@/components/Search/Search.style.ts';
import SearchListItem from '@/components/Search/SearchListItem.tsx';

const SearchPage = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div>
      <Header paddingY={10} paddingX={10}>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowLeftIcon />
        </BackButton>
        <SearchInput placeholder='장소 또는 주소를 검색하세요' />
      </Header>
      <SearchList>
        <SearchListItem
          title={'공주대학교 천안캠퍼스'}
          address={'충남 천안시 서북구 천안대로 2334-24'}
        />
        <SearchListItem
          title={'공주대학교 천안캠퍼스'}
          address={'충남 천안시 서북구 천안대로 2334-24'}
        />
        <SearchListItem
          title={'공주대학교 천안캠퍼스'}
          address={'충남 천안시 서북구 천안대로 2334-24'}
        />
        <SearchListItem
          title={'공주대학교 천안캠퍼스'}
          address={'충남 천안시 서북구 천안대로 2334-24'}
        />
        <SearchListItem
          title={'공주대학교 천안캠퍼스'}
          address={'충남 천안시 서북구 천안대로 2334-24'}
        />
        <SearchListItem
          title={'공주대학교 천안캠퍼스'}
          address={'충남 천안시 서북구 천안대로 2334-24'}
        />
        <SearchListItem
          title={'공주대학교 천안캠퍼스'}
          address={'충남 천안시 서북구 천안대로 2334-24'}
        />
        <SearchListItem
          title={'공주대학교 천안캠퍼스'}
          address={'충남 천안시 서북구 천안대로 2334-24'}
        />
      </SearchList>
    </div>
  );
};

export default SearchPage;
