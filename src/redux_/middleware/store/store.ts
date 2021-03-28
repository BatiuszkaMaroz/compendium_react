import {
  applyMiddleware,
  combineReducers,
  // configureStore,
  createStore,
} from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

import posts from './postsSlice';
import { thunk, logger } from './middlewares';

const rootReducer = combineReducers({ posts });
export type RootState = ReturnType<typeof rootReducer>;

// const store = configureStore({reducer: rootReducer, devTools: true, middleware: [thunk, logger]})
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);
export default store;
