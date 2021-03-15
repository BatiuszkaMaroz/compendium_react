/* eslint-disable @typescript-eslint/no-non-null-assertion */
import react from 'react';

export enum AT {
  'ADD',
  'REMOVE',
}

export type State = {
  todos: string[];
};
export type Action = {
  type: AT; //
  idx?: number;
  todo?: string;
};
export type Dispatch = react.Dispatch<Action>;

export const defaultState: State = {
  todos: [],
};

export const reducer: react.Reducer<State, Action> = (
  state = defaultState,
  { type, idx, todo },
) => {
  switch (type) {
    case AT.ADD: {
      const updated = state.todos;
      updated.push(todo!);

      return { todos: updated };
    }

    case AT.REMOVE: {
      const updated = state.todos;
      updated.splice(idx!, 1);

      return { todos: updated };
    }

    default:
      return state;
  }
};
