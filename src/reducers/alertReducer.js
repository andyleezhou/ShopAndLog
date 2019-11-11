import { SUCCESS, ERROR, CLEAR } from '../constants/alertConstants';

 export function alert (state = {}, action) {

    switch (action.type) {
        case SUCCESS:
        return {
            messsage: action.messsage
        }
        case ERROR:
        return {
            message: action.message
        }
        case CLEAR:
        return {
            message: action.message
        }
        default:
            return state;
    }
}

