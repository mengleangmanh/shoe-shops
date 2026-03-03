import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Search } from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { totalQuantity } = useCart();

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

        <Heart size={20} className="cursor-pointer" />
        <Link to="/cart" className="relative inline-block">
          <ShoppingBag size={20} className="cursor-pointer" />
          {totalQuantity > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {totalQuantity}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
