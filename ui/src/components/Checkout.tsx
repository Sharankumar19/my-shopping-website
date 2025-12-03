import { useState } from "react";
import {
  X,
  CreditCard,
  MapPin,
  User,
  Mail,
  Phone,
  Check,
  Truck,
} from "lucide-react";
import { useCart } from "../context/CartContext";

interface CheckoutProps {
  onClose: () => void;
}

export default function Checkout({ onClose }: CheckoutProps) {
  const { cart, getTotalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [deliveryOption, setDeliveryOption] = useState("Standard");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });

  const deliveryPrices: Record<string, number> = {
    Standard: 50,
    Express: 120,
    Free: 0,
  };

  const totalWithDelivery = getTotalPrice() + deliveryPrices[deliveryOption];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    setTimeout(() => {
      clearCart();
      onClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (orderPlaced) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Order Placed Successfully!
          </h2>
          <p className="text-gray-600">
            Thank you for your purchase. Your {deliveryOption} delivery is
            confirmed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-5xl w-full my-8 shadow-lg">
        {/* Header */}
        <div className="sticky top-0  flex justify-between items-center rounded-t-2xl z-10">
          <h2 className="text-2xl font-bold text-gray-900"></h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-10">
          {/* Left Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5" /> Contact Information
              </h3>
              <div className="space-y-4">
                <InputField
                  label="Full Name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                />
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  icon={<Mail className="w-4 h-4 inline mr-1" />}
                />
                <InputField
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  icon={<Phone className="w-4 h-4 inline mr-1" />}
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5" /> Shipping Address
              </h3>
              <div className="space-y-4">
                <InputField
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <InputField
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <InputField
                    label="ZIP Code"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5" /> Payment Information
              </h3>
              <div className="space-y-4">
                <InputField
                  label="Card Number"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <InputField
                    label="Expiry Date"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleChange}
                    placeholder="MM/YY"
                    maxLength={5}
                  />
                  <InputField
                    label="CVV"
                    name="cardCVV"
                    value={formData.cardCVV}
                    onChange={handleChange}
                    placeholder="123"
                    maxLength={4}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl hover:bg-blue-700 transition-colors text-lg font-semibold mt-2"
            >
              Place Order
            </button>
          </form>

          {/* Right Side */}
          <div className="space-y-6">
            {/* Delivery Options */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Truck className="w-5 h-5 text-green-600" /> Delivery Options
              </h3>
              <div className="space-y-3">
                {["Standard", "Express", "Free"].map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
                  >
                    <input
                      type="radio"
                      name="delivery"
                      checked={deliveryOption === option}
                      onChange={() => setDeliveryOption(option)}
                    />
                    <div>
                      <h4 className="text-gray-900 font-semibold text-sm">
                        {option} Delivery
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {option === "Standard"
                          ? "3-5 days • ₹50"
                          : option === "Express"
                          ? "1-2 days • ₹120"
                          : "5-7 days • ₹0"}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Order Summary
              </h3>
              <div className="bg-gray-50 rounded-xl p-4 space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3 items-center">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900">{item.name}</h4>
                      <p className="text-gray-600 text-sm">
                        Qty: {item.quantity} × ₹{item.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="text-right font-semibold text-gray-900">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total (incl. delivery):</span>
                    <span className="text-2xl">
                      ₹{totalWithDelivery.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable input field component (must start with capital letter)
const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  icon,
  maxLength,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  maxLength?: number;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {icon} {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
);
