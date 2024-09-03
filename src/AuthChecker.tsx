import { Navigate, Outlet } from 'react-router-dom';
import useCheckLogin from '@/hooks/useCheckLogin.ts';
import { CLIENT_PATH } from '@/constants/path.ts';

const AuthChecker = () => {
  const isLogin = useCheckLogin();

  if (!isLogin) {
    return <Navigate to={CLIENT_PATH.LOGIN} />;
  }
  return isLogin && <Outlet />;
};

export default AuthChecker;
