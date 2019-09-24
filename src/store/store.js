import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import createSagaMiddleware from 'redux-saga';

import logger from 'redux-logger';
import { collectionsLoading } from './sagas';

import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(collectionsLoading);

export const persistor = persistStore(store);

export default { store, persistor }