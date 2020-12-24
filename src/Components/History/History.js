import React, {
    useState, useEffect, useRef,
} from 'react';
import { FormControl, RadioGroup, FormControlLabel, InputLabel, Input, Button } from '@material-ui/core';
import styles from './styles.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useSelector, useDispatch, useStore } from 'react-redux'

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

function getHistory(name, surname, patronymic) {
    let historyArray = JSON.parse(localStorage.getItem("history"));
    if (!historyArray) historyArray = [];
    const historyIndex = historyArray.findIndex((elem) => { return (elem.name === name && elem.surname === surname && elem.patronymic === patronymic) })
    if (name.trim().toLowerCase() === 'admin'
        && surname.trim().toLowerCase() === 'admin'
        && patronymic.trim().toLowerCase() === 'admin') {
        let res = [];

        historyArray.forEach((elem) => res.push({
            name: elem.name,
            surname: elem.surname,
            patronymic: elem.patronymic,
            history: elem.history
        }));
        console.log(res);
        return res;
    }
    if (historyIndex === -1) {
        return [{
            name: name,
            surname: surname,
            patronymic: patronymic,
            history: []
        }];
    }
    return [{
        name: name,
        surname: surname,
        patronymic: patronymic,
        history: historyArray[historyIndex].history
    }];


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
const useStylesLabel = makeStyles({
    root: {
        position: 'relative',
        color: "black!important",
        fontSize: `20px`,
        transform: "none",
    },
});

export function History({ openHistory, setOpenHistory }) {
    let name = useSelector(state => state.name);
    let surname = useSelector(state => state.surname);
    let patronymic = useSelector(state => state.patronymic);
    const classes = useStyles(); const classesLabel = useStylesLabel();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(openHistory);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpenHistory(false);
    };

    const [formGroup, setFormGroup] = useState(0);
    const refForm = useRef(null);
    useEffect(() => {
        setFormGroup(refForm.current);
    }, [refForm.current]);

    const [InputGroup, setInputGroup] = useState(0);
    const ref = useRef(null);
    useEffect(() => {
        setInputGroup(ref.current);
    }, [ref.current]);
    const body = (

        <div style={modalStyle} className={classes.paper}>
            <div className={styles.buttonContainer}>
                History of changes 
            </div>
            <div ref={ref} className={styles.textFieldContainer}>

                {getHistory(name, surname, patronymic).map((elem) => (
                    elem.history.map((el) => (
                        <div className={styles.textField}>
                            <p>Client: {(elem.name && elem.patronymic && elem.surname) ? elem.surname + " " + elem.name + " " + elem.patronymic : "User"}</p>
                            <p>Date: {el.date ? el.date : `${new Date().toISOString().slice(0, 10)}`}</p>
                            <p>Bank sold: {el.buyingValue ? el.buyingValue + " " + el.buyingCurrency : "100 RUB"}</p>
                            <p>Bank bought: {el.value ? el.value + " " + el.sellingCurrency : "100 USD"}</p>

                        </div>
                    ))))}
            </div>

        </div>
    );
    return (
        <div>
            <Modal
                open={openHistory}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}