import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Search } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useFavorites } from "../context/FavoritesContext";

export default function Navbar() {
  const { totalQuantity } = useCart();
  const { favorites } = useFavorites();

  return (
    <nav className="bg-gray-100 px-20 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Left - Logo */}
      <div className="flex items-center">
        <Link to="/" className="font-bold text-xl">
          Shoe Shop
        </Link>
      </div>

      {/* Center - Navigation Links */}
      <div className="hidden md:flex space-x-8 ml-40 font-medium text-sm">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
      </div>

      {/* Right - Search + Icons */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="hidden md:flex items-center bg-white px-3 py-1 rounded-full">
          <Search size={16} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none ml-2 text-sm"
          />
        </div>

        <Link to="/favorites" className="relative inline-block">
          <Heart
            size={20}
            className="cursor-pointer hover:text-red-500 transition-colors"
          />
          {favorites.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full text-xs font-bold min-w-[1.25rem] h-5 flex items-center justify-center shadow-lg border-2 border-white">
              {favorites.length > 99 ? "99+" : favorites.length}
            </span>
          )}
        </Link>
        <Link to="/cart" className="relative inline-block">
          <ShoppingBag
            size={20}
            className="cursor-pointer hover:text-blue-600 transition-colors"
          />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full text-xs font-bold min-w-[1.25rem] h-5 flex items-center justify-center shadow-lg border-2 border-white">
              {totalQuantity > 99 ? "99+" : totalQuantity}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
