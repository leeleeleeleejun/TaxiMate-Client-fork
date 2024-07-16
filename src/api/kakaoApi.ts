const kakaoApiKey = import.meta.env.VITE_KAKAO_API;

const getAddressKakao = async (x: number, y: number) => {
  try {
    const response = await fetch(
      `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${x}&y=${y}`,
      {
        method: 'GET',
        headers: {
          Authorization: `KakaoAK ${kakaoApiKey}`,
        },
      }
    );
    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error);
    }

    return result;
  } catch (err) {
    console.error(err);
  }
};

export default getAddressKakao;
