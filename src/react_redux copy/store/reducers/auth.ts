import { Action, Reducer } from 'redux';
import { AUTH } from '../actions/actionTypes';

export type AuthAction = Action<AUTH> & {
  username?: string;
};
type AuthState = {
  username?: string;
};

const initialState: AuthState = {};

const authReducer: Reducer<AuthState, AuthAction> = (
  state = initialState,
  { type, username },
) => {
  switch (type) {
    case AUTH.LOGIN:
      return { ...state, username };

    case AUTH.LOGOUT:
      return { ...state, username: undefined };

    default:
      return state;
  }
};

export default authReducer;
