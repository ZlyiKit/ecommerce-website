import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import "../styles/PaymentPage.css";

export default function PaymentPage() {
  const { clearCart } = useCart();
  const navigate = useNavigate();
  const [orderNumber, setOrderNumber] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedOrder = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(generatedOrder);
    clearCart();
  };

  if (orderNumber) {
    return (
      <>
        <ProgressBar currentStep={3} />
        <div className="confirmation-container">
          <div className="confirmation">
            <h2>Thank you for your purchase!</h2>
            <p>
              Your order number is <strong>#{orderNumber}</strong>
            </p>
            <p>A confirmation email will be sent shortly.</p>
            <button
              className="survey-button"
              onClick={() => navigate("/survey")}
            >
              Complete the Survey
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ProgressBar currentStep={3} />
      <div className="payment-page">
        <h2>Payment Information</h2>
        <form className="payment-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input type="text" name="name" required />
          </label>

          <label>
            Email
            <input type="email" name="email" required />
          </label>

          <label>
            Card Number
            <input
              type="text"
              name="cardNumber"
              placeholder="1234567812345678"
              required
              maxLength={16}
              inputMode="numeric"
              pattern="\d{16}"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "").slice(0, 16);
              }}
            />
          </label>

          <label>
            CVV
            <input
              type="text"
              name="cvv"
              placeholder="123"
              required
              maxLength={3}
              inputMode="numeric"
              pattern="\d{3}"
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, "").slice(0, 3);
              }}
            />
          </label>

          <div className="payment-buttons">
            <button type="submit">Confirm Payment</button>
            <button type="button" onClick={() => navigate("/cart")}>
              Back to Cart
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
