import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useGetAccessTokenQuery } from '@/api/localApi.ts';
import { setIsLogin } from '@/components/myProfile/userSlice.ts';
import { useEffect } from 'react';

const LoginLoadingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code') || '';

  const { isLoading } = useGetAccessTokenQuery({ code: code });

  useEffect(() => {
    if (isLoading) {
      dispatch(setIsLogin(true));
      navigate('/');
    }
  }, [isLoading, dispatch, navigate]);

  return null;
};

export default LoginLoadingPage;
