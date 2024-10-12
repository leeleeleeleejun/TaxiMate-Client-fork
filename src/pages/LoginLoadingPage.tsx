import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import reactNativePostMessage from '@/utils/reactNativePostMessage.ts';
import {
  useGetAccessTokenQuery,
  useSetPushAlarmMutation,
} from '@/api/localApi.ts';
import { setIsLogin } from '@/components/myProfile/userSlice.ts';

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

  const [
    setPushAlarmTrigger,
    { isLoading: isPushAlarmLoading, isError: isPushAlarmError },
  ] = useSetPushAlarmMutation();

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      setPushAlarmTrigger(e.data);
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    if (!isTokenLoading) {
      if (isTokenSuccess) {
        dispatch(setIsLogin(true));
        reactNativePostMessage('push_notification');
      } else if (isTokenError) {
        console.error('Login failed:', tokenError);
        navigate('/login');
      }
    }
  }, [
    isTokenLoading,
    isTokenSuccess,
    isTokenError,
    tokenError,
    dispatch,
    navigate,
  ]);

  // 푸쉬 토큰 요청 후
  useEffect(() => {
    if (!isPushAlarmLoading) {
      if (isPushAlarmError) {
        console.error('Failed to set push alarm');
        // 푸시 알람 설정 실패 시 처리 (예: 사용자에게 알림)
        alert('푸시알람 설정에 실패했습니다.');
      }
    }
    navigate('/');
  }, [isPushAlarmLoading, isPushAlarmError, navigate]);

  return null;
};

export default LoginLoadingPage;
