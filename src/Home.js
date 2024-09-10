import React from "react";
import AddCart from "./AddCart";
import Cart from "./Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./CartContext";
export const Home = () => {
  return (
    <div>
      <CartContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<AddCart />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </div>
  );
};
