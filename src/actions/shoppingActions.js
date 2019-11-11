import { UPDATE_CART, REMOVE_FROM_CART, ADD_TO_CART, INCREMENT, DECREMENT } from '../constants/shoppingConstants';


export const addToCart = (item, id) => ({
    type: ADD_TO_CART,
    newItem: {...item},
    id
})

export const removeFromCart = (item, id) => ({
    type: REMOVE_FROM_CART,
    item,
    id
})

export const updateCart = (item, id) => ({
    type: UPDATE_CART,
    item,
    id
})

export const increment = count => ({
    type: INCREMENT,
    count,
})

export const decrement = count => ({
    type: DECREMENT,
    count
})