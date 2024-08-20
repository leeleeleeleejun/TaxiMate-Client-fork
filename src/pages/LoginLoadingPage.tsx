import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetAccessTokenQuery } from '@/api/localApi.ts';
import { setIsLogin } from '@/components/myProfile/userSlice.ts';

const LoginLoadingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code') || '';

  const { isLoading } = useGetAccessTokenQuery({ code: code });

  if (isLoading) {
    dispatch(setIsLogin(true));
    navigate('/');
  }

  return null;
};

export default LoginLoadingPage;
