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
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code') || '';
  const [setPushAlarmTrigger, { isSuccess: pushAlarmSuccess }] =
    useSetPushAlarmMutation();

  const { isLoading, isSuccess } = useGetAccessTokenQuery({ code: code });

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      console.log('Received message', e);
      setPushAlarmTrigger(e.data);
    };
    window.addEventListener('message', handleMessage);

    return () => window.removeEventListener('message', handleMessage);
  }, [pushAlarmSuccess]);

  useEffect(() => {
    if (!isLoading) {
      if (isSuccess && pushAlarmSuccess) {
        dispatch(setIsLogin(true));
        reactNativePostMessage('push_notification');
      }
      // 모든 작업이 완료된 후 네비게이션 수행
      navigate('/');
    }
  }, [isSuccess, isLoading, dispatch, navigate, pushAlarmSuccess]);

  return null;
};

export default LoginLoadingPage;
