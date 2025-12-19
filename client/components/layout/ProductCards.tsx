import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  icon: string;
}

interface ProductCardsProps {
  title: string;
  products: Product[];
}

const defaultProducts: Product[] = [
  {
    id: 1,
    name: "Performance Tires",
    category: "Tires",
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviews: 156,
    icon: "🛞",
  },
  {
    id: 2,
    name: "Brake Pads Kit",
    category: "Brakes",
    price: 45.99,
    originalPrice: 65.99,
    rating: 4.9,
    reviews: 203,
    icon: "🛑",
  },
  {
    id: 3,
    name: "Suspension Springs",
    category: "Suspension",
    price: 120.99,
    originalPrice: 160.99,
    rating: 4.7,
    reviews: 89,
    icon: "⚙️",
  },
  {
    id: 4,
    name: "Engine Air Filter",
    category: "Engine",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.6,
    reviews: 342,
    icon: "💨",
  },
  {
    id: 5,
    name: "Battery Pack",
    category: "Electrical",
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviews: 127,
    icon: "🔋",
  },
  {
    id: 6,
    name: "Oil Filter Premium",
    category: "Filters",
    price: 18.99,
    originalPrice: 25.99,
    rating: 4.7,
    reviews: 456,
    icon: "🛢️",
  },
];

export default function ProductCards({ title, products = defaultProducts }: ProductCardsProps) {
  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-2">
            {title}
          </h2>
          <div className="h-1 w-16 bg-primary rounded"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Product Image Area */}
              <div className="relative h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center group">
                <div className="text-5xl">{product.icon}</div>
                {product.originalPrice && (
                  <div className="absolute top-4 right-4 bg-primary text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round(
                      ((product.originalPrice - product.price) /
                        product.originalPrice) *
                        100
                    )}
                    % OFF
                  </div>
                )}
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className="absolute top-4 left-4 bg-white p-2 rounded-full hover:bg-primary hover:text-white transition"
                >
                  <Heart
                    size={18}
                    fill={wishlist.includes(product.id) ? "currentColor" : "none"}
                  />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5 space-y-3">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {product.category}
                </p>
                <h3 className="text-lg font-bold text-secondary line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`text-sm ${
                          i < Math.floor(product.rating)
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button className="w-full bg-secondary text-white py-2.5 rounded font-semibold hover:bg-opacity-90 transition flex items-center justify-center gap-2 mt-4">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
