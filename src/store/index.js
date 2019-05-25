import { createStore } from 'redux';
import { rootReducer } from './rootReducer';
import { middleware } from './middleware';

export const store = createStore(rootReducer, middleware);
