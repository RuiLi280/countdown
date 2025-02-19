import React, {ChangeEvent, Component, SyntheticEvent} from 'react';
import axios from 'axios';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import {emailError} from "../types/types";

type StateType = {email: string, password: string, confirm: string, username: string, checkEmail: emailError}
type PropsType = {open: boolean, handleOpen: (open: boolean) => void, login: (login: boolean) => void}

class SignUp extends Component<PropsType, StateType> {
    constructor(props: Readonly<PropsType>) {
        super(props);
        this.state = {
            email: "",
            password: "",
            confirm: "",
            username: "",
            checkEmail: emailError.ok,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClose() {
        this.setState({email: "", password: "", confirm: "", username: ""});
        this.props.handleOpen(false);
    }

    handleChange(e: ChangeEvent<HTMLInputElement>): void {
        const id = e.target.id;
        const val = e.target.value;
        if (id === "email" ){
            if (!SignUp.checkEmailFormat(val)) {
                this.setState({checkEmail: emailError.format});
            } else {
                this.setState({checkEmail: emailError.ok});
            }
        }
        this.setState((ps) => ({...ps, [id]: val,}));
    }

    handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        const data = this.state;
        if (data.email === "" || data.username === "" || data.password === "") {
            return;
        }
        if (data.password !== data.confirm || data.checkEmail !== emailError.ok) {
            return;
        }
        axios.post("/sign-up", {
            email: data.email,
            password: data.password,
            username: data.username
        }).then((res) => {
            this.props.login(true);
            this.handleClose();
        }).catch(err => {
            this.setState({checkEmail: emailError.format});
        });
    }

    static checkEmailFormat(email: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    emailErrorMessage() {
        const checkEmail = this.state.checkEmail;
        switch (checkEmail) {
            case emailError.existed:
                return "Email already existed";
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
        const checkPassword = (this.state.confirm !== "" && this.state.password !== this.state.confirm);
        const checkEmail = this.state.checkEmail;
        return (
            <Dialog open={open} onClose={this.handleClose}>
                <DialogTitle>Log in</DialogTitle>
                <form onSubmit={this.handleSubmit}>
                    <DialogContent>
                        <TextField
                            required
                            margin={"dense"}
                            id={"username"}
                            label={"User name"}
                            type={"text"}
                            fullWidth
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                        <TextField
                            required
                            error={checkEmail !== emailError.ok}
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
                        <TextField
                            required
                            error={checkPassword}
                            margin={"dense"}
                            id={"confirm"}
                            label={"Confirm password"}
                            type={"password"}
                            fullWidth
                            value={this.state.confirm}
                            onChange={this.handleChange}
                            helperText={checkPassword ? "Password does not match" : ""}
                        />

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                        <Button type={'submit'} color="primary">
                            Sign Up
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        )
    }
}

export default SignUp;