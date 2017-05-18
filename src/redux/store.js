import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import account from 'redux/reducers/account';

const middleWares = [];

if (__DEV__) {
  middleWares.push(logger);
}

const Reducer = combineReducers({ account });



const Store = createStore(
  Reducer,
  applyMiddleware(...middleWares),
);

export default Store;
