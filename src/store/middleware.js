import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const composeEnhancers = compose;

export const middleware = composeEnhancers(
  applyMiddleware(thunk)
);
