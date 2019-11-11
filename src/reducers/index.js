import { combineReducers } from 'redux';
import { authentication } from './authReducer';
import { users } from './userReducer';
import { alert } from './alertReducer';
import { shopping } from './shoppingReducer';
import { registration } from './registrationReducer'
import { count } from './countReducer'


export const rootReducer = combineReducers({
    authentication,
    users,
    shopping,
    alert,
    registration,
    count
})

export default rootReducer;