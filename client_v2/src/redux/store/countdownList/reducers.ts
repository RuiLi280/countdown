import {ADD_COUNTDOWN, CountdownListActionTypes, CountdownListState, REMOVE_COUNTDOWN} from "./type";

const initialState: CountdownListState = {
    countdownList: []
};

export function countdownListReducer(
    state = initialState,
    action: CountdownListActionTypes
): CountdownListState {
    switch (action.type) {
        case ADD_COUNTDOWN:
            return {
                countdownList: [...state.countdownList, action.payload]
            };
        case REMOVE_COUNTDOWN:
            return {
                countdownList: state.countdownList.filter(cd => cd.id !== action.payload)
            };
        default:
            return state;
    }
}