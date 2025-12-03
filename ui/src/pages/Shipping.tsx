import { MapPin, Truck, Package, CreditCard } from "lucide-react";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Shipping Information
        </h1>
        <p className="text-gray-600 text-base max-w-xl mx-auto">
          Review your shipping details and choose the best delivery option.
        </p>
      </div>

      {/* Shipping Form */}
      <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-xl border border-gray-200 rounded-2xl p-8">
        <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <MapPin className="text-blue-600 w-5 h-5" /> Shipping Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-sm"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-sm"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-sm"
          />
          <input
            type="text"
            placeholder="Pincode"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none text-sm"
          />
        </div>

        <textarea
          placeholder="Full Address (Street, Area, City)"
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 outline-none mb-6 text-sm"
        />

        {/* Delivery Options */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <Truck className="text-green-600 w-5 h-5" /> Delivery Options
        </h2>

        <div className="space-y-3 mb-6">
          {[
            { title: "Standard Delivery", desc: "3-5 days • ₹50" },
            { title: "Express Delivery", desc: "1-2 days • ₹120" },
            { title: "Free Delivery", desc: "5-7 days • ₹0" },
          ].map((opt) => (
            <label
              key={opt.title}
              className="flex items-center gap-3 p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100"
            >
              <input type="radio" name="delivery" />
              <div>
                <h3 className="text-gray-900 font-semibold text-sm">
                  {opt.title}
                </h3>
                <p className="text-gray-600 text-xs">{opt.desc}</p>
              </div>
            </label>
          ))}
        </div>

        {/* Order Summary */}
        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <Package className="text-orange-500 w-5 h-5" /> Order Summary
        </h2>

        <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-3">
          <div className="flex justify-between text-sm text-gray-700">
            <span>Subtotal</span>
            <span className="font-semibold text-gray-900">₹2,499</span>
          </div>
          <div className="flex justify-between text-sm text-gray-700">
            <span>Shipping</span>
            <span className="font-semibold text-gray-900">₹50</span>
          </div>
          <div className="flex justify-between border-t border-gray-300 pt-2 text-base font-bold text-gray-900">
            <span>Total</span>
            <span>₹2,549</span>
          </div>
        </div>

        {/* Payment Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 shadow-md transition-all">
          <CreditCard className="w-4 h-4" /> Proceed to Payment
        </button>
      </div>
    </div>
  );
}
