import {MainCountdownActionTypes, MainCountdownState, UPDATE_MAIN_COUNTDOWN} from "./type";

const initialState: MainCountdownState = {
    countdown: {
        id: '',
        description: '',
        target: new Date(),
        title: '',
    }
};

export function mainCountdownReducer(
    state = initialState,
    action: MainCountdownActionTypes
): MainCountdownState {
    switch (action.type) {
        case UPDATE_MAIN_COUNTDOWN:
            return {countdown: action.payload};
        default:
            return state;
    }
}