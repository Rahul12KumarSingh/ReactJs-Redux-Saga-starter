import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import productSaga from './productSaga';
import createSagaMiddleware from 'redux-saga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the store and apply the middleware
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

// Run the saga
sagaMiddleware.run(productSaga);

export default store;
