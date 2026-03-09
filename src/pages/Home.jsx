import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Running Shoes",
      price: 89.99,
      image: "/src/assets/photo_1.jpg",
    },
    {
      id: 2,
      name: "Basketball Sneakers",
      price: 120.0,
      image: "/src/assets/photo_2.jpg",
    },
    {
      id: 3,
      name: "Casual Loafers",
      price: 59.5,
      image: "/src/assets/photo_3.jpg",
    },
    {
      id: 1,
      name: "Running Shoes",
      price: 89.99,
      image: "/src/assets/photo_4.jpg",
    },
    {
      id: 2,
      name: "Basketball Sneakers",
      price: 120.0,
      image: "/src/assets/photo_5.jpg",
    },
    {
      id: 3,
      name: "Casual Loafers",
      price: 59.5,
      image: "/src/assets/photo_6.jpg",
    },
    {
      id: 1,
      name: "Running Shoes",
      price: 89.99,
      image: "/src/assets/photo_7.jpg",
    },
    {
      id: 2,
      name: "Basketball Sneakers",
      price: 120.0,
      image: "/src/assets/photo_8.jpg",
    },
    {
      id: 3,
      name: "Casual Loafers",
      price: 59.5,
      image: "/src/assets/photo_9.jpg",
    },
    {
      id: 1,
      name: "Running Shoes",
      price: 89.99,
      image: "/src/assets/photo_10.jpg",
    },
    {
      id: 2,
      name: "Basketball Sneakers",
      price: 120.0,
      image: "/src/assets/photo_11.png",
    },
    {
      id: 3,
      name: "Casual Loafers",
      price: 59.5,
      image: "/src/assets/photo_12.png",
    },
    {
      id: 1,
      name: "Running Shoes",
      price: 89.99,
      image: "/src/assets/photo_13.png",
    },
    {
      id: 2,
      name: "Basketball Sneakers",
      price: 120.0,
      image: "/src/assets/photo_14.png",
    },
    {
      id: 3,
      name: "Casual Loafers",
      price: 59.5,
      image: "/src/assets/photo_15.png",
    },
    {
      id: 1,
      name: "Running Shoes",
      price: 89.99,
      image: "/src/assets/photo_16.png",
    },
    {
      id: 2,
      name: "Basketball Sneakers",
      price: 120.0,
      image: "/src/assets/photo_2.jpg",
    },
    {
      id: 3,
      name: "Casual Loafers",
      price: 59.5,
      image: "/src/assets/photo_3.jpg",
    },
    {
      id: 1,
      name: "Running Shoes",
      price: 89.99,
      image: "/src/assets/photo_19.png",
    },
    {
      id: 2,
      name: "Basketball Sneakers",
      price: 120.0,
      image: "/src/assets/photo_20.png",
    },
  ];
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
      <div className="h-screen px-11 mt-11 max-w-8xl mx-auto">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {products.map((product) => (
            <div key={product.id} className="min-w-[250px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="bg-black max-w-8xl mx-auto h-16 mb-11 "></div>
      </div>
    </>
  );
}
