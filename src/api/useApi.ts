import { API_BASE_URL } from '@/constants/path.ts';

export const LoginApi = async () => {
  try {
    const a = await window.Kakao.Auth.authorize({
      redirectUri: API_BASE_URL,
    });

    console.log(a);
  } catch (error) {
    console.log(error);
  }
};
