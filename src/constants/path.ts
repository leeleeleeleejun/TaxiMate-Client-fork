export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const API_PATH = {
  SEARCH: {
    GET: 'https://map.naver.com/p/api/search/instant-search',
  },
  POST: {
    GET: {
      ALL: `${API_BASE_URL}/posts`,
      // 포스트 ID 조회
      BY_ID: `${API_BASE_URL}/posts/:postId`,
      // 특정 유저의 전체 포스트 조회
      BY_USER: `${API_BASE_URL}/posts/user/:userId`,
    },
  },
};

export const CLIENT_PATH = {
  SEARCH: '/search',
  POST_DETAIL: '/posts/:postId',
  CREATE_POST: '/create-post',
  CHAT_LISTS: '/chat-list',
  CHAT_ROOM: '/chat-list/:chatRoomId',
  USAGE_HISTORY: '/usage-history',
  MY_PROFILE: '/my-profile',
  LOGIN: '/login',
};
