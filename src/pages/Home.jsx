import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function Home() {
  const scrollRef = useRef(null);
  const { addToCart } = useCart();

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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Get first 8 products for homepage showcase
  const featuredProducts = products.slice(0, 8);

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://saysh.com/cdn/shop/files/01_Saysh-Shoes_041_1.webp?v=1707541464&width=5760')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight">
            Step Into Style
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed">
            Discover the perfect pair for every occasion. Premium quality,
            unbeatable comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/shop"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Shop Collection
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                New Arrivals
              </h2>
              <p className="text-gray-600 text-sm">
                Discover our latest collection
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-hidden scroll-smooth pb-4"
          >
            {featuredProducts.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="min-w-[240px] md:min-w-[280px] flex-shrink-0 transition-transform hover:scale-105"
              >
                <ProductCard product={product} onAdd={addToCart} />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link
              to="/shop"
              className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors text-sm"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Free Shipping
              </h3>
              <p className="text-gray-600">On all orders over $50</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                24/7 Support
              </h3>
              <p className="text-gray-600">We're here to help anytime</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Easy Returns
              </h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                Secure Payment
              </h3>
              <p className="text-gray-600">100% secure checkout</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Running */}
            <Link
              to="/shop"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1542291026-7eec264c27ff')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold uppercase mb-2">
                      Running
                    </h3>
                    <p className="text-lg opacity-90">Performance & Comfort</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Lifestyle */}
            <Link
              to="/shop"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold uppercase mb-2">
                      Lifestyle
                    </h3>
                    <p className="text-lg opacity-90">Casual & Everyday</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Basketball */}
            <Link
              to="/shop"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold uppercase mb-2">
                      Basketball
                    </h3>
                    <p className="text-lg opacity-90">Court Performance</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Training */}
            <Link
              to="/shop"
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1549298916-b41d501d3772')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-cewhnter justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-3xl font-bold uppercase mb-2">
                      Training
                    </h3>
                    <p className="text-lg opacity-90">Fitness & Gym</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
