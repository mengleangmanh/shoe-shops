import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;

    const scrollAmount = 450;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      if (
        current.scrollLeft + current.offsetWidth >=
        current.scrollWidth - 10
      ) {
        current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const products = [
    {
      id: 1,
      name: "Classic Running Shoes",
      price: 89.99,
      image: "/src/assets/photo_1.jpg",
    },
    {
      id: 2,
      name: "Performance Basketball Sneakers",
      price: 120.0,
      image: "/src/assets/photo_2.jpg",
    },
    {
      id: 3,
      name: "Comfortable Casual Loafers",
      price: 59.5,
      image: "/src/assets/photo_3.jpg",
    },
    {
      id: 4,
      name: "Speed Running Shoes",
      price: 89.99,
      image: "/src/assets/photo_4.jpg",
    },
    {
      id: 5,
      name: "Durable Basketball Sneakers",
      price: 120.0,
      image: "/src/assets/photo_5.jpg",
    },
    {
      id: 6,
      name: "Elegant Casual Loafers",
      price: 59.5,
      image: "/src/assets/photo_6.jpg",
    },
    {
      id: 7,
      name: "Lightweight Running Shoes",
      price: 89.99,
      image: "/src/assets/photo_7.jpg",
    },
    {
      id: 8,
      name: "High-Top Basketball Sneakers",
      price: 120.0,
      image: "/src/assets/photo_8.jpg",
    },
    {
      id: 9,
      name: "Stylish Casual Loafers",
      price: 59.5,
      image: "/src/assets/photo_9.jpg",
    },
    {
      id: 10,
      name: "Trail Running Shoes",
      price: 89.99,
      image: "/src/assets/photo_10.jpg",
    },
    {
      id: 11,
      name: "Court Basketball Sneakers",
      price: 120.0,
      image: "/src/assets/photo_11.png",
    },
    {
      id: 12,
      name: "Formal Casual Loafers",
      price: 59.5,
      image: "/src/assets/photo_12.png",
    },
    {
      id: 13,
      name: "Marathon Running Shoes",
      price: 89.99,
      image: "/src/assets/photo_13.png",
    },
    {
      id: 14,
      name: "Street Basketball Sneakers",
      price: 120.0,
      image: "/src/assets/photo_14.png",
    },
    {
      id: 15,
      name: "Casual Dress Loafers",
      price: 59.5,
      image: "/src/assets/photo_15.png",
    },
    {
      id: 16,
      name: "Jogging Running Shoes",
      price: 89.99,
      image: "/src/assets/photo_16.png",
    },
    {
      id: 19,
      name: "Racing Running Shoes",
      price: 89.99,
      image: "/src/assets/photo_19.png",
    },
    {
      id: 20,
      name: "Pro Basketball Sneakers",
      price: 120.0,
      image: "/src/assets/photo_20.png",
    },
  ];

  return (
    <>
      <div className="bg-cover bg-center h-screen bg-[url('https://saysh.com/cdn/shop/files/01_Saysh-Shoes_041_1.webp?v=1707541464&width=5760')] ">
        <div className="flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50 w-full">
          <h1 className="text-4xl font-bold mb-4">Welcome to Shoe Shop</h1>
          <Link
            to="/shop"
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div className="relative px-6 py-20 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold uppercase tracking-tighter">
            New Arrivals
          </h2>

          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-3 bg-white border rounded-full hover:bg-gray-100 shadow-sm"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-sm"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth pb-10"
          onMouseEnter={() => {}}
        >
          {products.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="min-w-[450px] flex-shrink-1 transition-transform hover:scale-[1.02]"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center py-12 bg-gray-100 h-1/2 grid grid-cols-4">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
          <p className="text-gray-600">On all orders over $50</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">We're here to help anytime</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
          <p className="text-gray-600">30-day return policy</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
          <p className="text-gray-600">100% secure checkout</p>
        </div>
      </div>

      <div className="text-center py-12 bg-gray-50 h-screen grid grid-cols-2 grid-rows-2"></div>
    </>
  );
}
