import { Search, ShoppingCart, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onSearchChange?: (query: string) => void;
  searchValue?: string;
}

export default function Header({ onSearchChange, searchValue = "" }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border">
      {/* Top bar with logo and actions */}
      <div className="bg-secondary text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingCart size={20} />
            <Heart size={20} />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold">CHROMIUM</h1>
            <p className="text-xs opacity-75">Auto Parts Store</p>
          </div>
          <button className="bg-primary text-secondary px-4 py-2 rounded text-sm font-medium hover:bg-opacity-90 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* Search bar section */}
      <div className="bg-primary/90 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <div className="text-white font-semibold text-sm whitespace-nowrap">
            Call Us: <br /> +1-800-CAR-PARTS
          </div>
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search parts by name, brand, category..."
                value={searchValue}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="w-full px-4 py-2.5 rounded text-sm placeholder-gray-500 bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-secondary text-white p-2 rounded hover:bg-opacity-90 transition">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
