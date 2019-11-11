
import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css'

const Navbar = ({ activeTab, onTabChange }) => {
    return (
        <div className='navbar'>
        <nav className="App-nav">
            <ul>
                <li className={`App-nav-item ${activeTab === 0 && 'selected'}`}><a onClick={() => onTabChange(0)}>Items</a></li>
                <li className={`App-nav-item ${activeTab === 1 && 'selected'}`}><a onClick={() => onTabChange(1)}>Cart</a></li>
            </ul>
           
        </nav>
        <p>
            <Link to="/" className="brand-logo"><button className='btn btn-danger'>Logout</button></Link>
            </p>
</div>
    )
}

export default Navbar;