import React, { useState } from 'react';
import Navbar from './Navbar';
import '../App.css'
import ItemPage from './ItemPage';
import { items } from '../helpers/static-data';
import CartPage from '../components/CartPage';


const ShoppingPage = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [cart, updateCart] = useState([]);

    const handleTabChange = index => {
        setActiveTab(index);
    }

    const handleAddToCart = item => {
        updateCart([...cart, item.id])
    }

    const renderCart = () => {
        // Count how many of each item is in the cart
        let itemCounts = cart.reduce((itemCounts, itemId) => {
          itemCounts[itemId] = itemCounts[itemId] || 0;
          itemCounts[itemId]++;
          return itemCounts;
        }, {});
        // Create an array of items
        let cartItems = Object.keys(itemCounts).map(itemId => {
          // Find the item by its id
          let item = items.find(item => item.id === parseInt(itemId, 10)
          );
          // Create a new "item" and add the 'count' property
          return { ...item, count: itemCounts[itemId] }
        });
        return (
          <CartPage items={cartItems} />
        );
      }
    
      const renderContent = () => {
        switch (activeTab) {
          case 0:
            return <ItemPage items={items} onAddToCart={handleAddToCart} />
          case 1:
            return renderCart();
          default:
            return null;
    
        }
      }


    return (
        <div className='App'>
            <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
            <main className='App-content'>
            {renderContent()}
            </main>
        </div>
    );
}

export default ShoppingPage;