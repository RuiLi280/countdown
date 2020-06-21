import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import axios from 'axios';

import {Button, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export default function UserIcon() {

    return (
        <div className={"user-icon"}>
            {this.props.hasLogin ? this.iconEl() : this.loginButton()}
        </div>
    )
}