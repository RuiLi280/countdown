import React, { Component } from 'react';
import '../stylesheets/style.css';

type StateType = {}
type PropsType = {type: "day" | "hour" | "min" | "sec", sec: number, styles?: {}}

class Time extends Component<PropsType, StateType> {

    convert(): string {
        const type = this.props.type;
        const sec = this.props.sec;
        let t;
        switch(type) {
            case "day":
                // return Math.floor(sec / 86400) + "";
                return Math.floor(sec / (3600 * 24)) + '';
            case "hour":
                // t = Math.floor((sec % 86400) / 3600);
                t = Math.floor(sec % (3600 * 24) / 3600);
                return t < 10 ? "0" + t : t + '';
            case "min":
                // t = Math.floor((sec % (86400 * 3600)) / 60);
                t = Math.floor(sec % 3600 / 60);
                return t < 10 ? "0" + t : t + '';
            case "sec":
                // t = Math.floor((sec % (86400 * 3600 * 60)) / 60);
                t = Math.floor(sec % 60);
                return t < 10 ? "0" + t : t + '';
        }
    }

    render() {
        return (
            <div className={'time'}>
                <div className={'time-num'} style={this.props.styles}>
                    {this.convert()}
                </div>
                <div className={'time-label'}>
                    {this.props.type.toLocaleUpperCase()}
                </div>
            </div>
        )
    }
}

export default Time;