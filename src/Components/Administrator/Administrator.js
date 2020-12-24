import React, {
    useState, useEffect, useRef,
} from 'react';
import { FormControl, RadioGroup, FormControlLabel, InputLabel, Input, Button, Select } from '@material-ui/core';
import styles from './styles.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, TextField } from '@material-ui/core';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { AttachMoney, AccountBalance, History, DateRange, Assessment } from '@material-ui/icons';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        maxWidth: 1100,
        height: 800,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));


export function Administrator({ openHistory, setOpenHistory }) {
    let maxValue = useSelector(state => state.maxValue);
    let today = useSelector(state => state.today);
    let systemRates = useSelector(state => state.systemRates);
    let systemRatesArr = Object.getOwnPropertyNames(systemRates);

    const dispatch = useDispatch();

    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const [currencyValue, setCurrencyValue] = useState(maxValue);
    const handleChangeCurrencyValue = (event) => {
        if (event.target.value < 0) { setCurrencyValue(0); return }
        else setCurrencyValue(event.target.value);
    };
    const changeMaxValue = () => {
        console.log(parseInt(currencyValue));
        dispatch({
            type: 'CHANGE_MAX',
            maxValue: parseInt(currencyValue),
        });
        handleClose();
    };


    const [openDate, setOpenDate] = useState(false);
    const handleOpenDate = () => {
        setOpenDate(true);
    };
    const handleCloseDate = () => {
        setOpenDate(false);
    };
    const [dateValue, setDateValue] = useState(today);
    const handleChangeDateValue = (event) => {
        setDateValue(event.target.value);
    };
    const changeDate = () => {
        console.log(dateValue);
        dispatch({
            type: 'CHANGE_DATE',
            today: dateValue,
        });
        handleCloseDate();
    };

    const [openRates, setOpenRates] = useState(false);
    const handleOpenRates = () => {
        setOpenRates(true);
    };
    const handleCloseRates = () => {
        setOpenRates(false);
    };
    const [ratesValue, setRatesValue] = useState(systemRatesArr[0]);

    const [rates, setRates] = useState(systemRates[systemRatesArr[0]]);
    const handleChangeRatesValue = (event) => {
        setRatesValue(event.target.value);


    };
    useEffect(() => {
        setRates(systemRates[ratesValue]);
    }, [ratesValue]);
    const handleChangeRates = (event) => {
        setRates(event.target.value);
    };
    const changeRates = () => {
        systemRates[ratesValue] = parseFloat(rates);
        console.log(systemRates);
        dispatch({
            type: 'CHANGE_RATES',
            systemRates: systemRates,
        });
        handleCloseRates();
    };

    const body = (

        <div style={modalStyle} className={classes.paper}>
            <div className={styles.dropdownContainer}>
                <TextField
                    id="outlined-number"
                    label="Max value"
                    type="number"
                    min="0"
                    onChange={handleChangeCurrencyValue}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    value={currencyValue}
                />
                <Button
                    variant="contained"
                    size="large"
                    className={styles.button}
                    startIcon={<AttachMoney />}
                    style={{ backgroundColor: "rgb(44, 76, 255)", color: "white", marginTop: "50px" }}
                    onClick={changeMaxValue}
                >
                    Change max value
      </Button>
            </div>

        </div>
    );

    const bodyDate = (

        <div style={modalStyle} className={classes.paper}>
            <div className={styles.dropdownContainer}>
                <form className={classes.container} noValidate>
                    <TextField
                        id="date"
                        label="Pick a date"
                        type="date"
                        value={dateValue}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleChangeDateValue}
                    />
                </form>
                <Button
                    variant="contained"
                    size="large"
                    className={styles.button}
                    startIcon={<AttachMoney />}
                    style={{ backgroundColor: "rgb(44, 76, 255)", color: "white", marginTop: "50px" }}
                    onClick={changeDate}
                >
                    Change today's date
      </Button>
            </div>

        </div>
    );

    const bodyRates = (

        <div style={modalStyle} className={classes.paper}>
            <div className={styles.dropdownContainer}>
                <form className={classes.container} noValidate>
                    <div className={styles.selectContainer}>
                        <Select
                            inputProps={{ id: 'select-buying', className: styles.select }}
                            native
                            value={ratesValue}
                            defaultValue={systemRatesArr[0]}
                            onChange={handleChangeRatesValue}
                        >
                            {systemRatesArr.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </Select>
                        <TextField
                            id="outlined-number"
                            label="Currency rate"
                            type="number"
                            min="0"
                            onChange={handleChangeRates}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            value={rates}
                        />
                    </div>
                </form>
                <Button
                    variant="contained"
                    size="large"
                    className={styles.button}
                    startIcon={<Assessment />}
                    style={{ backgroundColor: "rgb(44, 76, 255)", color: "white", marginTop: "50px" }}
                    onClick={changeRates}
                >
                    Change system rates
      </Button>
            </div>

        </div>
    );

    return (
        <div className={styles.buttonContainer}>
            <div className={styles.buttonContainerInner}>
                <Button
                    variant="contained"
                    size="large"
                    className={styles.button}
                    startIcon={<History />}
                    style={{ backgroundColor: "rgb(44, 76, 255)", color: "white" }}
                    onClick={() => { setOpenHistory(true) }}
                >
                    Show history
      </Button>

                <Button
                    variant="contained"
                    size="large"
                    className={styles.button}
                    startIcon={<AttachMoney />}
                    style={{ backgroundColor: "rgb(44, 76, 255)", color: "white" }}
                    onClick={handleOpen}
                >
                    Change max value
      </Button>
                <Button
                    variant="contained"
                    size="large"
                    className={styles.button}
                    startIcon={<DateRange />}
                    style={{ backgroundColor: "rgb(44, 76, 255)", color: "white" }}
                    onClick={handleOpenDate}
                >
                    Change today's date
      </Button>
                <Button
                    variant="contained"
                    size="large"
                    className={styles.button}
                    startIcon={<Assessment />}
                    style={{ backgroundColor: "rgb(44, 76, 255)", color: "white" }}
                    onClick={handleOpenRates}
                >
                    Change system rates
      </Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            <Modal
                open={openDate}
                onClose={handleCloseDate}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {bodyDate}
            </Modal>
            <Modal
                open={openRates}
                onClose={handleCloseRates}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {bodyRates}
            </Modal>
        </div >
    );
}