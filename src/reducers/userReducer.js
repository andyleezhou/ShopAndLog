import {
    GETALL_REQUEST,
    GETALL_FAILURE,
    GETALL_SUCCESS
} from '../constants/userConstants';

const initialState = {
    items: [],
}

export function users(state = initialState, action) {
    switch (action.type) {
        case GETALL_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GETALL_SUCCESS:
            return {
                ...state,
                users: action.users
            };
        case GETALL_FAILURE:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }

}
