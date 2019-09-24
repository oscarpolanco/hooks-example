import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {
  const [cartItems, setCardItem] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Items in your cart: {cartItems}
        </p>
        <button 
          onClick={() => {
            setCardItem([...cartItems, 'apple'])
          }}>
            Add card
        </button>
      </header>
    </div>
  );
}
