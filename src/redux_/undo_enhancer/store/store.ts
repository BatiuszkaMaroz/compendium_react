import { configureStore } from '@reduxjs/toolkit';

import todo from './todoSlice';
import { undoable } from './undoable';

const enhanced = undoable(todo, { name: 'todo' });

const store = configureStore({
  reducer: { todo: enhanced },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
