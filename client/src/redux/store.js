import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { productListReducer } from './products/product.reducers';

const reducer = combineReducers({
  productList: productListReducer,
});

const INITIAL_STATE = {};

const middlewares = [thunk];

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
