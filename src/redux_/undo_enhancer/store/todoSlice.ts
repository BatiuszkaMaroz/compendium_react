import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { RootState } from './store';

interface State {
  list: Todo[];
}
const initialState: State = {
  list: [
    { id: '1', value: 'First', done: false },
    { id: '2', value: 'Second', done: false },
    { id: '3', value: 'Third', done: false },
  ],
};

const slice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const todo: Todo = {
        id: nanoid(),
        value: action.payload,
        done: false,
      };

      state.list.push(todo);
    },
    remove: (state, action: PayloadAction<string>) => {
      const updated = state.list.filter((t) => t.id !== action.payload);

      state.list = updated;
    },
    undo: (state) => state,
    redo: (state) => state,
  },
});

export const selectTodo = createSelector(
  (state: RootState) => state.todo,
  (state) => ({
    past: state.past.length ? state.past : false,
    list: state.present.list,
    future: state.future.length ? state.future : false,
  }),
);

export const { add, remove } = slice.actions;

export default slice.reducer;

interface Todo {
  id: string;
  value: string;
  done: boolean;
}
