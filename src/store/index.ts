import { configureStore } from '@reduxjs/toolkit';
import mapSlice from '@/components/Home/Map/MapSlice.ts';
import postListSlice from '@/components/Home/PostList/PostListSlice.ts';
import createPostSlice from '@/components/CreatePost/CreatePostSlice.ts';

export const store = configureStore({
  reducer: { mapSlice, postListSlice, createPostSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
