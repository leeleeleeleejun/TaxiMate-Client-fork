import { createSlice } from '@reduxjs/toolkit';

const today = new Date();
const minutes = today.getMinutes();

const ceilMinutes = Math.ceil(minutes / 5) * 5;
const departureTime = new Date(today.setMinutes(ceilMinutes)).toISOString();

const initialState = {
  title: '',
  departureTime,
  explanation: '',
  originLocation: {
    lat: 36.3418454,
    lng: 127.5272031,
  },
  destinationLocation: {
    lat: 36.3418454,
    lng: 127.5272031,
  },
  maxParticipants: '4',
};

export const createPostSlice = createSlice({
  name: 'CreatePostSlice',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    setDepartureTime: (state, action) => {
      state.departureTime = action.payload;
    },
    setExplanation: (state, action) => {
      state.explanation = action.payload;
    },
    setOriginLocation: (state, action) => {
      state.originLocation = action.payload;
    },
    setDestinationLocation: (state, action) => {
      state.destinationLocation = action.payload;
    },
    setMaxParticipants: (state, action) => {
      state.maxParticipants = action.payload;
    },
  },
});

export const {
  setTitle,
  setExplanation,
  setOriginLocation,
  setDepartureTime,
  setDestinationLocation,
  setMaxParticipants,
} = createPostSlice.actions;

export default createPostSlice.reducer;
