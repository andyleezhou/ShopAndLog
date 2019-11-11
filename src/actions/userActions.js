import {
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    DELETE_FAILURE,
    DELETE_REQUEST,
    DELETE_SUCCESS,
    GETALL_FAILURE,
    GETALL_REQUEST,
    GETALL_SUCCESS
} from '../constants/userConstants';

export const registerRequest = user => ({
    type: REGISTER_REQUEST,
    user
})

export const registerSuccess = user => ({
    type: REGISTER_SUCCESS,
    user
})
export const registerFailure = error => ({
    type: REGISTER_FAILURE,
    error
})

export const loginFailure = error => ({
    type: LOGIN_FAILURE,
    error
})

export const loginSuccess = user => ({
    type: LOGIN_SUCCESS,
    user: user
})

export const loginRequest = user => ({
    type: LOGIN_REQUEST,
    user: user
})

export const logout = user => ({
    type: LOGOUT,
    user: user
})

export const deleteRequest = id => ({
    type: DELETE_REQUEST,
    id
})

export const deleteSuccess = id => ({
    type: DELETE_SUCCESS,
    id
})

export const deleteFailure = error => ({
    type: DELETE_FAILURE,
    error
})

export const getAllRequest = () => ({
    type: GETALL_REQUEST,
})

export const getAllSuccess = users => ({
    type: GETALL_SUCCESS,
    users,
})

export const getAllFailure = error => ({
    type: GETALL_FAILURE,
    error
})