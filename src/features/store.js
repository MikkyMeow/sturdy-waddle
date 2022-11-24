import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import newsReducer from "./news/newsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    news: newsReducer,
  },
});
