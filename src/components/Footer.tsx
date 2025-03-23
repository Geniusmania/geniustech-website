
import { ChevronRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-display font-bold flex items-center">
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  GeniusTech
                </span>
                <span className="text-foreground ml-1">Solutions</span>
              </span>
            </Link>
            
            <p className="text-foreground/70 mb-6">
              Transforming business through innovative technology solutions. We specialize in web development, mobile apps, and IT consulting.
            </p>
            
            <div className="flex space-x-4">
              {["twitter", "facebook", "linkedin", "instagram"].map((platform) => (
                <a
                  key={platform}
                  href={`https://${platform}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                  aria-label={`Follow on ${platform}`}
                >
                  <img 
                    src={`/placeholder.svg`} 
                    alt={platform}
                    className="w-4 h-4" 
                  />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {["Web Development", "Mobile App Development", "Backend Solutions", "Software Development", "IT Consulting", "Training Programs"].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-foreground/70 hover:text-primary transition-colors duration-200 flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 text-primary/60" />
                    <span>{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy" }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-foreground/70 hover:text-primary transition-colors duration-200 flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 text-primary/60" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-foreground/70 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 pl-10 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  required
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/50" />
              </div>
              
              <button type="submit" className="button-primary w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/70 text-sm mb-4 md:mb-0">
            &copy; {currentYear} GeniusTech Solutions. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground/70">
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/sitemap" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
