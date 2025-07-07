import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import CartItem from "../components/CartItem";
import "../styles/CartPage.css";
import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom"; // 👈 import

export default function CartPage() {
  const { cartItems } = useCart();
  const navigate = useNavigate(); // 👈 init

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleProceedToPayment = () => {
    navigate("/payment"); // 👈 go to new page
  };

  return (
    <>
      <ProgressBar currentStep={2} />
      <div className="cart-page">
        <h2>Your Cart</h2>

        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map((item, idx) => (
                <CartItem key={idx} item={item} />
              ))}
            </div>

            <div className="cart-summary">
              <h3>Order Summary</h3>
              <p>Items: {cartItems.length}</p>
              <p>
                Total: <strong>€{total.toFixed(2)}</strong>
              </p>
              <button onClick={handleProceedToPayment}>
                Proceed to Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}