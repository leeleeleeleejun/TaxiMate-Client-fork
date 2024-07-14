import { useLocation } from 'react-router-dom';

const useLocationPathPlace = () => {
  const location = useLocation();

  const path = location.pathname.split('/')[2];

  return path === 'set-origin';
};
export default useLocationPathPlace;
