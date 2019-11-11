import {
    ADD_TO_CART,
    UPDATE_CART,
    REMOVE_FROM_CART
} from '../constants/shoppingConstants';

const initialState = {
    itemList: {
    cart: [
        {
            _id: '00',
            name: 'TEST ITEM',
        }
    ]
    },
    newItem: { item: null},
    activeItem: {item: null},
    deletedItem: {item: null},
    updatedItem: {item: null},
};

export function shopping (state = initialState, action) {
    let index;
    let updatedState;

    switch (action.type) {
        
        case ADD_TO_CART:
            index = state.itemsList.cart.findIndex(item=> item._id === action._id)
            console.log(state.itemsList.cart[index])
           updatedState = [...state]
           updatedState[index].cart.push(action.item)
           return updatedState;

        case REMOVE_FROM_CART:
            index = state.itemsList.cart.findIndex(item => item._id === action._id)
            let copyCart = state.itemsList.cart.slice();
            let deleted = copyCart.splice(index, 1)[0];

            return {
                ...state,
                itemsList: {
                    ...state.itemsList,
                    cart: copyCart
                },
                deletedItem: {
                    ...state.deletedItem,
                    item: deleted
                }
            };
            
        case UPDATE_CART:
            index = state.itemsList.cart.findIndex(item => item._id === action._id)
            let cartCopy = state.itemsList.cart.slice();
            let updatedCart = cartCopy.concat(state.itemList.cart)
            return {
                ...state,
                itemsList: {
                    ...state.itemList,
                    cart: cartCopy
                },
                updatedItem: {
                    ...state.updatedItem,
                    item: updatedCart
                }
            }
        
        default:
            return state;
    }       
}