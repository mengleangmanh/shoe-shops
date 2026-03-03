import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Welcome to the Shoe Shop</h1>
      <p>Browse our collection of comfortable and stylish shoes.</p>
      <Link to="/shop" className="mt-4 inline-block text-blue-600">
        Start Shopping
      </Link>
    </div>
  );
}
