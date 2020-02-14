import React, { Component } from 'react';

import '../stylesheets/style.css';

import {CDObj} from "../types/types";

type PropsType = { targetDate: CDObj}
type StateType = { timeRemain: number, test: string }

class MainDisplay extends Component<PropsType, StateType> {

    private timeId: NodeJS.Timeout | undefined;
    constructor(props: Readonly<PropsType>) {
        super(props);
        // this.targetDate = new Date("04/01/2020");
        this.state = {
            timeRemain: this.calculateTimeDiff(this.props.targetDate.target),
            test: ""
        };
    }

    calculateTimeDiff(target: Date): number {
        return Math.floor((target.getTime() - new Date().getTime()) / 1000);
    }

    componentDidMount(): void {
        this.timeId = setInterval(() => {
            const diff = this.calculateTimeDiff(this.props.targetDate.target);
            this.setState({timeRemain: diff});
        }, 1000);
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<StateType>, snapshot?: any): void {
        if (prevProps !== this.props) {
            if (this.timeId) {
                clearInterval(this.timeId);
            }
            this.timeId = setInterval(() => {
                const diff = this.calculateTimeDiff(this.props.targetDate.target);
                this.setState({timeRemain: diff});
            }, 1000);
        }
    }

    componentWillUnmount(): void {
        if (this.timeId) {
            clearInterval(this.timeId);
        }
    }

    render() {
        return (
            <div>
                <div className={"main-countdown"}>
                    { this.state.timeRemain }
                </div>
                <div className={"main-title"}>
                    { this.props.targetDate.title }
                </div>
            </div>
        );
    }
}

export default MainDisplay;