import { Link } from "react-router-dom";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">CHROMIUM</h3>
            <p className="text-white/70 text-sm">
              Your trusted source for premium auto parts and accessories.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-white/70 hover:text-primary transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="text-white/70 hover:text-primary transition"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white/70 hover:text-primary transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white/70 hover:text-primary transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition"
                >
                  Tires & Wheels
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition"
                >
                  Brakes & Suspension
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition"
                >
                  Engine Parts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/70 hover:text-primary transition"
                >
                  Filters & Fluids
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-white/70">+1-800-CAR-PARTS</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-white/70">support@chromium.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-white/70">
                  123 Auto Drive, Detroit, MI 48201
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
            <p>&copy; 2024 CHROMIUM Auto Parts. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition">
                Shipping Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
