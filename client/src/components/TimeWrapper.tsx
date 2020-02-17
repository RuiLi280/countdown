import Time from "./Time";
import React from "react";

export default function TimeWrapper(props: Readonly<{sec: number, styles?: {}}>) {
    const t = props.sec;

    return (
        <>
            <Time type={"day"} sec={t}/>
            <Time type={"hour"} sec={t} styles={props.styles}/>
            <Time type={"min"} sec={t}/>
            <Time type={"sec"} sec={t} styles={props.styles}/>
        </>
    );
}