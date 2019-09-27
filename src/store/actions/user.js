import {
    GOOGLE_SIGNIN_START,
    GOOGLE_SIGNIN_SUCCESS,
    GOOGLE_SIGNIN_FAILURE,
    SIGNINPASSWORD_START,
    SIGNINPASSWORD_SUCCESS,
    SIGNINPASSWORD_FAILURE,
    CHECK_USER_SESSION
} from './actionTypes';

export const checkUserSession = () => {
    return {
        type: CHECK_USER_SESSION
    }
}

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

export const signInPasswordStart = (emailPassword) => {
    return {
        type: SIGNINPASSWORD_START,
        payload: emailPassword
    }
}

export const signInPasswordSuccess = (user) => {
    return {
        type: SIGNINPASSWORD_SUCCESS,
        payload: user
    }
}

export const signInPasswordFailure = (error) => {
    return {
        type: SIGNINPASSWORD_FAILURE,
        payload: error.message
    }
}

