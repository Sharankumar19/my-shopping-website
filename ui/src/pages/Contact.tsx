import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-black to-gray-800 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
        <p className="mt-4 text-gray-300 text-lg">
          We're here to help you with anything you need
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Side – Contact Info */}
        <div className="space-y-8">
          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-600">support@mystore.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <div className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition">
            <div className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-red-600" />
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-gray-600">Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side – Contact Form */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full border border-gray-300 rounded-xl px-4 py-3 h-32 focus:ring-2 focus:ring-black outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition font-semibold"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="mt-10">
        <iframe
          className="w-full h-80 rounded-xl"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31098.28576828076!2d80.2707181!3d13.0826802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265e57a0b3df9%3A0xcba35795ad9f82bc!2sChennai!5e0!3m2!1sen!2sin!4v1688836031584"
        ></iframe>
      </div>
    </div>
  );
}
