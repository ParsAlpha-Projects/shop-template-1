import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  activePath?: string;
}

const navItems = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "Products", path: "/products" },
  { label: "Gallery", path: "/gallery" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navigation({ activePath = "/" }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-border sticky top-[100px] z-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors ${
                  activePath === item.path
                    ? "text-primary border-b-2 border-primary pb-0"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side - Icons */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <button className="relative hover:text-primary transition">
                <Heart size={20} />
                <span className="absolute -top-2 -right-2 bg-primary text-secondary text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  0
                </span>
              </button>
              <button className="relative hover:text-primary transition">
                <ShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-primary text-secondary text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  0
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-4 py-2 rounded text-sm font-medium transition-colors ${
                  activePath === item.path
                    ? "bg-primary text-secondary"
                    : "text-secondary hover:bg-muted"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
