import {AddWindowActionTypes, AddWindowState, CLOSE_WINDOW, OPEN_WINDOW} from "./type";

const initialState: AddWindowState = {
    isOn: false
};

export function addWindowReducer(
    state = initialState,
    action: AddWindowActionTypes
): AddWindowState {
    switch (action.type) {
        case OPEN_WINDOW:
            return {isOn: true};
        case CLOSE_WINDOW:
            return {isOn: false};
        default:
            return state;
    }
}