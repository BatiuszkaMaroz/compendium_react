/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { AnyAction, Reducer } from '@reduxjs/toolkit';

type enhancedReducer<T> = Reducer<enhancedState<T>, AnyAction>;
type enhancedState<T> = {
  past: T[];
  present: T;
  future: T[];
};

export function undoable<T>(
  reducer: Reducer<T>,
  config?: { name?: string },
): enhancedReducer<T> {
  const initialState: enhancedState<T> = {
    past: [],
    present: reducer(undefined, { type: '' }),
    future: [],
  };

  const enhancedReducer: enhancedReducer<T> = (
    state = initialState,
    action,
  ) => {
    const { future, past, present } = state;

    let UNDO = 'undo';
    let REDO = 'redo';

    if (config?.name) {
      UNDO = `${config.name}/undo`;
      REDO = `${config.name}/redo`;
    }

    switch (action.type) {
      case UNDO: {
        const newPresent = past[past.length - 1];
        const newPast = past.slice(0, past.length - 1);

        return {
          past: newPast,
          present: newPresent,
          future: [...future, present],
        };
      }

      case REDO: {
        const newPresent = future[future.length - 1];
        const newFuture = future.slice(0, future.length - 1);

        return {
          past: [...past, present],
          present: newPresent,
          future: newFuture,
        };
      }

      default: {
        const newPresent = reducer(present, action);

        if (present === newPresent) return state;

        return {
          past: [...past, present],
          present: newPresent,
          future: [],
        };
      }
    }
  };

  return enhancedReducer;
}
