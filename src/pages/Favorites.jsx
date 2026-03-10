import React from "react";
import { Link } from "react-router-dom";
import { Heart, ArrowLeft } from "lucide-react";
import { useFavorites } from "../context/FavoritesContext";
import ProductCard from "../components/ProductCard";

export default function Favorites() {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Link
            to="/"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 flex items-center space-x-2">
          <Heart className="text-red-500" size={32} />
          <span>My Favorites</span>
        </h1>
        <div className="w-32"></div> {/* Spacer for centering */}
      </div>

      {/* Content */}
      {favorites.length === 0 ? (
        <div className="text-center py-16">
          <Heart className="mx-auto text-gray-300 mb-4" size={64} />
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">
            No favorites yet
          </h2>
          <p className="text-gray-500 mb-6">
            Start adding items to your favorites by clicking the heart icon on
            products
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <p className="text-gray-600">
              {favorites.length} {favorites.length === 1 ? "item" : "items"} in
              your favorites
            </p>
          </div>

          {/* Favorites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((product) => (
              <div key={product.id} className="relative">
                <ProductCard product={product} />
                {/* Remove from favorites button */}
                <button
                  onClick={() => removeFromFavorites(product.id)}
                  className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow z-10"
                  title="Remove from favorites"
                >
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
