import { X, ShoppingCart, Package } from "lucide-react";
import { Product } from "../types/Products";
import { useCart } from "../context/CartContext";

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

export default function ProductDetail({
  product,
  onClose,
}: ProductDetailProps) {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={product.image_url}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center gap-3 mb-6">
                <Package className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700">
                  {product.stock > 0 ? (
                    <span>
                      <span className="font-semibold text-green-600">
                        In Stock
                      </span>
                      {" - "}
                      {product.stock} available
                    </span>
                  ) : (
                    <span className="font-semibold text-red-600">
                      Out of Stock
                    </span>
                  )}
                </span>
              </div>

              <div className="border-t pt-6 mt-auto">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gray-600">Price:</span>
                  <span className="text-4xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-lg font-semibold"
                >
                  <ShoppingCart className="w-6 h-6" />
                  {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
