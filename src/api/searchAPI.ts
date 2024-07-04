//import callApi from '@/utils/callApi.ts';
import { API_PATH } from '@/constants/path.ts';

export const getSearchList = async (query: string, coords: string) => {
  const queryString = new URLSearchParams({ query: query, coords: coords });

  try {
    const response = await fetch(`${API_PATH.SEARCH.GET}?${queryString}`, {
      method: 'GET',
    });
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error);
    }

    return result;
  } catch (err) {
    console.error(err);
  }
};
