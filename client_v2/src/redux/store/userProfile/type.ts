import {CdObj} from "../../../type/type";

export interface UserProfile {
    loginStatus: boolean
    username: string
    email: string
}

export interface RegisterInfo {
    email: string,
    username: string,
    password: string
}

export const USER_REGISTER = 'USER_REGISTER';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const UPDATE_LOGIN_STATUS = 'UPDATE_LOGIN_STATUS';

interface UserRegisterAction {
    type: typeof USER_REGISTER
    payload: {
        username: string,
        email: string
    }
}

interface UserLogin {
    type: typeof USER_LOGIN
    payload: {
        email: string,
        password: string
    }
}

interface UserLogout {
    type: typeof USER_LOGOUT
}

interface SetUserProfile {
    type: typeof SET_USER_PROFILE
    payload: UserProfile
}

interface UpdateLoginStatus {
    type: typeof UPDATE_LOGIN_STATUS
    payload: boolean
}

export type UserActionTypes = UserRegisterAction | UserLogin | UserLogout | SetUserProfile | UpdateLoginStatus;
