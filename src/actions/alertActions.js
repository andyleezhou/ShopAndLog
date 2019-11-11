import { SUCCESS, ERROR, CLEAR } from '../constants/alertConstants';


export const success = (message) => {
    return {
        type: SUCCESS,
        message
    };
}

export const error = (message) => {
    return {
        type: ERROR,
        message
    };
}

export const clear = () => {
    return {
        type: CLEAR
    }
}