import { ShoppingCart } from "lucide-react";
import { Product } from "../types/Products";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export default function ProductCard({
  product,
  onViewDetails,
}: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="relative group bg-white/50 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
      {/* Product Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
        />

        {/* Stock Badge */}
        {product.stock < 10 && product.stock > 0 && (
          <div className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            Only {product.stock} left
          </div>
        )}
        {product.stock === 0 && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-lg font-bold">
            Out of Stock
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-5 flex flex-col justify-between h-56">
        <div>
          <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
            {product.name}
          </h3>
          <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full mt-1 inline-block">
            {product.category}
          </span>
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price & Buttons */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-extrabold text-gray-900">
            ₹{product.price.toFixed(2)}
          </span>

          <div className="flex gap-2">
            <button
              onClick={() => onViewDetails(product)}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition-colors font-medium text-sm"
            >
              Details
            </button>

            <button
              onClick={() => addToCart(product)}
              disabled={product.stock === 0}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all font-medium text-sm"
            >
              <ShoppingCart className="w-5 h-5" />
              Add
            </button>
          </div>
        </div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400 pointer-events-none transition-all duration-500"></div>
    </div>
  );
}
