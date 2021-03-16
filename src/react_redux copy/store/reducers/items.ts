/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { Action, Reducer } from 'redux';
import { ITEMS } from '../actions/actionTypes';

export type ItemsAction = Action<ITEMS> & {
  id?: string;
  item?: { id: string; value: string };
};
type ItemsState = {
  items: { id: string; value: string }[];
};

const initialState: ItemsState = {
  items: [],
};

const itemsReducer: Reducer<ItemsState, ItemsAction> = (
  state = initialState,
  { type, item, id },
) => {
  switch (type) {
    case ITEMS.ADD:
      return { items: [...state.items, item!] };

    case ITEMS.REMOVE:
      return { items: state.items.filter((i) => i.id !== id) };

    default:
      return state;
  }
};

export default itemsReducer;
