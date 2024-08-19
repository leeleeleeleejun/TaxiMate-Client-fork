import LoadingPage from '@/pages/LoadingPage.tsx';
import { useLocation } from 'react-router-dom';
import { useGetTokensQuery } from '@/api/localApi.ts';
import { useEffect } from 'react';

const LoginLoadingPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code');

  const { data } = useGetTokensQuery({ code: code || '없음' });

  useEffect(() => {
    console.log(data);
  }, [data]);
  // if (isLoading) return <div>Loading...</div>;
  // if (!data) return <div>{data}</div>;

  return (
    <>
      {code}
      <LoadingPage />
    </>
  );
};

export default LoginLoadingPage;
