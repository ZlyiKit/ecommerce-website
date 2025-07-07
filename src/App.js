import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';

import NavBar from './components/NavBar';
import Landing from './components/Landing';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/CartPage';
import PaymentPage from "./pages/PaymentPage";
import SurveyPage from "./pages/SurveyPage";

export default function App() {
  return (
    <CartProvider>
      <Router basename="/ecommerce-website">
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
           <Route path="/payment" element={<PaymentPage />} /> 
           <Route path="/survey" element={<SurveyPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}
