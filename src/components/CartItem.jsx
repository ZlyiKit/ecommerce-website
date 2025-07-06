import React from 'react';
import { useCart } from '../components/CartContext';
import '../styles/CartItem.css';

export default function CartItem({ item }) {
  const { removeFromCart } = useCart();

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>€{item.price.toFixed(2)}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
}
