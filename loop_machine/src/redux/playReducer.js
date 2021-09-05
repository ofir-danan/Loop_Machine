import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false, // play / pause value
  isRunning: 0, // amount of active loops
};

export const playSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    play: (state) => {
      state.value = true;
    },
    pause: (state) => {
      state.value = false;
    },
    running: (state) => {
      state.isRunning = state.isRunning + 1;
    },
    stop: (state) => {
      state.isRunning = state.isRunning - 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { play, pause, running, stop } = playSlice.actions;

export default playSlice.reducer;
