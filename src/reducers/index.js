// Import combineReducer untuk menggabungkan semua file reducer
import {combineReducers} from 'redux';

// Import all reducer
import getExchangeReducer from './getExchangeReducer';
import getBuyReducer from './getBuyReducer';
import getSellReducer from './getSellReducer';

const rootReducer = combineReducers({
  exchange: getExchangeReducer,
  buy : getBuyReducer,
  sell : getSellReducer
})

export default rootReducer;
