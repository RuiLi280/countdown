import {ADD_COUNTDOWN, CdObj, CountdownListActionTypes, REMOVE_COUNTDOWN} from "./type";

export function addCountdown(cd: CdObj): CountdownListActionTypes {
    return {
        type: ADD_COUNTDOWN,
        payload: cd
    }
}

export function removeCountdown(id: string): CountdownListActionTypes {
    return {
        type: REMOVE_COUNTDOWN,
        payload: id
    }
}