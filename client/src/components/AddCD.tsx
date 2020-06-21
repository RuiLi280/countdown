import React, {Component, SyntheticEvent} from 'react';
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

type PropsType = {title: string, setTitle: (title:string)=>void,
    date: Date | null, setDate: (date: Date | null, value?: string | null | undefined) => void,
    dest: string, setDest: (dest: string) => void,
    open: boolean, handleOpenClose: (open: boolean) => void,
    add: () => void
}
type StateType = {}

class AddCD extends Component<PropsType, StateType> {

    constructor(props: Readonly<PropsType>) {
        super(props);
        this.handleClickClose = this.handleClickClose.bind(this);
        this.setDateTime = this.setDateTime.bind(this);
        this.add = this.add.bind(this);
    }

    handleClickClose() {
        this.props.handleOpenClose(false);
    }

    static formatDate(date: Date | null): string {
        if (date === null) return "";
        let d = date,
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    static formatTime(date: Date | null): string {
        if (date === null) return "";
        const h = date.getHours();
        const m = date.getMinutes();
        return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m);
    }

    setDateTime(date: string, time: string): void {
        this.props.setDate(new Date(date + " " + time));
    }

    add(e: SyntheticEvent) {
        e.preventDefault();
        this.props.add();
        this.props.handleOpenClose(false);
    }

    render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const open = this.props.open;
        const title = this.props.title;
        const date = this.props.date;
        const dest = this.props.dest;
        return (
            <div>
                <Dialog open={open} onClose={this.handleClickClose}>
                    <DialogTitle id={"add-new-countdown"}>Add new count down</DialogTitle>
                    <form onSubmit={this.add}>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin={"dense"}
                                id={"title"}
                                label={"Count down for"}
                                type={"text"}
                                fullWidth
                                required
                                value={title}
                                onChange={(e) => this.props.setTitle(e.target.value)}
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
                                    value={this.props.date}
                                    onChange={this.props.setDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                <KeyboardTimePicker
                                    margin="normal"
                                    variant="inline"
                                    id="time-picker"
                                    label="Time picker"
                                    value={this.props.date}
                                    onChange={this.props.setDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change time',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                            <TextField
                                margin={"dense"}
                                id={"dest"}
                                type={"test"}
                                label={"Description"}
                                multiline
                                fullWidth
                                value={dest}
                                onChange={(e) => this.props.setDest(e.target.value)}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClickClose} color={"primary"}>
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
}

export default AddCD;