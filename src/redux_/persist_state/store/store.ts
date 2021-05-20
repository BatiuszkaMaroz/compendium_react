import { configureStore } from '@reduxjs/toolkit';
import { loadState, saveState } from './helpers';
import todos from './todosSlice';
import throttle from 'lodash/throttle';

const store = configureStore({
  reducer: { todos },
  devTools: true,
  preloadedState: loadState(),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;

store.subscribe(
  throttle(() => {
    // saveState<RootState>(store.getState());
    saveState<RootState>({ todos: store.getState().todos });
  }, 500),
);
