// Import createStore from redux
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers'

const middlewares = applyMiddleware(logger, ReduxThunk);
const store = createStore(rootReducer, middlewares);

export default store;