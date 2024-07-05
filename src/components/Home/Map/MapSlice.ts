import { createSlice } from '@reduxjs/toolkit';

export interface IMapState {
  activeMarker: string | null;
}

const initialState: IMapState = {
  activeMarker: null,
};

export const MapSlice = createSlice({
  name: 'mapSlice',
  initialState,
  reducers: {
    setActiveMarker: (state, action) => {
      state.activeMarker = action.payload;
    },
  },
});

export const { setActiveMarker } = MapSlice.actions;

export default MapSlice.reducer;
