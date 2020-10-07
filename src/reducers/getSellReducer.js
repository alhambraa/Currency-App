const initialExchange = [];

const getSellReducer = (state = initialExchange, action) => {
    if(action.type === "GET_SELL_DATA") {
        return action.sell;
    }
    return state;
}

export default getSellReducer;