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
    if (historyIndex === -1) {
        return [];
    }
    else return historyArray[historyIndex].history;

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
                History of changes of {surname + " " + name + " " + patronymic}
            </div>
            <div ref={ref} className={styles.textFieldContainer}>

                {getHistory(name, surname, patronymic).map((elem) => (
                    <div className={styles.textField}>
                        <p>Date: {elem.date ? elem.date : `${new Date().toISOString().slice(0, 10)}`}</p>
                        <p>Bank bought: {elem.buyingValue ? elem.buyingValue + " " + elem.buyingCurrency : "100 RUB"}</p>
                        <p>Bank sold: {elem.value ? elem.value + " " + elem.sellingCurrency : "100 USD"}</p>

                    </div>
                ))}
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