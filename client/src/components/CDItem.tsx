import React, { Component } from 'react';

import '../stylesheets/style.css';
import {CDObj} from "../types/types";

type PropsType = { item: CDObj, handleSwitch: (newTargetDate: CDObj) => void};
type StateType = { cd: number};

class CDItem extends Component<PropsType, StateType> {
    private timeId: NodeJS.Timeout | undefined;

    constructor(props: Readonly<PropsType>) {
        super(props);
        this.state = {
            cd: this.calculateTimeDiff(this.props.item.target),
        };
    }

    calculateTimeDiff(target: Date | null): number {
        if (target === null) return 0;
        return Math.floor((target.getTime() - new Date().getTime()) / 1000);
    }

    componentDidMount(): void {
        this.timeId = setInterval(() => {
            let diff = this.calculateTimeDiff(this.props.item.target);
            if (diff <= 0) {
                diff = 0;
                this.setState({cd: diff});
                if (this.timeId) {
                    clearInterval(this.timeId);
                }
            }
            this.setState({cd: diff});
        }, 1000);
    }

    componentWillUnmount(): void {
        if (this.timeId) {
            clearInterval(this.timeId);
        }
    }

    render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <li className={"cd-list-item glass"} onClick={() => this.props.handleSwitch(this.props.item)}>
                <div className={"cd-list-item-content"}>
                    <div className={"title"}>{this.props.item.title}</div>
                    <div className={"cd"}>{this.state.cd}</div>
                </div>
            </li>
        )
    }
}

export default CDItem;