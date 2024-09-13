import { useState } from 'react';
import { SearchPlace } from '@/types';
import { getSearchList } from '@/api/kakaoApi.ts';

const useSearchData = () => {
  const [searchListsData, setSearchListsData] = useState<SearchPlace[]>([]);
  const centerLocation = JSON.parse(localStorage.getItem('Location') || '');

  const searchFunc = async (query: string) => {
    const result = await getSearchList(
      query,
      centerLocation.lng,
      centerLocation.lat
    );

    setSearchListsData([...result.documents]);
  };

  return { searchListsData, searchFunc };
};

export default useSearchData;
