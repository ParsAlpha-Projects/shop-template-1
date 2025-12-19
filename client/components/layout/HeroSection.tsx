import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-white to-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-semibold text-sm mb-2">
                Premium Auto Parts
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary leading-tight">
                Quality Parts for Your Vehicle
              </h2>
              <p className="text-secondary/70 mt-4 text-lg">
                We are the comprehensive source for auto parts and the best
                choice for repair and maintenance.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-secondary font-medium flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <span>Premium Quality Parts</span>
              </p>
              <p className="text-secondary font-medium flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <span>Fast & Reliable Shipping</span>
              </p>
              <p className="text-secondary font-medium flex items-start gap-3">
                <span className="text-primary text-2xl">✓</span>
                <span>Expert Customer Support</span>
              </p>
            </div>

            <div className="flex gap-4">
              <Link
                to="/shop"
                className="bg-primary text-secondary px-8 py-3 rounded font-semibold hover:bg-opacity-90 transition inline-flex items-center gap-2"
              >
                Shop Now
                <ArrowRight size={18} />
              </Link>
              <button className="border-2 border-secondary text-secondary px-8 py-3 rounded font-semibold hover:bg-secondary hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>

          {/* Right - Featured product */}
          <div className="relative h-96 lg:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">🔧</div>
                <p className="text-secondary font-bold text-xl">
                  Premium Suspension System
                </p>
                <p className="text-secondary/60">
                  Advanced engineering for superior performance
                </p>
                <div className="pt-4">
                  <span className="text-primary font-bold text-2xl">
                    $149.99
                  </span>
                </div>
                <button className="bg-primary text-secondary px-6 py-2 rounded font-semibold hover:bg-opacity-90 transition w-full">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
