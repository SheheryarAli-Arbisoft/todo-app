import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './src/reducers';

const initialState = {};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middlewares))
);
