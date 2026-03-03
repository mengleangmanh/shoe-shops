import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-cover bg-center h-screen bg-[url('https://saysh.com/cdn/shop/files/01_Saysh-Shoes_041_1.webp?v=1707541464&width=5760')] ">
      <div className="flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50 w-full bg-cover bg-center bg-no-repeat">
        <h1 className="text-4xl font-bold mb-4">Welcome to Shoe Shop</h1>
        <p className="text-lg mb-6">
          Discover the latest trends in footwear and step up your style game.
        </p>
        <Link
          to="/shop"
          className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
}
