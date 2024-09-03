import { useNavermaps } from 'react-naver-maps';
import { selectionKey } from '@/types';

export const usePolylinePathData = () => {
  const navermaps = useNavermaps();

  return [
    new navermaps.LatLng(37.359924641705476, 127.1148204803467),
    new navermaps.LatLng(37.359924641705476, 127.11486339569092),
    new navermaps.LatLng(37.368520071054576, 127.11473464965819),
    new navermaps.LatLng(37.3685882848096, 127.1088123321533),
    new navermaps.LatLng(37.37295383612657, 127.10876941680907),
    new navermaps.LatLng(37.38001321351567, 127.11851119995116),
    new navermaps.LatLng(37.378546827477855, 127.11984157562254),
    new navermaps.LatLng(37.376637072444105, 127.12052822113036),
    new navermaps.LatLng(37.37530703574853, 127.12190151214598),
    new navermaps.LatLng(37.371657839593894, 127.11645126342773),
    new navermaps.LatLng(37.36855417793982, 127.1207857131958),
  ];
};

export const selections: Record<selectionKey, string[]> = {
  meridiem: ['AM', 'PM'],
  hour: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
  minute: [
    '0',
    '5',
    '10',
    '15',
    '20',
    '25',
    '30',
    '35',
    '40',
    '45',
    '50',
    '55',
  ],
};
