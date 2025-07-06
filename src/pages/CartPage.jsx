import React from 'react';
import { useCart } from '../components/CartContext';
import CartItem from '../components/CartItem';
import '../styles/CartPage.css';

export default function CartPage() {
  const { cartItems } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, i) => (
              <CartItem key={i} item={item} />
            ))}
          </div>
          <div className="cart-total">
            <strong>Total: €{total.toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
}
