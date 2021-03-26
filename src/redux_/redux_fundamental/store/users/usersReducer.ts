import { Reducer } from 'redux';
import { UsersAction } from './usersActions';

type UsersState = {
  status: Status;
  list: User[];
};
const initialState: UsersState = {
  status: 'idle',
  list: [],
};

const usersReducer: Reducer<UsersState, UsersAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'users/fetch/pending':
      return { ...state, status: 'pending' };

    case 'users/fetch/rejected':
      return { status: 'failed', list: [] };

    case 'users/fetch/fullfilled':
      return { status: 'success', list: action.payload };

    default:
      return state;
  }
};

export default usersReducer;

type Status = 'idle' | 'pending' | 'success' | 'failed';

export interface FetchedUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
}
