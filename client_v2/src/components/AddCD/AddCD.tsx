import React, {ChangeEvent, FormEvent, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {v4 as uuid} from 'uuid';

import {CdObj} from "../../type/type";

import {useSelector, useDispatch} from "react-redux";
import {RootState} from "../../redux";
import {closeAddWindow} from "../../redux/store/addWindow/actions";
import {updateMainCountdown} from "../../redux/store/mainCountdown/actions";
import {addCountdown} from "../../redux/store/countdownList/actions";

export default function AddCD() {
    const isOpen = useSelector((state: RootState) => state.addWindow.isOn);
    const dispatch = useDispatch();

    const initState: CdObj = {title: '', target: new Date(), id: '', description: ''};
    const [formState, setFormState] = useState(initState);

    const mainCountdown = useSelector((state: RootState) => state.mainCountdown.countdown);

    const handleSubmit = function (e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = {...formState, id: uuid()};
        if (mainCountdown.id === '') {
            dispatch(updateMainCountdown(form));
        } else {
            dispatch(addCountdown(form));
        }
        setFormState(initState);
        dispatch(closeAddWindow());
    };

    const handleChange = function(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
        event.persist();
        setFormState((state: CdObj) => ({...state, [event.target.name]: event.target.value}));
    };

    return (
        <div>
            <Dialog open={isOpen} onClose={() => dispatch(closeAddWindow())}>
                <DialogTitle id={"add-new-countdown"}>Add new count down</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin={"dense"}
                            id={"title"}
                            name={"title"}
                            label={"Count down for"}
                            type={"text"}
                            fullWidth
                            required
                            value={formState.title}
                            onChange={handleChange}
                        />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                minDate={new Date()}
                                value={formState.target}
                                name={"target"}
                                onChange={(date: Date | null) => setFormState((s) => ({...s, target: date ? date : new Date()}))}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                variant="inline"
                                id="time-picker"
                                name={"target"}
                                label="Time picker"
                                value={formState.target}
                                onChange={(date: Date | null) => setFormState((s) => ({...s, target: date ? date : new Date()}))}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <TextField
                            margin={"dense"}
                            id={"dest"}
                            name={"description"}
                            type={"test"}
                            label={"Description"}
                            multiline
                            fullWidth
                            value={formState.description}
                            onChange={handleChange}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => dispatch(closeAddWindow())} color={"primary"}>
                            Cancel
                        </Button>
                        <Button type={'submit'} color={"primary"}>
                            Ok
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}