const data = (() => {
  const line = [
    { order: 11, station: '잠실새내', code: [37.5115735, 127.0868931] },
    { order: 23, station: '종합운동장', code: [37.5110588, 127.0737908] },
    { order: 1456, station: '삼성', code: [37.5088803, 127.0631076] },
    { order: 71, station: '선릉', code: [37.504585, 127.0492805] },
    { order: 1341, station: '역삼', code: [37.5006431, 127.0363764] },
    { order: 65, station: '강남', code: [37.4979526, 127.0276241] },
    { order: 333, station: '교대', code: [37.4939732, 127.0146391] },
    { order: 575, station: '방배', code: [37.4814955, 126.9976669] },
    { order: 3, station: '사당', code: [37.4765793, 126.981596] },
    { order: 578, station: '신대방', code: [37.4875672, 126.9133456] },
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

  return line.map((item, index) => ({
    id: String(item.order),
    title: index + '제목입니다~',
    departureTime: '2024-06-26T14:11:24.888135',
    origin: '우리집',
    destination: '너네집',
    maxParticipants: 4, // 최대 참여자 수
    currentParticipants: 2, // 현재 참여자 수
    originLocation: {
      latitude: item.code[0],
      longitude: item.code[1],
    },
  }));
})();

export const posts = {
  success: true,
  message: null,
  data,
};

export const post = {
  success: true,
  message: null,
  data: {
    id: 12,
    title: '제목입니다~',
    departureTime: '2024-06-26T14:11:24.888135',
    explanation: '재잘재잘',
    origin: '우리집',
    originAddress: '출발지 주소 머시기',
    originLocation: {
      latitude: 36.3418454,
      longitude: 127.5272031,
    },
    destination: '너네집',
    destinationAddress: '도착지 주소 머시기',
    destinationLocation: {
      latitude: 36.3418454,
      longitude: 127.5272031,
    },
    maxParticipants: 4,
    currentParticipants: 2,
    status: 'NOT_PARTICIPATING', // NOT_PARTICIPATING, PARTICIPATING, CLOSED
    createdAt: '2024-06-25T20:02:11.523391',
    views: 14,
    host: {
      id: 16,
      nickname: '닉네임',
      profileImage: '/profile.png',
      isMe: false,
    },
    taxi: {
      route: [
        {
          latitude: 37.359924641705476,
          longitude: 127.1148204803467,
        },
        {
          latitude: 37.359924641705476,
          longitude: 127.11486339569092,
        },
        {
          latitude: 37.368520071054576,
          longitude: 127.11473464965819,
        },
        {
          latitude: 37.3685882848096,
          longitude: 127.1088123321533,
        },
        {
          latitude: 37.37295383612657,
          longitude: 127.10876941680907,
        },
        {
          latitude: 37.38001321351567,
          longitude: 127.11851119995116,
        },
        {
          latitude: 37.378546827477855,
          longitude: 127.11984157562254,
        },
        {
          latitude: 37.376637072444105,
          longitude: 127.12052822113036,
        },
        {
          latitude: 37.37530703574853,
          longitude: 127.12190151214598,
        },
        {
          latitude: 37.371657839593894,
          longitude: 127.11645126342773,
        },
        {
          latitude: 37.36855417793982,
          longitude: 127.1207857131958,
        },
      ],
      fare: 14500, // 금액
      duration: 840, // 초 단위
    },
  },
};
