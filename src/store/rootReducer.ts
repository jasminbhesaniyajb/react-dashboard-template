import { combineReducers } from 'redux';
import { userData } from './reducer';
import { productData } from './reducer/productReducer';
const rootReducer = combineReducers({
  users: userData,
  products: productData
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
