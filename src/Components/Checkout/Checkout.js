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

export function Checkout({ openCheckout, setOpenCheckout }) {
    let checkoutInfo = useSelector(state => state.history[state.history.length - 1]);
    let name = useSelector(state => state.name);
    let surname = useSelector(state => state.surname);
    let patronymic = useSelector(state => state.patronymic);
    const dispatch = useDispatch();
    const classes = useStyles(); const classesLabel = useStylesLabel();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(openCheckout);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpenCheckout(false);
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
            <div ref={ref} className={styles.textFieldContainer}>
                <p>Check</p>
                <p>Date: {checkoutInfo ? checkoutInfo.date : `${new Date().toISOString().slice(0, 10)}`}</p>
                <p>Client: {(name && patronymic && surname) ? surname + " " + name + " " + patronymic : "User"}</p>
                <p>Bank bought: {checkoutInfo ? checkoutInfo.buyingValue + " " + checkoutInfo.buyingCurrency : "100 RUB"}</p>
                <p>Bank sold: {checkoutInfo ? checkoutInfo.value + " " + checkoutInfo.sellingCurrency : "100 USD"}</p>
            </div>
            <div className={styles.buttonContainer}>
                <Button className={styles.saveButton} onClick={() => {
                    const element = document.createElement("a");
                    const file = new Blob([
                        ` Check\n`+
                        ` Date:${new Date().toISOString().slice(0, 10)}\n`+
                    ` Client: ${surname} ${name} ${patronymic}\n`+
                    ` Bank bought:: ${checkoutInfo.buyingValue} ${checkoutInfo.buyingCurrency}\n`+
                    ` Bank sold: ${checkoutInfo.value} ${checkoutInfo.sellingCurrency}\n`
                    ], { type: 'text/plain' });
                    element.href = URL.createObjectURL(file);
                    element.download = "myFile.txt";
                    document.body.appendChild(element); 
                    element.click();
                    handleClose();
                    document.location.reload();
                }}>Save</Button>
            </div>
        </div>
    );
    return (
        <div>
            <Modal
                disableBackdropClick
                disableEscapeKeyDown
                open={openCheckout}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}