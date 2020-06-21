import React, {useState} from 'react';
import { useSelector, useDispatch, useStore } from "react-redux";

import {RootState} from '../../redux/'
import CDItem from "../CDItem/CDItem";
import {openAddWindow} from "../../redux/store/addWindow/actions";


export default function CDList() {
    const [expand, setExpand] = useState(true);

    const list = useSelector((state: RootState) => state.countdownList.countdownList);
    const dispatch = useDispatch();

    return (
        <div className={"glass " + (expand ? "cd-list-container" : "cd-list-container-hide")}>
            <span className={"cd-list-expand"} onClick={() => setExpand(e => !e)}>
                <svg height={"30"} width={"30"}>
                    <text fontSize={"30"} fontFamily={"Fredoka One, cursive;"} x={"6"} y={"25"}>
                        {expand ? ">" : "<"}
                    </text>
                </svg>
            </span>
            <span className={"cd-list"}>
                <ul>
                    <li className={"add glass"} onClick={() => dispatch(openAddWindow())}>+</li>
                    {list.map((item) => {
                        return <CDItem key={item.id} item={item}/>
                    })}
                </ul>
            </span>
        </div>
    )
}