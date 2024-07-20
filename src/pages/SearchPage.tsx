import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSearchData from '@/hooks/useSearchData.ts';
import { registerDataKeys } from '@/types';
import { searchPageProps } from '@/types/props';

import Header from '@/components/common/Layout/Header';
import SearchListItem from '@/components/Search/SearchListItem.tsx';
import {
  BackButton,
  SearchInput,
  SearchList,
} from '@/components/Search/Search.style.ts';
import ArrowLeftIcon from '@/assets/icons/arrow-left-icon.svg?react';

const SearchPage = ({
  step,
  setStep,
  setRegisterDataFunc,
}: searchPageProps) => {
  const navigate = useNavigate();
  const { searchListsData, searchFunc } = useSearchData();
  const [inputValue, setInputValue] = useState<string>('');
  const inputEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputEl.current?.focus();
  }, []);

  const handleClick = (lat: number, lng: number) => {
    if (step && setStep && setRegisterDataFunc) {
      const target: registerDataKeys =
        step === 'searchOrigin' ? 'origin' : 'destination';
      const nextStep = step === 'searchOrigin' ? 'originMap' : 'destinationMap';

      setRegisterDataFunc(target, {
        lat,
        lng,
      });
      setStep(nextStep);
    } else {
      localStorage.setItem('Location', JSON.stringify({ lat, lng }));
      navigate('/');
    }
  };

  const handleBackButtonClick = () => {
    if (step && setStep) {
      step === 'searchOrigin' ? setStep('origin') : setStep('destination');
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      <Header paddingY={10} paddingX={10}>
        <BackButton onClick={handleBackButtonClick}>
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
              handleClick={() => {
                handleClick(Number(item.y), Number(item.x));
              }}
            />
          ))}
      </SearchList>
    </>
  );
};

export default SearchPage;
