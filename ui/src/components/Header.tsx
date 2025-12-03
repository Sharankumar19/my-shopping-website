import { ShoppingCart, Store, Search, Menu } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useState } from "react";

interface HeaderProps {
  onCartClick: () => void;
}

export default function Header({ onCartClick }: HeaderProps) {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/75 shadow-xl border-b border-white/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <div className="flex items-center gap-2 cursor-pointer hover:scale-[1.03] transition-transform">
          <Store className="w-8 h-8 text-blue-600 drop-shadow-sm" />
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            ShopHub
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <a className="hover:text-blue-600 transition-all hover:scale-105 cursor-pointer">
            Home
          </a>
          <a className="hover:text-blue-600 transition-all hover:scale-105 cursor-pointer">
            Men
          </a>
          <a className="hover:text-blue-600 transition-all hover:scale-105 cursor-pointer">
            Women
          </a>
          <a className="hover:text-blue-600 transition-all hover:scale-105 cursor-pointer">
            Kids
          </a>
          <a className="hover:text-blue-600 transition-all hover:scale-105 cursor-pointer">
            Accessories
          </a>
        </nav>

        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex items-center bg-gray-100 px-5 py-2 rounded-full w-80 shadow-inner focus-within:ring-2 ring-blue-500 transition-all">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent ml-2 w-full outline-none text-gray-700"
          />
        </div>

        {/* Cart Button */}
        <button
          onClick={onCartClick}
          className="relative flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-blue-300/50 hover:scale-105 transition-all"
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="font-semibold">Cart</span>

          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-md">
              {totalItems}
            </span>
          )}
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-4"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-8 h-8 text-gray-700" />
        </button>
      </div>

      {/* Mobile Search */}
      <div className="px-6 pb-3 md:hidden">
        <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full shadow-inner">
          <Search className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search products..."
            className="bg-transparent ml-2 w-full outline-none text-gray-700"
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl px-6 py-5 border-t border-gray-200 shadow-lg space-y-4 text-lg font-medium">
          <a className="block hover:text-blue-600">Home</a>
          <a className="block hover:text-blue-600">Men</a>
          <a className="block hover:text-blue-600">Women</a>
          <a className="block hover:text-blue-600">Kids</a>
          <a className="block hover:text-blue-600">Accessories</a>
        </div>
      )}
    </header>
  );
}
