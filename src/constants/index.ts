import { useNavermaps } from 'react-naver-maps';
import { SelectionKey } from '@/types';

export const postData = () => {
  const line = [
    // { order: 11, station: '잠실새내', code: [37.5115735, 127.0868931] },
    // { order: 23, station: '종합운동장', code: [37.5110588, 127.0737908] },
    // { order: 1456, station: '삼성', code: [37.5088803, 127.0631076] },
    // { order: 71, station: '선릉', code: [37.504585, 127.0492805] },
    // { order: 1341, station: '역삼', code: [37.5006431, 127.0363764] },
    // { order: 65, station: '강남', code: [37.4979526, 127.0276241] },
    // { order: 333, station: '교대', code: [37.4939732, 127.0146391] },
    // { order: 575, station: '방배', code: [37.4814955, 126.9976669] },
    // { order: 3, station: '사당', code: [37.4765793, 126.981596] },
    // { order: 578, station: '신대방', code: [37.4875672, 126.9133456] },
    {
      order: 976,
      station: '구로디지털단지구로디지털단지',
      code: [37.485266, 126.901401],
    },
    {
      order: 1343,
      station: '신도림',
      code: [37.5088099, 126.8912061],
    },
    { order: 2345, station: '문래', code: [37.517933, 126.89476] },
    { station: '두정역두정역역역역', code: [36.833791, 127.148905] },
  ];

  const data = line.map((item, index) => ({
    id: item.station + index,
    title: '테스트 데이터' + index,
    departureTime: '2024-06-28T00:11:24.888135',
    origin: '우리집',
    destination: item.station,
    currentPassengers: 1,
    maxPassengers: 4,
    originLocation: {
      latitude: item.code[0],
      longitude: item.code[1],
    },
  }));

  return data;
};

export const usePolylinePathData = () => {
  const navermaps = useNavermaps();

  return [
    new navermaps.LatLng(37.359924641705476, 127.1148204803467),
    new navermaps.LatLng(37.36343797188166, 127.11486339569092),
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

export const selections: Record<SelectionKey, string[]> = {
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
