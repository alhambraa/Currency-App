//Initial State
const initialExchange = [];

const getExchangeReducer = (state = initialExchange, action) => {
  if (action.type === 'GET_EXCHANGE_DATA') {
    return action.exchange;
  }
  return state;
}

export default getExchangeReducer;