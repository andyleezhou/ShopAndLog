import {
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    DELETE_REQUEST,
    DELETE_SUCCESS,
    DELETE_FAILURE
} from '../constants/userConstants';

const initialState = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    registration: false,
    error: false,
    users: [],
}

export function registration (state = initialState, action) {
    switch (action.type) {
        case REGISTER_REQUEST:
            return {
            ...action.user,
            registration: true
            }
        case REGISTER_SUCCESS:
            return {
                ...action.user,
                registration: true,
                users: [...state.users, action.user]
            };
        case REGISTER_FAILURE:
            return state;
        default:
            return state;
            case DELETE_REQUEST:
                    return {
                        ...state,
                        items: state.items.map(user => user.id === action.id
                            ? { ...user, deleting: true }
                            : user
                        )
                    }
                case DELETE_SUCCESS:
                    console.log(state.users)
                    return {
                        ...state,
                        users: state.users.filter(user => user.id !== action.id)
                        // items: [
                        //     ...state.items.slice(0, action.payload),
                        //     ...state.items.slice(action.payload + 1)
                        // ]
                    };
                case DELETE_FAILURE:
                    return {
                        ...state,
                        items: state.items.map(user => {
                            if (user.id === action.id) {
                                const { deleting, ...userCopy } = user;
                                return { ...userCopy, deleteError: action.error };
                            }
                            return user;
                        })
                    };
                    
    }
}