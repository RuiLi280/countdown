import {useEffect, useRef} from 'react';
import {CdObj} from "../../type/type";

export default function useInterval(callback: () => void, delay: number, cd: CdObj) {
    const savedCallback = useRef<(() => void)>(callback);
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (cd.id !== '') {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay, cd]);
}