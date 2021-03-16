import { AUTH, ITEMS } from './actionTypes';
import { AuthAction } from '../reducers/auth';
import { ItemsAction } from '../reducers/items';
import { nanoid } from 'nanoid';

export const login = (username: string): AuthAction => ({
  type: AUTH.LOGIN,
  username,
});

export const logout = (): AuthAction => ({
  type: AUTH.LOGOUT,
});

export const addItem = (value: string): ItemsAction => ({
  type: ITEMS.ADD,
  item: { id: nanoid(), value },
});

export const removeItem = (id: string): ItemsAction => ({
  type: ITEMS.REMOVE,
  id,
});
