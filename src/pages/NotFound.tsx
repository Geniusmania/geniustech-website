
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Home, Search } from "lucide-react";
import { Helmet } from "react-helmet";
import { Button } from "../components/ui/button";
import { toast } from "../hooks/use-toast";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Search Initiated",
        description: `Searching for "${searchQuery}"...`,
      });
      
      // In a real application, this would redirect to search results
      // For now, we'll redirect to the home page after a short delay
      setTimeout(() => {
        navigate("/");
        toast({
          title: "Search Completed",
          description: `Redirected to home page with search term: "${searchQuery}"`,
        });
      }, 1500);
    } else {
      toast({
        title: "Search Error",
        description: "Please enter a search term",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Page Not Found | GeniusTech Solutions</title>
        <meta name="description" content="The page you're looking for doesn't exist or has been moved." />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-background px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
        
        <div className="relative z-10 text-center max-w-lg animate-fade-in animate-once">
          <div className="mb-8">
            <div className="relative">
              <div className="text-9xl font-bold text-primary/10">404</div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-foreground">
                Oops!
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
          
          <p className="text-foreground/70 mb-8">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          
          <form onSubmit={handleSearch} className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-foreground/40" />
              </div>
              <input
                type="text"
                placeholder="Search for what you're looking for..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-10 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </form>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => navigate("/")}
              className="inline-flex items-center justify-center"
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            
            <Button 
              onClick={() => window.history.back()} 
              variant="secondary"
              className="inline-flex items-center justify-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-foreground/60">
            <p>Need assistance? <Link to="/contact" className="text-primary hover:underline">Contact our support team</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
