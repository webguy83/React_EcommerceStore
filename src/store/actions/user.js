import {
    GOOGLE_SIGNIN_START,
    GOOGLE_SIGNIN_SUCCESS,
    GOOGLE_SIGNIN_FAILURE,
    SIGNINPASSWORD_START,
    SIGNINPASSWORD_SUCCESS,
    SIGNINPASSWORD_FAILURE
} from './actionTypes';

export const googleSignInStart = () => {
    return {
        type: GOOGLE_SIGNIN_START
    }
}

export const googleSignInSuccess = (user) => {
    return {
        type: GOOGLE_SIGNIN_SUCCESS,
        payload: user
    }
}

export const googleSignInFailure = (error) => {
    return {
        type: GOOGLE_SIGNIN_FAILURE,
        payload: error.message
    }
}

export const signInPasswordStart = () => {
    return {
        type: SIGNINPASSWORD_START
    }
}

export const signInPasswordSuccess = (emailPassword) => {
    return {
        type: SIGNINPASSWORD_SUCCESS,
        payload: emailPassword
    }
}

export const signInPasswordFailure = (error) => {
    return {
        type: SIGNINPASSWORD_FAILURE,
        payload: error.message
    }
}

