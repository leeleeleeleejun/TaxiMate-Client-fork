export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const LocalAPI = 'http://localhost:5173';

export const API_PATH = {
  SEARCH: {
    GET: 'https://dapi.kakao.com/v2/local/search/keyword.json',
  },
  POST: {
    GET: {
      ALL: `${API_BASE_URL}/api/v1/parties`,
      // 포스트 ID 조회
      BY_ID: `${API_BASE_URL}/api/v1/parties/:partyId`,
      // 특정 유저의 전체 포스트 조회
      BY_USER: `${API_BASE_URL}/posts/user/:userId`,
      JOIN_POSTS: `${LocalAPI}/join-posts`,
      CLOSE_POSTS: `${LocalAPI}/close-posts`,
    },
    POST: `${API_BASE_URL}/api/v1/parties`,
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
