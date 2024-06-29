import { configureStore } from '@reduxjs/toolkit';
import mapSlice from '@/components/Home/Map/MapSlice.ts';

export const store = configureStore({
  reducer: { mapSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
