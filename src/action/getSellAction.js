import axios from 'axios';

const getSellAction = () => {
    return (dispatch) => {
        axios.get("https://api.exchangeratesapi.io/latest?base=IDR&symbols=CAD,IDR,JPY,CHF,EUR,USD")
        .then((response) => {
            const spy = response.data.rates
            Object.keys(spy).map((key) => (
                spy[key] = (spy[key] * 98) / 100
            ))
            
            return dispatch ({
                type : "GET_SELL_DATA",
                sell : response.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }
}

export default getSellAction;