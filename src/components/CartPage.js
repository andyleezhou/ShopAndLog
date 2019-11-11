import React from 'react';
import PropTypes from 'prop-types';
import Item from '../helpers/Item';
import { useSelector, useDispatch } from 'react-redux'
import '../CartPage.css'
import { increment, decrement } from '../actions/shoppingActions'

function CartPage({ items }) {

    const counter = useSelector(state=> state.count)
    const dispatch = useDispatch();
    

    const handleIncrement = e => {
        e.preventDefault();
        dispatch(increment(counter))
    }

    const handleDecrement = e => {
        e.preventDefault();
        dispatch(decrement(counter));
    }

    return (
        <ul className="CartPage-items">
            {items.map(item =>
                <li key={item.id} className="CartPage-item">
                <Item item = {item}>
                    <div className="CartItem-controls">
                    <button  className="CartItem-removeOne" onClick={handleDecrement}>-</button> <span className="CartItem-count">{counter.count}</span>
                    <button  className="CartItem-addOne" onClick={handleIncrement}>+</button> </div>
                </Item>
                </li>
            )}
        </ul>
    );
}

CartPage.propTypes = {
    items: PropTypes.array.isRequired
};


export default CartPage;