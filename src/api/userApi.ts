//import { LocalAPI } from '@/constants/path.ts';

import { CLIENT_PATH, LocalAPI } from '@/constants/path.ts';

export const LoginApi = async () => {
  try {
    console.log('a');
    const a = await window.Kakao.Auth.authorize({
      redirectUri: LocalAPI + CLIENT_PATH.LOGIN_LOADING,
    });

    console.log(a);
  } catch (error) {
    console.log(error);
  }
};
