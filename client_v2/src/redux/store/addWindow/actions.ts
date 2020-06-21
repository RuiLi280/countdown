import {AddWindowActionTypes, CLOSE_WINDOW, OPEN_WINDOW} from "./type";

export function openAddWindow(): AddWindowActionTypes {
    return {
        type: OPEN_WINDOW
    }
}

export function closeAddWindow(): AddWindowActionTypes {
    return {
        type: CLOSE_WINDOW
    }
}