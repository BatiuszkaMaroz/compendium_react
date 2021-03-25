import React from 'react';

export enum ActionTypes {
  ADD = 'ADD',
  REMOVE = 'REMOVE',
}

export type State = {
  todos: string[];
};
export type Action = {
  type: ActionTypes; //
  idx?: number;
  todo?: string;
};
export type Dispatch = React.Dispatch<Action>;

export const defaultState: State = {
  todos: [],
};

export const reducer: React.Reducer<State, Action> = (
  state = defaultState,
  { type, idx, todo },
) => {
  switch (type) {
    case ActionTypes.ADD: {
      const updated = state.todos;
      if (todo) {
        updated.push(todo);
      }

      return { todos: updated };
    }

    case ActionTypes.REMOVE: {
      const updated = state.todos;
      if (idx) {
        updated.splice(idx, 1);
      }

      return { todos: updated };
    }

    default:
      return state;
  }
};
