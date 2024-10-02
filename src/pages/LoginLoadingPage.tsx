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

  const { isLoading, isSuccess } = useGetAccessTokenQuery({ code: code });

  useEffect(() => {
    if (!isLoading) {
      if (isSuccess) {
        dispatch(setIsLogin(true));
      }
      // 모든 작업이 완료된 후 네비게이션 수행
      navigate('/');
    }
  }, [isSuccess, isLoading, dispatch, navigate]);

  return null;
};

export default LoginLoadingPage;
