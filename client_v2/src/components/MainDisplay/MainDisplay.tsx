import React, { useState } from 'react';
import {useSelector} from "react-redux";

import {TimeWrapper} from "../index";
import {RootState} from "../../redux";
import useInterval from "./useInterval";

export default function MainDisplay() {
    const calculateTimeDiff = function(target: Date): number {
        const diff = Math.floor((target.getTime() - new Date().getTime()) / 1000);
        return diff <= 0 ? 0 : diff;
    };

    const cd = useSelector((state: RootState) => state.mainCountdown.countdown);

    const [countdown, setCountdown] = useState(calculateTimeDiff(cd.target));

    useInterval(() => {
        const diff = calculateTimeDiff(cd.target);
        if (diff > 0) {
            setCountdown(diff);
        } else {
            setCountdown(0);
        }
    }, 1000, cd);

    return (
        <div>
            <div className={"main-countdown"}>
                <TimeWrapper sec={countdown} styles={{fontSize: "13vw", color: "#4e4e4e"}}/>
            </div>
            <div className={"main-title"}>
                {cd.title}
            </div>
            <div className={"main-desc"}>
                {cd.description}
            </div>
        </div>
    );
}