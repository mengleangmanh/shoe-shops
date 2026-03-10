import React from "react";
import { Link } from "react-router-dom";
import { useAddToCart } from "../hooks/useAddToCart";
import { useFavorites } from "../context/FavoritesContext";
import { ShoppingCart, Heart } from "lucide-react";

export default function ProductCard({ product, onAdd }) {
  const {
    addToCart: defaultAddToCart,
    isInCart,
    getCartQuantity,
  } = useAddToCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  // Use provided onAdd prop, or fallback to default cart functionality
  const handleAddToCart = () => {
    const addFunction = onAdd || defaultAddToCart;
    addFunction(product, { showFeedback: true });
  };

  const quantity = getCartQuantity(product.id);
  const inCart = isInCart(product.id);

  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition group bg-white">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden rounded-lg mb-3">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {inCart && (
            <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
              {quantity} in cart
            </div>
          )}
        </div>
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight mb-1">
          {product.name}
        </h3>
        <p className="text-gray-600 font-medium text-lg">${product.price}</p>
      </Link>

      <div className="flex gap-2 mt-3">
        <button
          onClick={handleAddToCart}
          disabled={inCart && quantity >= 10} // Prevent adding more than 10 of same item
          className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-medium transition-colors ${
            inCart
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          <ShoppingCart className="w-4 h-4" />
          <span>{inCart ? "Add More" : "Add to Cart"}</span>
        </button>
        <Link
          to={`/product/${product.id}`}
          className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700 hover:text-blue-600"
        >
          View Details
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(product);
          }}
          className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          title={
            isFavorite(product.id)
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          <Heart
            className={`w-4 h-4 ${isFavorite(product.id) ? "text-red-500 fill-current" : "text-gray-600"}`}
          />
        </button>
      </div>
    </div>
  );
}
