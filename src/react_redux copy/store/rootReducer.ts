import { combineReducers } from 'redux';
import auth from './reducers/auth';
import items from './reducers/items';

const butty = combineReducers({ items });
const rootReducer = combineReducers({ auth, butty });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
