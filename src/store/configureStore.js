import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'remote-redux-devtools';

const logger = createLogger({
});
const configureStore = (initialState) => {
  return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunk, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
  );
}

export default configureStore;
