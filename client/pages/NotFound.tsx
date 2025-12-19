import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50 py-20">
      <div className="text-center space-y-8 max-w-md px-4">
        <div>
          <h1 className="text-7xl lg:text-8xl font-bold text-primary mb-4">
            404
          </h1>
          <p className="text-3xl lg:text-4xl font-bold text-secondary mb-3">
            Page Not Found
          </p>
          <p className="text-lg text-muted-foreground">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-primary text-secondary px-8 py-4 rounded font-semibold hover:bg-opacity-90 transition text-lg"
          >
            Return to Home
            <ArrowRight size={20} />
          </Link>
          <p className="text-sm text-muted-foreground">
            Or explore our{" "}
            <Link to="/" className="text-primary hover:underline">
              full catalog
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
