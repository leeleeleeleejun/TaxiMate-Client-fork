import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const useCheckLogin = () => {
  const isLogin = useSelector((state: RootState) => state.userSlice.isLogin);
  if (!isLogin) alert('로그인이 필요합니다!');
  return isLogin;
};

export default useCheckLogin;
