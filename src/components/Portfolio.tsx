
import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Plus } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A comprehensive e-commerce solution with inventory management, payment processing, and customer analytics.",
    client: "RetailTech Inc.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"]
  },
  {
    id: 2,
    title: "Health & Fitness App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A mobile application for tracking workouts, nutrition, and personal health metrics with social features.",
    client: "FitLife Solutions",
    technologies: ["React Native", "Firebase", "TensorFlow"]
  },
  {
    id: 3,
    title: "Enterprise CRM System",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A custom customer relationship management system with advanced reporting and automation.",
    client: "Global Enterprises Ltd.",
    technologies: ["Angular", "ASP.NET Core", "SQL Server", "Azure"]
  },
  {
    id: 4,
    title: "Real Estate Portal",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "A property listing and management platform with virtual tours, appointment scheduling, and analytics.",
    client: "HomeFind Realty",
    technologies: ["Vue.js", "Laravel", "MySQL", "AWS"]
  },
  {
    id: 5,
    title: "Supply Chain Management",
    category: "Software Development",
    image: "https://images.unsplash.com/photo-1566232392379-afd9298e6a14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    description: "An end-to-end supply chain management solution with real-time tracking, analytics, and forecasting.",
    client: "LogiTech Solutions",
    technologies: ["React", "Python", "PostgreSQL", "Docker"]
  },
  {
    id: 6,
    title: "Educational Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    description: "An interactive learning management system with course creation, student tracking, and assessment tools.",
    client: "EduTech Innovations",
    technologies: ["Next.js", "Express", "MongoDB", "WebRTC"]
  }
];

const categories = ["All", "Web Development", "Mobile Development", "Software Development"];

const Portfolio = ({ limit = 6, showFilters = true }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeItem, setActiveItem] = useState<number | null>(null);
  
  const filteredItems = portfolioItems.filter(item => 
    activeCategory === "All" || item.category === activeCategory
  ).slice(0, limit);
  
  return (
    <section id="portfolio" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in animate-once">
        <h2 className="mb-4 heading-gradient">Our Portfolio</h2>
        <p className="text-lg text-foreground/80">
          Explore our diverse collection of projects that showcase our expertise and innovation in creating digital solutions.
        </p>
      </div>
      
      {showFilters && (
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in animate-once animate-delay-200">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <div 
            key={item.id}
            className="group relative overflow-hidden rounded-2xl card-hover animate-fade-in animate-once"
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setActiveItem(item.id)}
            onMouseLeave={() => setActiveItem(null)}
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {activeItem === item.id && (
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="mb-2 animate-fade-in animate-once">
                    <span className="text-xs font-medium px-3 py-1 bg-primary/20 text-primary rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 animate-fade-in animate-once animate-delay-100">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-foreground/80 mb-4 line-clamp-2 animate-fade-in animate-once animate-delay-200">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4 animate-fade-in animate-once animate-delay-300">
                    {item.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-2 py-1 bg-background/70 backdrop-blur-sm rounded text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    to={`/portfolio/${item.id}`} 
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors animate-fade-in animate-once animate-delay-400"
                  >
                    View Project Details
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {limit < portfolioItems.length && (
        <div className="mt-12 text-center animate-fade-in animate-once animate-delay-500">
          <Link to="/portfolio" className="button-secondary inline-flex items-center">
            <Plus className="mr-2 h-4 w-4" />
            View All Projects
          </Link>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
