import { combineReducers, configureStore, DeepPartial } from '@reduxjs/toolkit';
import comments from './commentsSlice';

const rootReducer = combineReducers({ comments });
export type RootState = ReturnType<typeof rootReducer>;
export type PreloadedState = DeepPartial<RootState>;

export const setupStore = (preloadedState?: PreloadedState) =>
  configureStore({ reducer: rootReducer, devTools: true, preloadedState });
const store = setupStore();

export default store;
