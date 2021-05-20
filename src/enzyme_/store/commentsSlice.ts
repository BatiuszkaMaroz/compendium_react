import {
  createSlice,
  PayloadAction,
  createSelector,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { RootState } from './store';
import axios from 'axios';

const initialState: { id: string; title: string }[] = [];

export const fetch = createAsyncThunk('fetch', async () => {
  const res = await axios.get<{ id: number; title: string }[]>(
    'https://jsonplaceholder.typicode.com/posts',
  );

  const data = res.data.map((p) => ({ id: '' + p.id, title: p.title }));
  return data;
});

const slice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.unshift({ id: nanoid(), title: action.payload });
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter((p) => p.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetch.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectPosts = createSelector(
  [(state: RootState) => state.comments],
  (comments) => comments,
);
export const { add, remove } = slice.actions;
export default slice.reducer;
