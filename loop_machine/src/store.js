import { configureStore } from "@reduxjs/toolkit";
import playReducer from "./redux/playReducer";

// store setup for redux toolkit
export const store = configureStore({
  reducer: {
    player: playReducer,
  },
});
