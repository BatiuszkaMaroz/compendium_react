import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState: {
  status: Status;
  list: Post[];
} = {
  status: 'idle',
  list: [],
};

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: Post[] = await res.json();

  return data;
});

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'success';
        state.list = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default slice.reducer;

type Status = 'idle' | 'pending' | 'success' | 'failed';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
