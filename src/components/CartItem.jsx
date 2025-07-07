import React from 'react';
import { useCart } from '../components/CartContext';
import '../styles/CartItem.css';

export default function CartItem({ item }) {
  const { removeFromCart } = useCart();

  const price = Number(item.price) || 0;

  const salePercent = item.sale
    ? Number(item.sale.replace('%', ''))
    : 0;

  const discountedPrice = salePercent > 0
    ? price * (1 - salePercent / 100)
    : price;

  return (
    <div className="cart-item">
  <img src={item.image} alt={item.name} />

  <div className="cart-item-content">
    <h4>{item.name}</h4>

    <div className="cart-item-price">
      {item.sale ? (
        <>
          <span className="original-price">€{item.price.toFixed(2)}</span>
          <span className="discount-price">€{discountedPrice}</span>
        </>
      ) : (
        <span className="discount-price">€{item.price.toFixed(2)}</span>
      )}
    </div>

    <button onClick={() => removeFromCart(item.id)}>Remove</button>
  </div>
</div>
  );
}
