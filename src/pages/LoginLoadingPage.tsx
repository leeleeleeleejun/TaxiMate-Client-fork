import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import reactNativePostMessage from '@/utils/reactNativePostMessage.ts';
import {
  useLazyGetAccessTokenQuery,
  useSetPushAlarmMutation,
} from '@/api/localApi.ts';
import { setIsLogin } from '@/components/myProfile/userSlice.ts';
import useErrorHandle from '@/hooks/useErrorHandle.ts';

const LoginLoadingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const code = new URLSearchParams(location.search).get('code') || '';
  // const [isPushNotificationSent, setIsPushNotificationSent] = useState(false);

  const [
    getAccessTokenTrigger,
    {
      isLoading: isTokenLoading,
      isSuccess: isTokenSuccess,
      isError: isTokenError,
      error: tokenError,
    },
  ] = useLazyGetAccessTokenQuery();

  const [
    setPushAlarmTrigger,
    {
      isLoading: isPushAlarmLoading,
      isError: isPushAlarmError,
      isSuccess: isPushAlarmSuccess,
    },
  ] = useSetPushAlarmMutation();

  useErrorHandle(tokenError);

  // push_notification을 보낸 후 메시지를 처리
  useEffect(() => {
    getAccessTokenTrigger({ code });
    // if (isPushNotificationSent) {
    const handleMessage = (e: MessageEvent) => {
      alert('로그인 로딩 페이지에서 받은 메시지 (푸시토큰): ' + e.data);
      setPushAlarmTrigger(e.data);
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
    // }
  }, []);

  // 토큰이 성공적으로 받아졌을 때
  useEffect(() => {
    if (!isTokenLoading && isTokenSuccess) {
      dispatch(setIsLogin(true));
      reactNativePostMessage('push_notification');
      alert('로그인 상태 변경 및 push_notification 전송 완료');
    } else if (isTokenError) {
      navigate('/login');
    }
  }, [isTokenLoading, isTokenSuccess, isTokenError, dispatch, navigate]);

  // 푸쉬 토큰 요청 후
  useEffect(() => {
    if (isTokenSuccess && !isPushAlarmLoading) {
      if (isPushAlarmSuccess) {
        alert('푸시 알람 설정에 성공했습니다.');
      }
      if (isPushAlarmError) {
        alert('푸시 알람 설정에 실패했습니다.');
      }
      navigate('/');
    }
  }, [
    isPushAlarmSuccess,
    isTokenSuccess,
    isPushAlarmLoading,
    isPushAlarmError,
    navigate,
  ]);

  return null;
};

export default LoginLoadingPage;
