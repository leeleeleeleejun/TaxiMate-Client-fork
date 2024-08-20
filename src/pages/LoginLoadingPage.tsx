import { useLocation, useNavigate } from 'react-router-dom';
import { useGetAccessTokenQuery } from '@/api/localApi.ts';

const LoginLoadingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code') || '';

  const { isLoading } = useGetAccessTokenQuery({ code: code });

  if (isLoading) {
    navigate('/');
  }

  return null;
};

export default LoginLoadingPage;
