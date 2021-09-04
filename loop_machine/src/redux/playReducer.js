import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
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
  },
});

// Action creators are generated for each case reducer function
export const { play, pause } = playSlice.actions;

export default playSlice.reducer;
