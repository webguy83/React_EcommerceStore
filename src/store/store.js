import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import logger from 'redux-logger';

const middlewares = [logger];

export default createStore(rootReducer, applyMiddleware(...middlewares));