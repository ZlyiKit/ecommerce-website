import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import { useCart } from '../components/CartContext';

export default function NavBar() {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Les Robes D'Europe</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
      </ul>
    </nav>
  );
}

