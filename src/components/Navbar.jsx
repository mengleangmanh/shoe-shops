import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalQuantity } = useCart();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-100">
      <div className="space-x-4">
        <Link to="/" className="font-bold">
          Home
        </Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart ({totalQuantity})</Link>
      </div>
    </nav>
  );
}
