import { createSlice } from '@reduxjs/toolkit';

export interface IMapState {
  activeMarker: string | null;
  centerLocation: { lat: number; lng: number };
}

const initialState: IMapState = {
  activeMarker: null,
  centerLocation: { lat: 0, lng: 0 },
};

export const MapSlice = createSlice({
  name: 'mapSlice',
  initialState,
  reducers: {
    setActiveMarker: (state, action) => {
      state.activeMarker = action.payload;
    },
    setCenterLocation: (state, action) => {
      state.centerLocation = action.payload;
    },
  },
});

export const { setActiveMarker, setCenterLocation } = MapSlice.actions;

export default MapSlice.reducer;
