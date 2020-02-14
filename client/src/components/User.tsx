import React, { Component } from 'react';
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import Login from './Login';
import axios from 'axios';

import '../stylesheets/style.css';
import {Button, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SignUp from "./SignUp";

type StateType = { anchorEl: HTMLImageElement | null, openLogin: boolean, openSignUp: boolean }
type PropsType = { hasLogin: boolean, login: (hasLogin: boolean) => void }

class User extends Component<PropsType, StateType> {
    constructor(props: Readonly<PropsType>) {
        super(props);
        this.state = {
            anchorEl: null,
            openLogin: false,
            openSignUp: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleClick(e: React.MouseEvent<HTMLImageElement>) {
        this.setState({anchorEl: e.currentTarget});
    }

    handleClose() {
        this.setState({anchorEl: null});
    }

    handleLogout() {
        axios.get('/users/logout')
            .then(res => {
                if (res.status === 200) {
                    this.props.login(false);
                }
            }).catch(err => {
                console.log(err);
        });
    }

    iconEl() {
        const open = Boolean(this.state.anchorEl);
        return (
            <div>
                <Avatar onClick={this.handleClick}>H</Avatar>
                <Popover open={open}
                         anchorEl={this.state.anchorEl}
                         onClose={this.handleClose}
                         anchorOrigin={{
                             vertical: "center",
                             horizontal: "right",
                         }}
                         transformOrigin={{
                             vertical: "top",
                             horizontal: "left",
                         }}
                >
                    <List>
                        <ListItem button onClick={this.handleLogout}>
                            <ListItemIcon>
                                <ExitToAppIcon fontSize={"small"}/>
                            </ListItemIcon>
                            <ListItemText primary={"Sign out"} />
                        </ListItem>
                    </List>
                </Popover>
            </div>
        );
    }

    handleOpenClose(key: string, open: boolean) {
        this.setState(ps => ({
            ...ps,
            [key]: open,
        }));
    }

    loginButton() {
        return (
            <div>
                <Button onClick={(e) => this.setState({openLogin: true})}>Log in</Button>
                <Login open={this.state.openLogin} handleOpen={this.handleOpenClose.bind(this, "openLogin")} login={this.props.login}/>
                <Button onClick={(e) => this.setState({openSignUp: true})}>Sign up</Button>
                <SignUp open={this.state.openSignUp} handleOpen={this.handleOpenClose.bind(this, "openSignUp")} login={this.props.login}/>
            </div>
        );
    }

    render() {
        return (
            <div className={"user-icon"}>
                {this.props.hasLogin ? this.iconEl() : this.loginButton()}
            </div>
        )
    }
}

export default User;