import HeroSection from "@/components/layout/HeroSection";
import ProductCards from "@/components/layout/ProductCards";

export default function Index() {
  return (
    <div className="w-full bg-white">
      <HeroSection />

      {/* Featured Products Section */}
      <ProductCards title="Featured Products" />

      {/* Categories Section */}
      <section className="py-12 bg-muted">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-10">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Tires & Wheels", icon: "🛞", count: 245 },
              { name: "Brakes & Suspension", icon: "🛑", count: 189 },
              { name: "Engine Parts", icon: "⚙️", count: 312 },
              { name: "Filters & Fluids", icon: "🛢️", count: 156 },
            ].map((category) => (
              <div
                key={category.name}
                className="bg-white p-8 rounded-lg hover:shadow-lg transition-shadow cursor-pointer text-center"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {category.count} products
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-10">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Guaranteed",
                description:
                  "All our products are sourced from leading manufacturers and tested for quality.",
                icon: "✓",
              },
              {
                title: "Fast Shipping",
                description:
                  "Get your parts delivered within 2-3 business days with free shipping on orders over $100.",
                icon: "📦",
              },
              {
                title: "Expert Support",
                description:
                  "Our knowledgeable team is ready to help you find the perfect parts for your vehicle.",
                icon: "👨‍💼",
              },
            ].map((item) => (
              <div key={item.title} className="text-center space-y-4">
                <div className="text-5xl">{item.icon}</div>
                <h3 className="text-xl font-semibold text-secondary">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <ProductCards
        title="Best Sellers"
        products={[
          {
            id: 7,
            name: "All-Weather Windshield Wipers",
            category: "Wipers",
            price: 34.99,
            originalPrice: 49.99,
            rating: 4.9,
            reviews: 512,
            icon: "💧",
          },
          {
            id: 8,
            name: "LED Headlight Bulbs",
            category: "Lighting",
            price: 79.99,
            originalPrice: 119.99,
            rating: 4.8,
            reviews: 298,
            icon: "💡",
          },
          {
            id: 9,
            name: "Transmission Fluid",
            category: "Fluids",
            price: 22.99,
            originalPrice: 32.99,
            rating: 4.7,
            reviews: 187,
            icon: "🛢️",
          },
          {
            id: 10,
            name: "Spark Plugs Set",
            category: "Engine",
            price: 39.99,
            originalPrice: 59.99,
            rating: 4.8,
            reviews: 403,
            icon: "⚡",
          },
          {
            id: 11,
            name: "Radiator Coolant",
            category: "Cooling",
            price: 28.99,
            originalPrice: 42.99,
            rating: 4.6,
            reviews: 276,
            icon: "❄️",
          },
          {
            id: 12,
            name: "Door Lock Actuators",
            category: "Security",
            price: 89.99,
            originalPrice: 129.99,
            rating: 4.7,
            reviews: 145,
            icon: "🔐",
          },
        ]}
      />
    </div>
  );
}
