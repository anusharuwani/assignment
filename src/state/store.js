import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storageSession from 'redux-persist/lib/storage/session';
import { routerMiddleware } from 'connected-react-router';
import rootSaga from './sagas';
import combineReducers from './reducers';
import { history } from '../routing/AppRouter';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['auth'],
};
const persistedReducer = persistReducer(persistConfig, combineReducers(history));

const middlewares = [];

middlewares.push(sagaMiddleware);
middlewares.push(routerMiddleware(history));
const store = composeWithDevTools(applyMiddleware(...middlewares))(createStore)(persistedReducer);

const persistor = persistStore(store, null, () => {});

sagaMiddleware.run(rootSaga);

export { store, persistor };
