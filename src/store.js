import { createStore, compose, applyMiddleware } from 'redux'
const FETCH = "FETCH", FETCH_CHANGE = "FETCH_CHANGE", FETCH_MORE = "FETCH_MORE", SUCCESS = "SUCCESS", FAILURE = "FAILURE", ADD_DATA = "ADD_DATA", INIT = "INIT", FETCH_INIT = "FETCH_INIT";

const videoState = {
    history: [],
    sellCurrency: "",
    buyCurrency: "",
    rates: [],
    systemRates: {
        AUD: 1.2345645648,
        BGN: 1.1954037039,
        BRL: 3.8528818532,
        CAD: 0.9591100788,
        CHF: 0.6620011002,
        CNY: 4.8632112952,
        CZK: 16.1481572031,
        DKK: 4.5497830206,
        EUR: 0.6112095838,
        GBP: 0.5522767557,
        HKD: 5.7568608276,
        HRK: 4.6127987287,
        HUF: 218.5868834423,
        IDR: 10501.5035755761,
        ILS: 2.4289468859,
        INR: 54.8310005501,
        ISK: 93.5150663162,
        JPY: 77.3119002506,
        KRW: 810.4088992115,
        MXN: 14.7536214168,
        MYR: 3.0226147546,
        NOK: 6.5442210134,
        NZD: 1.0497524601,
        PHP: 35.632907524,
        PLN: 2.7341238311,
        RON: 2.9784243017,
        RUB: 55.5247845486,
        SEK: 6.2969867368,
        SGD: 0.9918709125,
        THB: 22.4069433409,
        TRY: 5.8077745859,
        USD: 0.7426807652,
        ZAR: 11.3364097549
    },
    maxValue: 1000,
    name: "",
    surname: "",
    patronymic: ""
};

function videoReducer(state = videoState, action) {
    switch (action.type) {
        case SUCCESS:

            return {
                ...state,
                rates: action.rates,
                sellCurrency: action.sellCurrency,
                buyCurrency: action.buyCurrency,
            };
        case FAILURE:
            alert("ERROR IN FETCHING");
            return {
                ...state,
            };
        case INIT:
            return {
                ...state,
                name: action.name,
                surname: action.surname,
                patronymic: action.patronymic
            };
        case ADD_DATA:
            return {
                ...state,
                history: [...state.history, ...action.history],
            };;
        default: return state;
    }

}
const myMiddleware = store => next => action => {
    try {
        if (action.type == FETCH) {
            fetch(`https://api.exchangeratesapi.io/latest?base=${action.query}`).then(response => response.json()).then(data => {
                return data

            })
                .then((el) => {
                    store.dispatch({
                        type: SUCCESS, rates: el.rates, sellCurrency: el.base,
                    })
                }
                )
        }
    }
    catch (err) {
        store.dispatch({ type: FAILURE })
    }
    next(action);
}
const myMiddlewareTrade = store => next => action => {

    if (action.type == FETCH_MORE) {
        store.dispatch({
            type: ADD_DATA,
            history: [{
                date: action.date,
                sellingCurrency: action.sellingCurrency,
                buyingCurrency: action.buyingCurrency,
                value: action.value,
                buyingValue: action.buyingValue,
                currency: action.currency,
                // name: action.name,
                // surname: action.surname,
                // patronymic: action.patronymic
            }]
        })
        let historyArray = JSON.parse(localStorage.getItem("history"));
        if (!historyArray) historyArray = [];
        const historyIndex = historyArray.findIndex((elem) => { return (elem.name === action.name && elem.surname === action.surname && elem.patronymic === action.patronymic) })
        if (historyIndex === -1) {
            historyArray.push({
                name: action.name,
                surname: action.surname,
                patronymic: action.patronymic,
                history: [{
                    date: action.date,
                    sellingCurrency: action.sellingCurrency,
                    buyingCurrency: action.buyingCurrency,
                    value: action.value,
                    buyingValue: action.buyingValue,
                    currency: action.currency,
                }]
            });
        }
        else historyArray[historyIndex].history.push({
            date: action.date,
            sellingCurrency: action.sellingCurrency,
            buyingCurrency: action.buyingCurrency,
            value: action.value,
            buyingValue: action.buyingValue,
            currency: action.currency,
        });
        console.log(historyArray);
        localStorage.setItem("history", JSON.stringify(historyArray));
    }

    next(action);
}
const myMiddlewareInit = store => next => action => {

    if (action.type == FETCH_INIT) {
        store.dispatch({
            type: INIT,
            name: action.name,
            surname: action.surname,
            patronymic: action.patronymic
        })


    }

    next(action);
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(videoReducer, composeEnhancer(
    applyMiddleware(myMiddleware, myMiddlewareTrade, myMiddlewareInit)
))


//key1: xC34KddrtJCs85Jhzt6flpuqjm8i0saenuO2 
//https://currencyapi.net/api/v1/currencies?key=xC34KddrtJCs85Jhzt6flpuqjm8i0saenuO2&base=EUR


//ley2:e70ac732c3ed679c762c47a68a085a41
//http://data.fixer.io/api/

//https://open.exchangerate-api.com/v6/latest

//https://api.ratesapi.io/api/latest?base=BYR

//https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=dda8dc11b03474b5734f
//key: dda8dc11b03474b5734f

//https://www.nbrb.by/api/exrates/rates?periodicity=0