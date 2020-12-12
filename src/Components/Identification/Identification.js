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
        width: 700,
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

export function Identification() { 
    const dispatch = useDispatch();

    const classes = useStyles(); const classesLabel = useStylesLabel();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(true);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
            <form ref={refForm} id="my-form-id" action="/" method="POST" className={styles.modal}
                onSubmit={(e) => {
                    if (e != undefined) {
                        e.preventDefault();
                    }

                    dispatch({ type: 'FETCH', query: "AUD" });
                    dispatch({
                        type: 'INIT',
                        name: `${ref.current.childNodes[1].childNodes[1].childNodes[0].value}`,
                        surname: `${ref.current.childNodes[0].childNodes[1].childNodes[0].value}`,
                        patronymic: `${ref.current.childNodes[2].childNodes[1].childNodes[0].value}`
                    });                                      
                    handleClose();
                }}
            >

                <div ref={ref} className={styles.textFieldContainer}>
                    <div className={styles.MuiInputLabel}>
                        <InputLabel classes={classesLabel} required shrink={false} htmlFor="my-input-1">Введите фамилию:</InputLabel>
                        <Input
                            name="my-input-1" className={styles.textField} required id="my-input-1" />

                    </div>
                    <div className={styles.MuiInputLabel}>
                        <InputLabel classes={classesLabel} required shrink={false} htmlFor="my-input-2">Введите имя:</InputLabel>
                        <Input
                            name="my-input-2" className={styles.textField} required id="my-input-2" />

                    </div>
                    <div className={styles.MuiInputLabel}>
                        <InputLabel classes={classesLabel} required shrink={false} htmlFor="my-input-3">Введите отчество:</InputLabel>
                        <Input
                            name="my-input-3" className={styles.textField} required id="my-input-3" />

                    </div>
                </div>
            </form>
            <div className={styles.buttonContainer}>
                <Button className={styles.saveButton} type="submit" form="my-form-id">Enter</Button>
            </div>
        </div>
    );
    return (
        <div>
            <Modal
                disableBackdropClick
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}