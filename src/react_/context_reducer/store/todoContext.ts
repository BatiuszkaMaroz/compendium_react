import React from 'react';
import { Dispatch, initialState, State } from './todoReducer';

export const TodoContext = React.createContext<{
  dispatch: Dispatch;
  state: State;
}>({
  dispatch: () => null,
  state: initialState,
});
