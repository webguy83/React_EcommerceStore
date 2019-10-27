import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import UserProvider from './contexts/user';
import CartProvider from './contexts/cart';
import ShopProvider from './contexts/shop';

ReactDOM.render(
    <BrowserRouter>
        <CartProvider>
            <UserProvider>
                <ShopProvider>
                    <App />
                </ShopProvider>
            </UserProvider>
        </CartProvider>
    </BrowserRouter>
    , document.getElementById('root'));

