import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { thunk } from 'redux-thunk';

import rootReducer from './reducers';

const configureStore = initialState => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
};

export default configureStore;
