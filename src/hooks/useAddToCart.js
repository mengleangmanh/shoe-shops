import { useCart } from "../context/CartContext";

// Custom hook for consistent cart operations across all components
export function useAddToCart() {
  const { addToCart, items } = useCart();

  const handleAddToCart = (product, options = {}) => {
    addToCart(product);

    // Optional: Add visual feedback or analytics here
    if (options.showFeedback !== false) {
      // Could add toast notification here in the future
      console.log(`Added ${product.name} to cart`);
    }

    // Optional: Track analytics
    if (options.trackEvent) {
      // Could send analytics event here
      console.log(`Product added: ${product.id}`);
    }
  };

  // Check if product is already in cart
  const isInCart = (productId) => {
    return items.some((item) => item.id === productId);
  };

  // Get cart item quantity
  const getCartQuantity = (productId) => {
    const item = items.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  return {
    addToCart: handleAddToCart,
    isInCart,
    getCartQuantity,
  };
}
