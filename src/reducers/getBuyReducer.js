const initialExchange = [];

const getBuyReducer = (state = initialExchange, action) => {
    if(action.type === "GET_BUY_DATA") {
        return action.buy;
    }
    return state;
}

export default getBuyReducer;