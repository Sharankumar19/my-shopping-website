import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-14 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">MyStore</h2>
            <p className="text-sm leading-relaxed">
              Discover the best fashion, accessories, and lifestyle products at
              unbeatable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <Link
                  className="hover:text-white hover:underline"
                  to="/aboutus"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white hover:underline"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:underline">
                  Returns
                </a>
              </li>
              <li>
                <Link
                  className="hover:text-white hover:underline"
                  to="/checkout"
                >
                  Shipping
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white hover:underline"
                  to="/tracking"
                >
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>

            <div className="flex items-center gap-3 mb-3">
              <Mail size={18} />
              <p className="text-sm">support@mystore.com</p>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <Phone size={18} />
              <p className="text-sm">+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-5 mt-4">
              <a href="#" className="hover:text-white transition">
                <Facebook />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-5"></div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-white">MyStore</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
