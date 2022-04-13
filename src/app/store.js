import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import myReducer from './apis/covid';
import detailsReducer from './apis/details';

const rootReducer = combineReducers({
  myred: myReducer,
  details: detailsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

export default store;
