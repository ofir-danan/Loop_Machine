import { configureStore } from "@reduxjs/toolkit";
import playReducer from "./redux/playReducer";

export const store = configureStore({
  reducer: {
    player: playReducer,
  },
});
