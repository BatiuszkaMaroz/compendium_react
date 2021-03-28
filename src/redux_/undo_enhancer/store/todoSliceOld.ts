import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
// import { RootState } from './store';

interface State {
  past: Todo[][];
  list: Todo[];
  future: Todo[][];
}
const initialState: State = {
  past: [],
  list: [
    { id: '1', value: 'First', done: false },
    { id: '2', value: 'Second', done: false },
    { id: '3', value: 'Third', done: false },
  ],
  future: [],
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

      state.future = [];
      state.past.push([...state.list]);

      state.list.push(todo);
    },
    remove: (state, action: PayloadAction<string>) => {
      const updated = state.list.filter((t) => t.id !== action.payload);

      state.future = [];
      state.past.push([...state.list]);

      state.list = updated;
    },
    undo: (state) => {
      if (state.past.length) {
        const past = state.past.pop();
        const present = [...state.list];

        if (past) {
          state.list = past;
          state.future.push(present);
        }
      }
    },
    redo: (state) => {
      if (state.future.length) {
        const future = state.future.pop();
        const present = [...state.list];

        if (future) {
          state.list = future;
          state.past.push(present);
        }
      }
    },
  },
});

// export const selectTodo = createSelector(
//   (state: RootState) => state.todo,
//   (state) => ({
//     past: state.past.length ? state.past : false,
//     list: state.list,
//     future: state.future.length ? state.future : false,
//   }),
// );

export const { add, remove, undo, redo } = slice.actions;
export default slice.reducer;

interface Todo {
  id: string;
  value: string;
  done: boolean;
}
