import {
  Store,
  ShoppingBag,
  Users,
  ShieldCheck,
  PackageCheck,
} from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative w-full h-72 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          About <span className="text-yellow-300">MyStore</span>
        </h1>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-indigo-700 flex items-center gap-2">
            <Store className="w-8 h-8" /> Our Story
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Welcome to <strong>MyStore</strong>, your trusted online destination
            for premium clothing and fashion products. We started with a simple
            vision — to deliver stylish, quality, and affordable products to
            customers across India. Today, we stand as a proud e-commerce brand
            combining quality with convenience.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1542293787938-c9e299b88047"
            alt="Fashion Store"
            className="rounded-xl shadow-lg object-cover w-full h-64"
          />
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-indigo-700 flex items-center gap-2 mb-4">
              <Users className="w-7 h-7" /> Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver high-quality fashion wear at the best price while
              ensuring a smooth and customer-friendly online shopping
              experience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-indigo-700 flex items-center gap-2 mb-4">
              <ShieldCheck className="w-7 h-7" /> Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To become India’s leading online fashion marketplace known for
              trust, quality, and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
          Why Choose <span className="text-yellow-500">MyStore?</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <ShoppingBag className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Premium Quality</h4>
            <p className="text-gray-600">
              Every product is carefully selected & quality checked.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <PackageCheck className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Fast Delivery</h4>
            <p className="text-gray-600">
              We ensure quick and safe delivery across India.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md text-center">
            <ShieldCheck className="w-12 h-12 mx-auto text-indigo-600 mb-4" />
            <h4 className="text-xl font-semibold mb-2">Secure Shopping</h4>
            <p className="text-gray-600">
              Your payments and personal data are always protected.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-10 text-gray-600 border-t">
        © {new Date().getFullYear()} MyStore — All Rights Reserved.
      </div>
    </div>
  );
}
