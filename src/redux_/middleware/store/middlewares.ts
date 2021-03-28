/* eslint-disable @typescript-eslint/ban-types */

import { Middleware } from 'redux';
import { RootState } from './store';

export const thunk: Middleware<
  {}, //
  RootState
> = (store) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }

  return next(action);
};

export const logger: Middleware<
  {}, //
  RootState
> = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);

  const result = next(action);

  console.log('next state', store.getState());
  console.groupEnd();

  return result;
};
