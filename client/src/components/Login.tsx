import React, {ChangeEvent, Component, SyntheticEvent} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, FormHelperText} from "@material-ui/core";
import {emailError} from "../types/types";
import axios from 'axios';

type StateType = {email: string, password: string, checkEmail: emailError, error: boolean}
type PropsType = {open: boolean, handleOpen: (open: boolean) => void, login: (login: boolean) => void}

class Login extends Component<PropsType, StateType> {
    constructor(props: Readonly<PropsType>) {
        super(props);
        this.state = {
            email: "",
            password: "",
            checkEmail: emailError.ok,
            error: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClose() {
        this.setState({email: "", password: "", checkEmail: emailError.ok, error: false});
        this.props.handleOpen(false);
    }

    handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const id = e.target.id;
        const val = e.target.value;
        this.setState(ps => ({...ps, [id]: val,}));
    }

    handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        if (!Login.checkEmailFormat(this.state.email)) {
            this.setState({checkEmail: emailError.format});
            return;
        }
        axios.post('/login', {
            email: this.state.email,
            password: this.state.password,
        }).then(res => {
            this.props.login(true);
            this.handleClose();
        }).catch(err => {
            this.setState({error: true});
        });
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
                <form onSubmit={this.handleSubmit}>
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
                        <FormHelperText
                            error={true}
                            margin={"dense"}
                        >
                            {this.state.error ? "Incorrect email or password" : ""}
                        </FormHelperText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button type={"submit"} color="primary">
                            Log in
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        )
    }
}

export default Login;