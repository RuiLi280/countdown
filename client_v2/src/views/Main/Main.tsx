import React from 'react';

import {MainDisplay, CDList, AddCD} from "../../components";

export default function Main() {
    return (
        <div className={"app-container"}>
            <UserIcon />
            <MainDisplay />
            <CDList />
            <AddCD />
        </div>
    );
}