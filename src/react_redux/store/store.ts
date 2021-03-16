import { configureStore } from '@reduxjs/toolkit';
import posts from './postsSlice';

const store = configureStore({
  reducer: { posts },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
