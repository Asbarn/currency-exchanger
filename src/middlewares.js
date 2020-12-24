import { dateDiffInDays } from './helper'
const FETCH = "FETCH", FETCH_CHANGE = "FETCH_CHANGE", FETCH_MORE = "FETCH_MORE",
    SUCCESS = "SUCCESS", FAILURE = "FAILURE", ADD_DATA = "ADD_DATA",
    INIT = "INIT", FETCH_INIT = "FETCH_INIT", CHANGE_MAX = "CHANGE_MAX", FETCH_CHANGE_MAX = "FETCH_CHANGE_MAX",
    CHANGE_DATE = "CHANGE_DATE", FETCH_CHANGE_DATE = "FETCH_CHANGE_DATE",
    CHANGE_RATES="CHANGE_RATES", FETCH_CHANGE_RATES="FETCH_CHANGE_RATES";
    
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
                    date: store.getState().today,
                    sellingCurrency: action.sellingCurrency,
                    buyingCurrency: action.buyingCurrency,
                    value: action.value,
                    buyingValue: action.buyingValue,
                    currency: action.currency,
                }]
            });
        }
        else historyArray[historyIndex].history.push({
            date: store.getState().today,
            sellingCurrency: action.sellingCurrency,
            buyingCurrency: action.buyingCurrency,
            value: action.value,
            buyingValue: action.buyingValue,
            currency: action.currency,
        });
        localStorage.setItem("history", JSON.stringify(historyArray));
    }

    next(action);
}
const myMiddlewareInit = store => next => action => {
    if (action.type == FETCH_INIT) {
        let history;
        let value = 0;
        let isAdmin = false;
        const maxValue = (JSON.parse(localStorage.getItem("maxValue")) == undefined || JSON.parse(localStorage.getItem("maxValue")) == null) ? 1000 :
            JSON.parse(localStorage.getItem("maxValue"));
        let historyArray = JSON.parse(localStorage.getItem("history"));
        if (!historyArray) historyArray = [];
        const historyIndex = historyArray.findIndex((elem) => { return (elem.name === action.name && elem.surname === action.surname && elem.patronymic === action.patronymic) })
        if (historyIndex === -1) {
            history = [];
        }
        else history = historyArray[historyIndex].history
        for (var i = history.length - 1; i >= 0; i--) {
            if (dateDiffInDays(new Date(history[i].date), new Date(store.getState().today)) <= 1) {
                value += Number.parseInt(history[i].value);
            }
        }

        if (action.name.trim().toLowerCase() === 'admin'
            && action.surname.trim().toLowerCase() === 'admin'
            && action.patronymic.trim().toLowerCase() === 'admin') {
            isAdmin = true;
        }

        store.dispatch({
            type: INIT,
            name: action.name,
            surname: action.surname,
            patronymic: action.patronymic,
            maxValue: maxValue - value,
            isAdmin: isAdmin
        })
        console.log(store.getState());

    }

    next(action);
}
const myMiddlewareChangeMax = store => next => action => {
    if (action.type == CHANGE_MAX) {
        localStorage.setItem("maxValue", JSON.stringify(action.maxValue))
        store.dispatch({
            type: FETCH_CHANGE_MAX,
            maxValue: action.maxValue
        })
        console.log(store.getState());
    }

    next(action);
}
const myMiddlewareChangeDate = store => next => action => {
    console.log(action.today);
    if (action.type == CHANGE_DATE) {
        console.log(action.today);
        sessionStorage.setItem("today", JSON.stringify(action.today))
        store.dispatch({
            type: FETCH_CHANGE_DATE,
            maxValue: action.today
        })
        console.log(store.getState());
    }

    next(action);
}
const myMiddlewareChangeRates = store => next => action => {
    console.log(action.today);
    if (action.type == CHANGE_RATES) {
        localStorage.setItem("systemRates", JSON.stringify(action.systemRates))
        store.dispatch({
            type: FETCH_CHANGE_RATES,
            systemRates: action.systemRates
        })
        console.log(store.getState());
    }

    next(action);
}

export {myMiddleware, myMiddlewareTrade, myMiddlewareInit, myMiddlewareChangeMax, myMiddlewareChangeDate, myMiddlewareChangeRates};