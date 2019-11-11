import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT
} from '../constants/userConstants';

const initialState =  {
        firstName:'TESTER',
        lastName: '',
        username: '',
        password: '',
        isLoggedIn: false,
}

export const authentication = (state = initialState, action) => {
    // console.log('TEST')

    switch (action.type) {
        case LOGIN_REQUEST:
        return {
            ...state
        }
        case LOGIN_SUCCESS:
        console.log('GETTING CALLED')
        return {
            ...action.user,
            isLoggedIn: true,
        }

        case LOGIN_FAILURE:
        return state;

        case LOGOUT:
        return state;
        
        default:
        return state;
    }
}
 
export default authentication;