import { DeepPartial } from '@reduxjs/toolkit';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (!serializedState) {
      return;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return;
  }
};

export const saveState = <State>(state: DeepPartial<State>) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    return;
  }
};
