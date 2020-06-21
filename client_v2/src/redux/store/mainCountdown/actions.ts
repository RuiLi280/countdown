import {CdObj, MainCountdownActionTypes, MainCountdownState, UPDATE_MAIN_COUNTDOWN} from "./type";

export function updateMainCountdown(cd: CdObj): MainCountdownActionTypes {
    return {
        type: UPDATE_MAIN_COUNTDOWN,
        payload: cd
    }
}