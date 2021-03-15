import React from 'react';
import { defaultState, Dispatch, State } from './AppReducer';

export const AppContext = React.createContext<{
  dispatch: Dispatch;
  state: State;
}>({
  dispatch: () => null,
  state: defaultState,
});
