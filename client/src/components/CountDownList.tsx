import React, {Component, ReactEventHandler} from 'react';

import CDItem from "./CDItem";
import '../stylesheets/style.css';

import {CDObj} from "../types/types";

type PropsType = { list: Array<CDObj>, handleSwitch: (newTargetDate: CDObj) => void, open: (open: boolean) => void };
type StateType = { newTitle: string, newDate: Date, newDest: string, expand: boolean };

class CountDownList extends Component<PropsType, StateType> {
    constructor(props: Readonly<PropsType>) {
        super(props);
        this.state = {
            newTitle: "",
            newDate: new Date(),
            newDest: "",
            expand: false,
        };
        this.handleOnAddItem = this.handleOnAddItem.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDest = this.handleChangeDest.bind(this);
        this.handleExpand = this.handleExpand.bind(this);
    }

    handleOnAddItem(event: React.SyntheticEvent) {
        this.props.open(true);
    }

    handleChangeTitle(e: React.ChangeEvent<HTMLInputElement>) {
        console.log(this.state.newTitle);
        this.setState({newTitle: e.currentTarget.value})
    }

    handleChangeDate(e: React.FormEvent<HTMLInputElement>) {
        this.setState({newDate: new Date(e.currentTarget.value)});
    }

    handleChangeDest(e: React.FormEvent<HTMLInputElement>) {
        this.setState({newDest: e.currentTarget.value});
    }

    handleExpand(e: React.SyntheticEvent) {
        this.setState({expand: !this.state.expand});
    }

    render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const exp = this.state.expand;
        return (
            <div className={"glass " + (exp ? "cd-list-container" : "cd-list-container-hide")}>
                <span className={"cd-list-expand"} onClick={this.handleExpand}>
                    <svg height={"30"} width={"30"}>
                        <text fontSize={"30"} fontFamily={"Fredoka One, cursive;"} x={"6"} y={"25"}>
                            {exp ? ">" : "<"}
                        </text>
                    </svg>
                </span>
                <span className={"cd-list"}>
                    <ul>
                        <li className={"add glass"} onClick={this.handleOnAddItem}>+</li>
                        {this.props.list && this.props.list.map((item, idx) => {
                            return <CDItem key={idx} item={item} handleSwitch={this.props.handleSwitch}/>
                        })}
                    </ul>
                </span>
            </div>
        )
    }
}

export default CountDownList;