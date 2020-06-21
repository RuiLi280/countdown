import { CdObj } from "../../../type/type";

export type {CdObj}

export interface CountdownListState {
    countdownList: CdObj[]
}

export const ADD_COUNTDOWN = 'ADD_COUNTDOWN';
export const REMOVE_COUNTDOWN = 'REMOVE_COUNTDOWN';

interface AddCountdownAction {
    type: typeof ADD_COUNTDOWN
    payload: CdObj
}

interface RemoveCountdownAction {
    type: typeof REMOVE_COUNTDOWN
    payload: string
}

export type CountdownListActionTypes = AddCountdownAction | RemoveCountdownAction;