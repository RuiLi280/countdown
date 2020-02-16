import React, { Component } from 'react';

import '../stylesheets/style.css';

import {CDObj} from "../types/types";

type PropsType = { targetDate: CDObj | null}
type StateType = { timeRemain: number, test: string }

class MainDisplay extends Component<PropsType, StateType> {

    private timeId: NodeJS.Timeout | undefined;
    constructor(props: Readonly<PropsType>) {
        super(props);
        // this.targetDate = new Date("04/01/2020");
        this.state = {
            timeRemain: this.props.targetDate === null ? 0 : this.calculateTimeDiff(this.props.targetDate.target),
            test: ""
        };
        this.countdownInterval = this.countdownInterval.bind(this);
    }

    calculateTimeDiff(target: Date | null): number {
        if (target === null) return 0;
        return Math.floor((target.getTime() - new Date().getTime()) / 1000);
    }

    componentDidMount(): void {
        if (this.props.targetDate === null) {
            console.log("not start main cd");
            return;
        }
        this.timeId = setInterval(this.countdownInterval, 1000);
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<StateType>, snapshot?: any): void {
        if (this.props.targetDate === null) return;
        if (prevProps !== this.props) {
            if (this.timeId) {
                clearInterval(this.timeId);
            }
            this.timeId = setInterval(this.countdownInterval, 1000);
        }
    }

    countdownInterval() {
        let diff = this.props.targetDate === null ? 0 : this.calculateTimeDiff(this.props.targetDate.target);
        if (diff <= 0) {
            diff = 0;
            this.setState({timeRemain: diff});
            if (this.timeId) {
                clearInterval(this.timeId);
            }
        }
        this.setState({timeRemain: diff});
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
                    { this.props.targetDate === null ? "" : this.props.targetDate.title }
                </div>
            </div>
        );
    }
}

export default MainDisplay;