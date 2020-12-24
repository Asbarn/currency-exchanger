import React, {
    useState, useEffect, useRef,
} from 'react';
import { FormControl, RadioGroup, FormControlLabel, InputLabel, Input, Button, Select, TextField } from '@material-ui/core';
import styles from './styles.module.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useSelector, useDispatch, useStore } from 'react-redux'
import { AttachMoney, AccountBalance, History } from '@material-ui/icons';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: "auto",
        minWidth: "400px",
        maxWidth: "500px",
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 20,
    },
    noLabel: {
        marginTop: theme.spacing(30),
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const MenuPropsSelling = {
    PaperProps: {
        style: {
            maxHeight: `${10 * 5.5 + 12}`,
            width: "250",
        },
    },
    id: 'select-selling',

};
const MenuPropsBuying = {
    PaperProps: {
        style: {
            maxHeight: `${10 * 5.5 + 12}`,
            width: "250",
        },
    },
    id: 'select-buying',

};
const MenuPropsCurrency = {
    InputProps: {
        style: {
            maxHeight: `${10 * 5.5 + 12}`,
            width: "500",
        },
    },
    id: 'select-currency',

};
const currencies = ["CAD", "HKD", "ISK", "PHP", "DKK", "HUF", "CZK", "GBP", "RON", "SEK", "IDR", "INR", "BRL", "RUB", "HRK", "JPY", "THB", "CHF", "EUR", "MYR", "BGN", "TRY", "CNY", "NOK", "NZD", "ZAR", "USD", "MXN", "SGD", "AUD", "ILS", "KRW", "PLN"]
    .sort();

export function Exchanger({ openHistory, setOpenHistory, openCheckout, setOpenCheckout }) {
    let rates = useSelector(state => state.rates);
    let maxValue = useSelector(state => state.maxValue);
    let today = useSelector(state => state.today);
    let systemRates = useSelector(state => state.systemRates);
    let name = useSelector(state => state.name);
    let surname = useSelector(state => state.surname);
    let patronymic = useSelector(state => state.patronymic);
    const dispatch = useDispatch();
    const classes = useStyles();

    const [sellingCurrency, setSellingCurrency] = useState(currencies[0]);
    const handleChangeSell = (event) => {
        setSellingCurrency(event.target.value);
        dispatch({ type: 'FETCH', query: event.target.value });


    };

    const [buyingCurrency, setBuyingCurrency] = useState(currencies[0]);
    const handleChangeBuy = (event) => {
        setBuyingCurrency(event.target.value);


    };

    const [currency, setCurrency] = useState(1);
    const handleChangeCurrency = (event) => {
        setCurrency(event.target.value);
        if (!event) {
            setCurrency(rates[buyingCurrency]);
        }
    };

    const [currencyValue, setCurrencyValue] = useState(0);
    const handleChangeCurrencyValue = (event) => {
        if (event.target.value < 0) { setCurrencyValue(0); return }

        if (event.target.value > maxValue) { setCurrencyValue(maxValue); return }
        else setCurrencyValue(event.target.value);
    };


    const [info, setInfo] = useState(0);
    const refInfo = useRef(null);
    useEffect(() => {
        setInfo(refInfo.current);

    }, [refInfo.current]);
    useEffect(() => {
        setCurrency(refInfo.current.childNodes[0].value);
    });


    const handleExchange = (event) => {
        dispatch({
            type: "FETCH_MORE",
            buyingCurrency: buyingCurrency,
            sellingCurrency: sellingCurrency,
            value: currencyValue,
            buyingValue: (currencyValue * currency).toFixed(2),
            currency: currency,
            name: name,
            surname: surname,
            patronymic: patronymic
        });

        setOpenCheckout(true)
    };


    return (
        <div className={styles.container}>
            <form className={classes.formControl}>
                <div className={styles.dropdownContainer}>
                    <InputLabel shrink htmlFor="select-selling" >
                        Выберите продаваемую валюту:
        </InputLabel>
                    <Select
                        inputProps={{ id: 'select-selling', className: styles.select }}
                        native
                        value={sellingCurrency}
                        defaultValue={currencies[0]}
                        onChange={handleChangeSell}
                    >
                        {currencies.map((name) => (
                            <option key={name} value={name}>
                                {name}
                            </option>
                        ))}
                    </Select>
                </div>
                <div className={styles.dropdownContainer}>
                    <InputLabel shrink htmlFor="select-buying">
                        Выберите покупаемую валюту:
        </InputLabel>
                    <Select
                        inputProps={{ id: 'select-buying', className: styles.select }}
                        native
                        value={buyingCurrency}
                        defaultValue={currencies[0]}
                        onChange={handleChangeBuy}
                    >
                        {currencies.map((name) => (
                            <option key={name} value={name}>
                                {name}
                            </option>
                        ))}
                    </Select>
                </div>
                <div className={styles.dropdownContainer}>
                    <InputLabel shrink htmlFor="select-currency">
                        Выберите курс:
        </InputLabel>
                    <Select
                        inputProps={{ id: 'select-currency', className: styles.select }}
                        native
                        value={currency}
                        defaultValue={rates[buyingCurrency]}
                        ref={refInfo}
                        onChange={(event) => {
                            event.preventDefault();
                            //setCurrency(rates[buyingCurrency]);
                            setCurrency(event.target.value);
                        }}                    >

                        <option checked value={rates[buyingCurrency]}>
                            {rates[buyingCurrency]} (курс банка)
                        </option>
                        <option value={systemRates[buyingCurrency]}>
                            {systemRates[buyingCurrency]} (курс системы)
                        </option>

                    </Select>
                </div>
                <div className={styles.dropdownContainer}>
                    <TextField
                        id="standard-number"
                        label="How much do you want to trade?"
                        type="number"
                        min="0"
                        onChange={handleChangeCurrencyValue}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value={currencyValue}
                    />
                </div>
            </form>
            <div className={styles.screen}>
                <p>You are selling {sellingCurrency} currency</p>
                <p>You are buying {buyingCurrency} currency</p>
                <p>Currently, you are selling to bank {currencyValue} {sellingCurrency} </p>
                <p>You will receive {(currencyValue * currency).toFixed(2)} {buyingCurrency} </p>
                <Button
                    variant="contained"
                    size="large"
                    className={classes.button}
                    startIcon={<AttachMoney />}
                    style={{ backgroundColor: "rgb(44, 76, 255)", color: "white" }}
                    onClick={handleExchange}
                >
                    Exchange
      </Button>
                <Button
                    variant="contained"
                    size="large"
                    className={classes.button}
                    startIcon={<History />}
                    style={{ backgroundColor: "rgb(44, 76, 255)", color: "white" }}
                    onClick={() => { setOpenHistory(true) }}
                >
                    Show history
      </Button>
            </div>
        </div>
    );
}