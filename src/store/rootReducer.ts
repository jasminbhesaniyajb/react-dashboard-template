import { combineReducers } from 'redux';
import {userData} from './reducer';

const rootReducer = combineReducers({
  users: userData
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
