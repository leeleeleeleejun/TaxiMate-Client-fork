import { createSlice } from '@reduxjs/toolkit';

export interface PostListState {
  height: number;
}

const initialState: PostListState = {
  height: 0,
};

export const postListSlice = createSlice({
  name: 'postListSlice',
  initialState,
  reducers: {
    setPostListHeight: (state, action) => {
      state.height = action.payload;
    },
  },
});

export const { setPostListHeight } = postListSlice.actions;

export default postListSlice.reducer;
