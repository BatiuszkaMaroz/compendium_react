import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { FetchedUser, User } from './usersReducer';

const fetchUsersPending = () => <const>{ type: 'users/fetch/pending' };
const fetchUsersFullfilled = (users: User[]) =>
  <const>{
    type: 'users/fetch/fullfilled',
    payload: users,
  };
const fetchUsersRejected = () => <const>{ type: 'users/fetch/rejected' };
export const fetchUsers = (): ThunkAction<
  void,
  RootState,
  unknown,
  any
> => async (dispatch) => {
  dispatch(fetchUsersPending());

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: FetchedUser[] = await res.json();

    const formatted: User[] = users.map((u) => ({ ...u, id: '' + u.id }));

    dispatch(fetchUsersFullfilled(formatted));
  } catch (err) {
    console.error(err);
    dispatch(fetchUsersRejected());
  }
};

export type UsersAction = ReturnType<
  | typeof fetchUsersPending
  | typeof fetchUsersFullfilled
  | typeof fetchUsersRejected
>;
