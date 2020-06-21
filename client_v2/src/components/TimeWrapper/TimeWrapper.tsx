import React from 'react';

import {Time} from '..';

interface PropsType {
    sec: number,
    styles?: {}
}

export default function TimeWrapper(props: PropsType) {
    const t = props.sec;

    return (
        <>
            <Time type={"day"} sec={t}/>
            <Time type={"hour"} sec={t} styles={props.styles}/>
            <Time type={"min"} sec={t}/>
            <Time type={"sec"} sec={t} styles={props.styles}/>
        </>
    )
}