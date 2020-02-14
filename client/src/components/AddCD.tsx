import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

type PropsType = {title: string, setTitle: (title:string)=>void,
    date: Date, setDate: (date: Date) => void,
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

    formatDate(date: Date): string {
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

    formatTime(date: Date): string {
        const h = date.getHours();
        const m = date.getMinutes();
        return (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m);
    }

    setDateTime(date: string, time: string): void {
        this.props.setDate(new Date(date + " " + time));
    }

    add() {
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
                        <TextField
                            margin={"dense"}
                            id={"date"}
                            type={"date"}
                            value={this.formatDate(date)}
                            onChange={(e) => this.setDateTime(e.target.value, this.formatTime(date))}
                            required
                        />
                        <TextField
                            margin={"dense"}
                            id={"time"}
                            type={"time"}
                            value={this.formatTime(date)}
                            onChange={(e) => this.setDateTime(this.formatDate(date), e.target.value)}
                        />
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
                        <Button onClick={this.add} color={"primary"}>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AddCD;