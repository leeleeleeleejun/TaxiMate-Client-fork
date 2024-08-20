import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL, API_PATH } from '@/constants/path.ts';
import { createPostRes, Post, PostDetail } from '@/types/post.ts';
import { registerDataType } from '@/types';

//새로 고침 시 accessToken 변수 초기화 => refresh토큰으로 재요청
let accessToken: string;

// base URL과 엔드포인트들로 서비스 정의
export const localApi = createApi({
  reducerPath: 'localApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
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
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: patch,
      }),
    }),
    getAccessToken: builder.query<{ accessToken: string }, { code: string }>({
      query: (arg: { code: string }) => ({
        url: API_PATH.USER.GET_ACCESS_TOKEN,
        params: arg,
      }),
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
} = localApi;
