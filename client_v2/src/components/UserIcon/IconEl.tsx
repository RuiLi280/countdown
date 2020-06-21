import React, {useState} from 'react';
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import {Button, List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

interface PropsType {
    username: string
}
export default function IconEl({username}: PropsType) {
    const [anchorEl, setAnchorEl] = useState<HTMLImageElement | null>(null);


    return (
        <div>
            <Avatar onClick={(e: React.MouseEvent<HTMLImageElement>) => setAnchorEl(e.currentTarget)}>{username.charAt(0)}</Avatar>
            <Popover open={Boolean(anchorEl)}
                     anchorEl={anchorEl}
                     onClose={() => setAnchorEl(null)}
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