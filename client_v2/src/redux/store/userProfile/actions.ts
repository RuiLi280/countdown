import {RegisterInfo, SET_USER_PROFILE, UPDATE_LOGIN_STATUS, USER_REGISTER, UserActionTypes, UserProfile} from "./type";
import axios from 'axios';
import {Dispatch} from "react";

export function SetUserProfile(user: UserProfile): UserActionTypes {
    return {
        type: SET_USER_PROFILE,
        payload: user
    }
}

export function userRegister(username: string, email: string): UserActionTypes {
    return {
        type: USER_REGISTER,
        payload: {
            username: username,
            email: email
        }
    }
}

export function updateLoginStatus(login: boolean): UserActionTypes {
    return {
        type: UPDATE_LOGIN_STATUS,
        payload: login
    }
}

export function register({email, password, username}: RegisterInfo) {
    return (dispatch: Dispatch<any>) => {
        return axios.post("/sign-up", {
            email: email,
            password: password,
            username: username
        }).then((res) => {
            dispatch(userRegister(username, email));
            dispatch(updateLoginStatus(true));
        }).catch(err => {

        });
    }
}

export function login(email: string, password: string) {
    return (dispatch: Dispatch<any>) => {
        return axios.post("/login", {
            email: email,
            password: password
        }).then((res) => {
            dispatch(updateLoginStatus(true));
        })
    }
}

export function logout() {
    return (dispatch: Dispatch<any>) => {
        return axios.post("/logout")
            .then((res) => {
            dispatch(updateLoginStatus(false));
        })
    }
}