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

  const { isLoading: isTokenLoading, isSuccess: isTokenSuccess } =
    useGetAccessTokenQuery({ code: code });
  const [
    setPushAlarmTrigger,
    { isLoading: isPushAlarmLoading, isSuccess: isPushAlarmSuccess },
  ] = useSetPushAlarmMutation();

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      setPushAlarmTrigger(e.data);
    };
    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, []);

  useEffect(() => {
    if (isTokenSuccess && !isTokenLoading) {
      dispatch(setIsLogin(true));
      reactNativePostMessage('push_notification');
    }
  }, [isTokenSuccess, isTokenLoading, dispatch]);

  useEffect(() => {
    if (!isTokenLoading && !isPushAlarmLoading) {
      if (isTokenSuccess && isPushAlarmSuccess) {
        dispatch(setIsLogin(true));
        reactNativePostMessage('push_notification');
      }
      // 모든 작업이 완료된 후 네비게이션 수행
      navigate('/');
    }
  }, [
    isTokenLoading,
    isTokenSuccess,
    dispatch,
    navigate,
    isPushAlarmLoading,
    isPushAlarmSuccess,
  ]);

  return null;
};

export default LoginLoadingPage;
