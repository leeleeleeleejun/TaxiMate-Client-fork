import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_PATH } from '@/constants/path.ts';
import { createPostRes, Post, PostDetail } from '@/types/post.ts';
import { registerDataType } from '@/types';

//export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//새로 고침 시 accessToken 변수 초기화 => refresh토큰으로 재요청
let accessToken: string;

// base URL과 엔드포인트들로 서비스 정의
// 배포 시 BASE URL 변경 필요
export const localApi = createApi({
  reducerPath: 'localApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/',
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.set('Accept', 'application/json');
      accessToken && headers.set('Authorization', `Bearer ${accessToken}`);
    },
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<
      Post[],
      {
        minLatitude: number;
        minLongitude: number;
        maxLatitude: number;
        maxLongitude: number;
      }
    >({
      query: (arg) => ({
        url: API_PATH.POST.GET.ALL,
        params: arg,
      }),
      transformResponse: (response: { data: Post[] }) => response.data,
      keepUnusedDataFor: 0,
    }),
    getPostById: builder.query<PostDetail, string>({
      query: (id) => API_PATH.POST.GET.BY_ID.replace(':partyId', id),
      transformResponse: (response: { data: PostDetail }) => response.data,
      keepUnusedDataFor: 5,
    }),
    getJoinPosts: builder.query<Post[], string>({
      query: () => API_PATH.POST.GET.JOIN_POSTS,
      transformResponse: (response: { data: Post[] }) => response.data,
    }),
    getClosePosts: builder.query<Post[], string>({
      query: () => API_PATH.POST.GET.CLOSE_POSTS,
      transformResponse: (response: { data: Post[] }) => response.data,
    }),
    createPost: builder.mutation<createPostRes, registerDataType>({
      query: (patch) => ({
        url: API_PATH.POST.POST,
        method: 'POST',
        body: patch,
      }),
    }),
    getAccessToken: builder.query<{ accessToken: string }, { code: string }>({
      query: (arg) => ({
        url: API_PATH.USER.GET_ACCESS_TOKEN,
        params: arg,
      }),
      transformResponse: (response: { data: { accessToken: string } }) => {
        accessToken = response.data.accessToken;
        return response.data;
      },
    }),
    getRefreshAccessToken: builder.query<{ accessToken: string }, null>({
      query: () => API_PATH.USER.GET_REFRESH_ACCESS_TOKEN,
      transformResponse: (response: { data: { accessToken: string } }) => {
        accessToken = response.data.accessToken;
        return response.data;
      },
    }),
  }),
});

// 정의된 엔드포인트에서 자동으로 생성된 훅을 함수형 컴포넌트에서 사용하기 위해 export
export const {
  useLazyGetPostsQuery,
  useGetPostByIdQuery,
  useGetJoinPostsQuery,
  useGetClosePostsQuery,
  useCreatePostMutation,
  useGetAccessTokenQuery,
  useGetRefreshAccessTokenQuery,
} = localApi;
