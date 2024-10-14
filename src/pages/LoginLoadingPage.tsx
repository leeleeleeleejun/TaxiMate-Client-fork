import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import reactNativePostMessage from '@/utils/reactNativePostMessage.ts';
import { useGetAccessTokenQuery } from '@/api/localApi.ts';
import { setIsLogin } from '@/components/myProfile/userSlice.ts';
import useErrorHandle from '@/hooks/useErrorHandle.ts';

const LoginLoadingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const code = new URLSearchParams(location.search).get('code') || '';

  const {
    isLoading: isTokenLoading,
    isSuccess: isTokenSuccess,
    isError: isTokenError,
    error: tokenError,
  } = useGetAccessTokenQuery({ code });

  useErrorHandle(tokenError);

  // 토큰이 성공적으로 받아졌을 때
  useEffect(() => {
    if (!isTokenLoading && isTokenSuccess) {
      dispatch(setIsLogin(true));
      reactNativePostMessage('push_notification');
      alert('로그인 상태 변경 및 push_notification 전송 완료');
      navigate('/');
    } else if (isTokenError) {
      navigate('/login');
    }
  }, [isTokenLoading, isTokenSuccess, isTokenError]);

  return null;
};

export default LoginLoadingPage;
