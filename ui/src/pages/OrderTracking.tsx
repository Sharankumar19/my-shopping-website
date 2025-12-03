import { PackageSearch, Truck, CheckCircle2, Clock } from "lucide-react";

export default function OrderTracking() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Track Your Order
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Enter your order ID to view real-time tracking updates.
        </p>
      </div>

      {/* Search Box */}
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
        <div className="flex items-center gap-3 border border-gray-300 rounded-xl overflow-hidden">
          <input
            type="text"
            placeholder="Enter Order ID (e.g. ORD123456)"
            className="flex-1 px-4 py-3 outline-none text-gray-700"
          />
          <button className="bg-blue-600 text-white px-6 py-3 font-semibold hover:bg-blue-700 transition-all">
            Track
          </button>
        </div>
      </div>

      {/* Tracking Status Section */}
      <div className="max-w-3xl mx-auto mt-16 bg-white shadow-xl border border-gray-200 rounded-2xl p-10">
        {/* Order Summary */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <PackageSearch className="text-blue-600" /> Order Summary
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <p>
              <span className="font-semibold text-gray-800">Order ID:</span>{" "}
              ORD123456
            </p>
            <p>
              <span className="font-semibold text-gray-800">Placed On:</span> 22
              Nov 2025
            </p>
            <p>
              <span className="font-semibold text-gray-800">
                Estimated Delivery:
              </span>{" "}
              28 Nov 2025
            </p>
            <p>
              <span className="font-semibold text-gray-800">Payment:</span> Paid
            </p>
          </div>
        </div>

        {/* Tracking Steps */}
        <div className="space-y-10">
          {/* Step 1 */}
          <div className="flex items-start gap-4">
            <CheckCircle2 className="text-green-500 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Order Confirmed
              </h3>
              <p className="text-gray-600">
                Your order has been confirmed and is being processed.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                22 Nov 2025 • 10:15 AM
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-4">
            <Truck className="text-blue-600 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Order Shipped
              </h3>
              <p className="text-gray-600">
                Your package is on the way to the nearest hub.
              </p>
              <p className="text-gray-400 text-sm mt-1">
                23 Nov 2025 • 4:45 PM
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-4 opacity-70">
            <Clock className="text-gray-400 w-8 h-8" />
            <div>
              <h3 className="text-xl font-semibold text-gray-700">
                Out for Delivery
              </h3>
              <p className="text-gray-600">
                The delivery agent will reach your location soon.
              </p>
              <p className="text-gray-400 text-sm mt-1">Expected 28 Nov 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
