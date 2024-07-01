import { configureStore } from '@reduxjs/toolkit';
import mapSlice from '@/components/Home/Map/MapSlice.ts';
import postListSlice from '@/components/Home/PostList/PostListSlice.ts';

export const store = configureStore({
  reducer: { mapSlice, postListSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
