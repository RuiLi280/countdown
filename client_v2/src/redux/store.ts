import { createStore, combineReducers } from 'redux';
import {mainCountdownReducer} from "./store/mainCountdown/reducers";
import {countdownListReducer} from "./store/countdownList/reducers";
import {addWindowReducer} from "./store/addWindow/reducers";

const rootReducer = combineReducers({
    mainCountdown: mainCountdownReducer,
    countdownList: countdownListReducer,
    addWindow: addWindowReducer
});

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);