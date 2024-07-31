export const LoginApi = async () => {
  try {
    const a = await window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:5173',
    });

    console.log(a);
  } catch (error) {
    console.log(error);
  }
};
