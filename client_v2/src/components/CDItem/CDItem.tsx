import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {TimeWrapper} from "../index";
import {CdObj} from "../../type/type";

import {addCountdown, removeCountdown} from "../../redux/store/countdownList/actions";
import {updateMainCountdown} from "../../redux/store/mainCountdown/actions";
import {RootState} from "../../redux";

interface PropsType {
    item: CdObj
}

export default function CDItem(props: PropsType) {

    const calculateTimeDiff = function(target: Date): number {
        const diff = Math.floor((target.getTime() - new Date().getTime()) / 1000);
        return diff <= 0 ? 0 : diff;
    };

    const [time, setTime] = useState(calculateTimeDiff(props.item.target));

    useEffect(() => {
        const intervalId = setInterval(() => {
            const diff = calculateTimeDiff(props.item.target);
            if (diff <= 0) {
                setTime(0);
                clearInterval(intervalId);
            }
            setTime(diff);
            return () => {
                clearInterval(intervalId);
            }
        }, 1000);
    }, [props.item.target]);

    const dispatch = useDispatch();
    const mainCountdown = useSelector((state: RootState) => state.mainCountdown.countdown);

    const handleSwitch = async function() {
        await dispatch(addCountdown(mainCountdown));
        await dispatch(updateMainCountdown(props.item));
        await dispatch(removeCountdown(props.item.id));
    };

    return (
        <li className={"cd-list-item glass"} onClick={() => handleSwitch()}>
            <div className={"cd-list-item-content"}>
                <div className={"title"}>{props.item.title}</div>
                <div className={"cd"}>
                    <TimeWrapper sec={time} styles={{fontSize: "15px"}}/>
                </div>
            </div>
            <div className={"remove"} onClick={() => dispatch(removeCountdown(props.item.id))}>-</div>
        </li>
    )
}