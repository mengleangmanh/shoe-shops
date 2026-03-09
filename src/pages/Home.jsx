import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <>
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
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <ProductCard
              product={{
                id: 1,
                name: "Running Shoes",
                price: 89.99,
                image: "/src/assets/photo_1.jpg",
              }}
              onAdd={() => {}}
            />
            <ProductCard
              product={{
                id: 2,
                name: "Casual Sneakers",
                price: 69.99,
                image: "/src/assets/photo_2.jpg",
              }}
              onAdd={() => {}}
            />
            <ProductCard
              product={{
                id: 3,
                name: "Formal Oxfords",
                price: 129.99,
                image: "/src/assets/photo_3.jpg",
              }}
              onAdd={() => {}}
            />
            <ProductCard
              product={{
                id: 4,
                name: "Hiking Boots",
                price: 149.99,
                image: "/src/assets/photo_4.jpg",
              }}
              onAdd={() => {}}
            />
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
