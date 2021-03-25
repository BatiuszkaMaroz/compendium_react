import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState: {
  status: Status;
  list: User[];
} = {
  status: 'idle',
  list: [],
};

export const fetchUsers = createAsyncThunk<User[]>('users/fetch', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: FetchedUser[] = await res.json();

  const formatted = data.map((u) => ({ ...u, id: '' + u.id }));
  return formatted;
});

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'success';
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export default slice.reducer;

type Status = 'idle' | 'pending' | 'success' | 'failed';

interface FetchedUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}
