import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL, API_PATH } from '@/constants/path.ts';
import { createPostRes, post, postDetail } from '@/types/post.ts';
import { registerData } from '@/types';

// base URL과 엔드포인트들로 서비스 정의
export const localApi = createApi({
  reducerPath: 'localApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getPosts: builder.query<
      post[],
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
      transformResponse: (response: { data: post[] }) => response.data,
      keepUnusedDataFor: 0,
    }),
    getPostById: builder.query<postDetail, string>({
      query: (id) => {
        console.log(id);
        return API_PATH.POST.GET.BY_ID.replace(':partyId', id);
      },
      transformResponse: (response: { data: postDetail }) => response.data,
      keepUnusedDataFor: 5,
    }),
    getJoinPosts: builder.query<post[], string>({
      query: () => API_PATH.POST.GET.JOIN_POSTS,
      transformResponse: (response: { data: post[] }) => response.data,
    }),
    getClosePosts: builder.query<post[], string>({
      query: () => API_PATH.POST.GET.CLOSE_POSTS,
      transformResponse: (response: { data: post[] }) => response.data,
    }),
    createPost: builder.mutation<createPostRes, registerData>({
      query: (patch) => {
        return {
          url: API_PATH.POST.POST,
          method: 'POST',
          body: patch,
        };
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
} = localApi;
