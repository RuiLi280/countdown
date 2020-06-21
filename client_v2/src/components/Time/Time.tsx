import React from 'react';

interface PropsType {type: "day" | "hour" | "min" | "sec", sec: number, styles?: {}}

export default function Time(props: PropsType) {

    const convert = () => {
        const type = props.type;
        const sec = props.sec;

        let t = 0;
        switch (type) {
            case "day":
                return Math.floor(sec / (3600 * 24)) + '';
            case "hour":
                t = Math.floor(sec % (3600 * 24) / 3600);
                return t < 10 ? "0" + t : t + '';
            case "min":
                t = Math.floor(sec % 3600 / 60);
                return t < 10 ? "0" + t : t + '';
            case "sec":
                t = Math.floor(sec % 60);
                return t < 10 ? "0" + t : t + '';
        }
    };

    return (
        <div className={'time'}>
            <div className={'time-num'} style={props.styles}>
                {convert()}
            </div>
            <div className={'time-label'}>
                {props.type.toLocaleUpperCase()}
            </div>
        </div>
    )
}
