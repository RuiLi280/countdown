import React, { Component } from 'react';
import axios from 'axios';

import MainDisplay from "./components/MainDisplay";
import CountDownList from "./components/CountDownList";
import UserIcon from "./components/UserIcon";

import './stylesheets/style.css';

import {CDObj, User} from './types/types';
import AddCD from "./components/AddCD";

type StateType = { user: User, newCD: CDObj, openAdd: boolean, login: boolean }
class App extends Component<{}, StateType> {
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            user: {
                username: "",
                email: "",
                list: [],
                defaultCd: null,
            },
            openAdd: false,
            newCD: {title: "", target: new Date(), description: ""},
            login: false
        };
        this.handleAddWindow = this.handleAddWindow.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount(): void {
        axios.get('/api/get-data')
            .then(res => {
                if (res.status === 200 && res.data !== null) {
                    console.log("something happen?");
                    console.log(res.data);
                    const d = res.data;
                    this.setState({
                        user: {
                            username: d.username,
                            email: d.email,
                            defaultCd: d.defaultCd,
                            list: d.cdList
                        },
                        login: d.isLogin
                    });
                }
            }).catch(err => {
                console.error(err);
        });
    }

    handleAddWindow(open: boolean) {
        this.setState({openAdd: open, newCD: {title: "", target: new Date(), description: ""}});
    }

    async handleSwitchMainDisplay(currTargetDate: CDObj | null, newTargetDate: CDObj) {
        if (currTargetDate === null) return;
        const user = this.state.user;
        const list = user.list.filter(i => i !== newTargetDate);
        list.push(currTargetDate);
        this.setState({
            user: {
                ...user,
                list: list,
                defaultCd: newTargetDate,
            }
        });
        try {
            await axios.put('/api/add', {item: currTargetDate});
            await axios.put('/api/remove', {title: newTargetDate.title});
            await axios.put('/api/set-default', {item: newTargetDate});
        } catch (e) {
            console.error(e);
        }
    }

    async handleAdd() {
        const user = this.state.user;
        if (user.defaultCd === null) {
            this.setState({user: {...user, defaultCd: this.state.newCD}});
            try {
                await axios.put('/api/set-default', {item: this.state.newCD});
            } catch (e) {
                console.error(e);
            }
            return;
        }
        const newList = [...user.list, this.state.newCD];
        this.setState({user: {...user, list: newList}});
        try {
            await axios.put('/api/add', {item: this.state.newCD})
        } catch (e) {
            console.error(e);
        }
    }

    handleLogin(login: boolean) {
        this.setState({login: login});
    }

    render() {
        const newCD = this.state.newCD;
        const user = this.state.user;
        return (
            <div className={"app-container"}>
                <UserIcon hasLogin={this.state.login} login={this.handleLogin} username={user.username} email={user.email}/>
                <MainDisplay targetDate={user.defaultCd}/>
                <CountDownList
                    list={user.list}
                    handleSwitch={this.handleSwitchMainDisplay.bind(this, user.defaultCd)}
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