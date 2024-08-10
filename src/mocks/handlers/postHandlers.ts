import { http, HttpResponse } from 'msw';
import { API_PATH } from '@/constants/path.ts';
import { posts } from '@/mocks/data/post.ts';

const PostHandlers = [
  // 범위 내 팟 조회
  // http.get(API_PATH.POST.GET.ALL, () => {
  //   console.log('Captured a "GET /posts" request');
  //   return HttpResponse.json(posts);
  // }),
  // 팟 상세 조회
  // http.get(API_PATH.POST.GET.BY_ID, () => {
  //   return HttpResponse.json(post);
  // }),
  http.get(API_PATH.POST.GET.JOIN_POSTS, () => {
    return HttpResponse.json(posts);
  }),
  http.get(API_PATH.POST.GET.CLOSE_POSTS, () => {
    return HttpResponse.json(posts);
  }),

  // //팟 생성
  // http.post(API_PATH.POST.POST, () => {
  //   return HttpResponse.json(creatPost);
  // }),
];

export default PostHandlers;
