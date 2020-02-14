import React, { Component } from 'react';

import MainDisplay from "./components/MainDisplay";
import CountDownList from "./components/CountDownList";
import User from "./components/User";

import './stylesheets/style.css';

import {CDObj} from './types/types';
import AddCD from "./components/AddCD";

type StateType = { mainDisplayTarget: CDObj, cdList: Array<CDObj>, newCD: CDObj, openAdd: boolean, login: boolean}
class App extends Component<{}, StateType> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            mainDisplayTarget: {title: "0", target: new Date("02/14/2020"), description: "abcdd"},
            cdList: [
                {title: "abcdefg", target: new Date("08/14/2020"), description: "abcdd"},
                {title: "2", target: new Date("02/14/2021"), description: "abcdd"},
                {title: "3", target: new Date("03/14/2020"), description: "abcdd"},
                {title: "4", target: new Date("02/24/2020"), description: "abcdd"},
            ],
            openAdd: false,
            newCD: {title: "", target: new Date(), description: ""},
            login: false
        };
        this.handleAddWindow = this.handleAddWindow.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleAddWindow(open: boolean) {
        this.setState({openAdd: open, newCD: {title: "", target: new Date(), description: ""}});
    }

    handleSwitchMainDisplay(currTargetDate: CDObj, newTargetDate: CDObj): void {
        const list = this.state.cdList.filter(i => i !== newTargetDate);
        list.push(currTargetDate);
        this.setState({
            mainDisplayTarget: newTargetDate,
            cdList: list,
        });
    }

    handleAdd() {
        const newList = [...this.state.cdList, this.state.newCD];
        this.setState({cdList: newList});
    }

    handleLogin(login: boolean) {
        this.setState({login: login});
    }

    render() {
        const newCD = this.state.newCD;
        return (
            <div className={"app-container"}>
                <User hasLogin={this.state.login} login={this.handleLogin}/>
                <MainDisplay targetDate={this.state.mainDisplayTarget}/>
                <CountDownList
                    list={this.state.cdList}
                    handleSwitch={this.handleSwitchMainDisplay.bind(this, this.state.mainDisplayTarget)}
                    open={this.handleAddWindow}
                />
                <AddCD title={newCD.title}  setTitle={(t) => {this.setState({newCD: {...newCD, title: t}})}}
                       date={newCD.target} setDate={(d) => {this.setState({newCD: {...newCD, target: d}})}}
                       dest={newCD.description} setDest={(d) => this.setState({newCD: {...newCD, description: d}})}
                       open={this.state.openAdd} handleOpenClose={this.handleAddWindow}
                       add={this.handleAdd}
                />
            </div>
        );
    }
}

export default App;