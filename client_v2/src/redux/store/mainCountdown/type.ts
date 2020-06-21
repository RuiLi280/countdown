import {CdObj} from "../../../type/type";

export type {CdObj}

export interface MainCountdownState {
    countdown: CdObj
}

export const UPDATE_MAIN_COUNTDOWN = 'UPDATE_MAIN_COUNTDOWN';

interface UpdateMainCountdownAction {
    type: typeof UPDATE_MAIN_COUNTDOWN
    payload: CdObj
}

export type MainCountdownActionTypes = UpdateMainCountdownAction;