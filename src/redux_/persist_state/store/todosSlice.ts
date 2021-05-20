import {
  createSelector,
  createSlice,
  nanoid,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from './store';

const initialState: { id: string; value: string; done: boolean }[] = [];

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.unshift({ id: nanoid(), value: action.payload, done: false });
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter((t) => t.id !== action.payload);
    },
    toggle: (state, action: PayloadAction<string>) => {
      state.map((t) => {
        if (t.id === action.payload) {
          t.done = !t.done;
        }

        return t;
      });
    },
  },
});

export const getTodos = createSelector(
  [(state: RootState) => state.todos],
  (todos) => todos,
);

export const { add, remove, toggle } = slice.actions;
export default slice.reducer;
