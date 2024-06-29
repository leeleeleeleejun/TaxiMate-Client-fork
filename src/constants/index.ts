export const postData = () => {
  const line = [
    { order: 11, station: '잠실새내', code: [37.511687, 127.086162] },
    { order: 23, station: '종합운동장', code: [37.510997, 127.073642] },
    { order: 1456, station: '삼성', code: [37.508844, 127.06316] },
    { order: 71, station: '선릉', code: [37.504503, 127.049008] },
    { order: 1341, station: '역삼', code: [37.500622, 127.036456] },
    { order: 65, station: '강남', code: [37.498095, 127.02761] },
    { order: 333, station: '교대', code: [37.493415, 127.01408] },
    { order: 575, station: '방배', code: [37.481426, 126.997596] },
    { order: 3, station: '사당', code: [37.47653, 126.981685] },
    { order: 578, station: '신대방', code: [37.487462, 126.913149] },
    {
      order: 976,
      station: '구로디지털단지',
      code: [37.485266, 126.901401],
    },
    { order: 1343, station: '신도림', code: [37.508725, 126.891295] },
    { order: 2345, station: '문래', code: [37.517933, 126.89476] },
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
