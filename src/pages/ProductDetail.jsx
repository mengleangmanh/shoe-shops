import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useAddToCart } from "../hooks/useAddToCart";
import { useFavorites } from "../context/FavoritesContext";
import { ArrowLeft, ShoppingCart, Star, Heart } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart, isInCart, getCartQuantity } = useAddToCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  const product = products.find((p) => p.id === parseInt(id, 10));
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link
            to="/shop"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, { showFeedback: true });
  };

  const quantity = getCartQuantity(product.id);
  const inCart = isInCart(product.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-blue-600">
              Shop
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Additional Images Placeholder */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center"
                >
                  <span className="text-gray-400 text-xs">Image {i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  (4.5) • 128 reviews
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                ${product.price}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
              <div className="grid grid-cols-4 gap-2">
                {["7", "8", "9", "10", "11", "12"].map((size) => (
                  <button
                    key={size}
                    className="py-2 px-4 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Color
              </h3>
              <div className="flex space-x-3">
                {[
                  { name: "Black", color: "bg-black" },
                  { name: "White", color: "bg-white border border-gray-300" },
                  { name: "Blue", color: "bg-blue-600" },
                  { name: "Red", color: "bg-red-600" },
                ].map((colorOption) => (
                  <button
                    key={colorOption.name}
                    className={`w-8 h-8 rounded-full ${colorOption.color} hover:ring-2 hover:ring-blue-500 transition-all`}
                    title={colorOption.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quantity
              </h3>
              <div className="flex items-center space-x-3">
                <button className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50">
                  -
                </button>
                <span className="w-12 text-center">1</span>
                <button className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50">
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                disabled={inCart && quantity >= 10}
                className={`flex-1 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
                  inCart
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>
                  {inCart ? `Add More (${quantity} in cart)` : "Add to Cart"}
                </span>
              </button>
              <button
                onClick={() => toggleFavorite(product)}
                className="p-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Heart
                  className={`w-5 h-5 ${isFavorite(product.id) ? "text-red-500 fill-current" : "text-gray-600"}`}
                />
              </button>
            </div>

            {/* Product Description */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Description
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Experience ultimate comfort and style with our premium{" "}
                {product.name.toLowerCase()}. Crafted with high-quality
                materials and designed for both performance and fashion. Perfect
                for running, training, or everyday wear.
              </p>
            </div>

            {/* Product Features */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Features
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  <span>Premium quality materials</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  <span>Comfortable fit for all-day wear</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  <span>Durable construction</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  <span>Stylish design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              You Might Also Like
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover more styles that complement your choice
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id) // Exclude current product
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-square bg-gray-100">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Overlay with quick action */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                          <svg
                            className="w-5 h-5 text-gray-700"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="mb-3">
                      <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="w-4 h-4 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">
                          (4.5)
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                        {relatedProduct.name}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-gray-900">
                          ${relatedProduct.price}
                        </span>
                        <span className="text-sm text-green-600 font-medium">
                          Free shipping
                        </span>
                      </div>
                      <div className="bg-blue-600 text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              <span>View All Products</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
