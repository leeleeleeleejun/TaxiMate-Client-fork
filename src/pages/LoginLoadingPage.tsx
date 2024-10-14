import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import reactNativePostMessage from '@/utils/reactNativePostMessage.ts';
import {
  useGetAccessTokenQuery,
  useSetPushAlarmMutation,
} from '@/api/localApi.ts';
import { setIsLogin } from '@/components/myProfile/userSlice.ts';
import useErrorHandle from '@/hooks/useErrorHandle.ts';

const LoginLoadingPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const code = useMemo(
    () => new URLSearchParams(location.search).get('code') || '',
    [location.search]
  );

  const {
    isLoading: isTokenLoading,
    isSuccess: isTokenSuccess,
    isError: isTokenError,
    error: tokenError,
  } = useGetAccessTokenQuery(
    { code },
    {
      skip: !code, // code가 없으면 쿼리 실행 안 함
      refetchOnMountOrArgChange: true, // 컴포넌트 마운트나 인자 변경 시에만 재실행
    }
  );

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
