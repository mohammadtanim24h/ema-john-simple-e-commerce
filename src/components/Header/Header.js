import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <ul>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/order">Order</a></li>
                <li><a href="/inventory">Inventory</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    );
};

export default Header;