import { configureStore } from '@reduxjs/toolkit';

import posts from './postsSlice';
import users from './usersSlice';

const store = configureStore({ reducer: { posts, users }, devTools: true });
export type RootState = ReturnType<typeof store.getState>;

export default store;
