import { API_PATH } from '@/constants/path.ts';

const kakaoApiKey = import.meta.env.VITE_KAKAO_API;

export const getSearchList = async (query: string, x: string, y: string) => {
  const queryString = new URLSearchParams({ query, x, y });

  try {
    const response = await fetch(`${API_PATH.SEARCH.GET}?${queryString}`, {
      method: 'GET',
      headers: {
        Authorization: `KakaoAK ${kakaoApiKey}`,
      },
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
