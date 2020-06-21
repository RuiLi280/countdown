import {USER_REGISTER, UserActionTypes, UserProfile} from "./type";

const initialState: UserProfile = {
    email: '',
    username: '',
};

export function userReducer(state = initialState, action: UserActionTypes): UserProfile {
    switch(action.type) {
        case USER_REGISTER:
            return action.payload;
            case
    }
}