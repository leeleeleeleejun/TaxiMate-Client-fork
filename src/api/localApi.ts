import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL, API_PATH } from '@/constants/path.ts';
import { createPostRes, Post, PostDetail } from '@/types/post.ts';
import { registerDataType } from '@/types';

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
      query: (arg) => {
        return {
          url: API_PATH.POST.GET.ALL,
          params: arg,
        };
      },
      transformResponse: (response: { data: Post[] }) => response.data,
      keepUnusedDataFor: 0,
    }),
    getPostById: builder.query<PostDetail, string>({
      query: (id) => {
        console.log(id);
        return API_PATH.POST.GET.BY_ID.replace(':partyId', id);
      },
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
      query: (patch) => {
        return {
          url: API_PATH.POST.POST,
          method: 'POST',
          body: patch,
        };
      },
    }),
    getTokens: builder.query<
      {
        accessToken: string;
        refreshToken: string;
      },
      { code: string }
    >({
      query: (arg: { code: string }) => {
        console.log(arg);
        return {
          url: API_PATH.USER.GET_TOKEN,
          params: arg,
        };
      },
      transformResponse: (response: {
        data: {
          accessToken: string;
          refreshToken: string;
        };
      }) => response.data,
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
  useGetTokensQuery,
} = localApi;
