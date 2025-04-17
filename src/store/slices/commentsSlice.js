import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCommentsByUser = createAsyncThunk(
  'comments/fetchByUser',
  async (userId) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${userId}`,
    );
    return res.data;
  },
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCommentsByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchCommentsByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default commentsSlice.reducer;
