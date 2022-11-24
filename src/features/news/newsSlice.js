import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiGetNewsIds } from "../../api";

const initialState = {
  ids: [],
  newsList: [],
};

export const getIds = createAsyncThunk("counter/getIds", apiGetNewsIds);
// exoirt const getNews = createAsuncThu

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getIds.fulfilled, (state, action) => {
      state.ids = action.payload;
    });
  },
});

export const selectIds = (state) => state.news.ids;

export default newsSlice.reducer;
