import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'Coding', content: 'Coding is fine' },
  { id: '2', title: 'Coding', content: 'Coding is not fine' },
];

const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ title: string; content: string }>) => {
      const { content, title } = action.payload;
      state.push({ id: nanoid(), content, title });
    },
    remove: (state, action: PayloadAction<string>) => {
      state = state.filter((e) => e.id !== action.payload);
    },
  },
});

export const { add, remove } = slice.actions;
export default slice.reducer;
