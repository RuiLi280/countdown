import React, {ChangeEvent, Component} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import {emailError} from "../types/types";
import axios from 'axios';

type StateType = {email: string, password: string, checkEmail: emailError}
type PropsType = {open: boolean, handleOpen: (open: boolean) => void, login: (login: boolean) => void}

class Login extends Component<PropsType, StateType> {
    constructor(props: Readonly<PropsType>) {
        super(props);
        this.state = {
            email: "",
            password: "",
            checkEmail: emailError.ok,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClose() {
        this.setState({email: "", password: ""});
        this.props.handleOpen(false);
    }

    handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const id = e.target.id;
        const val = e.target.value;
        this.setState(ps => ({...ps, [id]: val,}));
    }

    handleSubmit() {
        if (!Login.checkEmailFormat(this.state.email)) {
            this.setState({checkEmail: emailError.format});
            return;
        }
        axios.post('http://cdapi.thewatercats.com:4000/login', {
            email: this.state.email,
            password: this.state.password,
        }).then(res => {
            if (res.status === 200) {
                this.props.login(true);
                this.handleClose();
            } else {
                console.log(res.data);
            }
        }).catch(err => {
            console.log(err.message);
        })
    }

    static checkEmailFormat(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    emailErrorMessage() {
        const checkEmail = this.state.checkEmail;
        switch (checkEmail) {
            case emailError.format:
                return "Please enter a correct email address";
            case emailError.ok:
                return "";
            default:
                return "";
        }
    }

    render() {
        const open = this.props.open;
        return (
            <Dialog open={open} onClose={this.handleClose}>
                <DialogTitle>Log in</DialogTitle>
                <DialogContent>
                    <TextField
                        required
                        error={this.state.checkEmail !== emailError.ok}
                        margin={"dense"}
                        id={"email"}
                        label={"Email"}
                        type={"email"}
                        fullWidth
                        value={this.state.email}
                        onChange={this.handleChange}
                        helperText={this.emailErrorMessage()}
                    />
                    <TextField
                        required
                        margin={"dense"}
                        id={"password"}
                        label={"Password"}
                        type={"password"}
                        fullWidth
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleSubmit} color="primary">
                        Log in
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default Login;