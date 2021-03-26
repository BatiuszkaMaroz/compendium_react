/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useReducer } from 'react';
import { nanoid } from 'nanoid';
import { TodoAction } from './todoActions';

export type Dispatch = React.Dispatch<TodoAction>;
export type State = {
  list: Todo[];
};

export const initialState: State = {
  list: [
    { id: nanoid(), value: 'buy groceries' },
    { id: nanoid(), value: 'wait for price rise' },
    { id: nanoid(), value: 'sell groceries' },
  ],
};

const reducer: React.Reducer<State, TodoAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'todo/add': {
      state.list.push({ id: nanoid(), value: action.payload });
      return { ...state };
    }

    case 'todo/remove': {
      const updated = state.list.filter((t) => t.id !== action.payload);
      return { list: updated };
    }

    default:
      return state;
  }
};

export const useTodoReducer = () => useReducer(reducer, initialState);

export interface Todo {
  id: string;
  value: string;
}
