
import { useState } from "react";
import { ArrowRight, Globe, Server, Code, Smartphone, PenTool, Users } from "lucide-react";
import { Link } from "react-router-dom";

const serviceItems = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites designed to convert visitors into customers with responsive layouts and SEO optimization.",
    details: ["Responsive Design", "E-commerce Solutions", "CMS Integration", "Performance Optimization"]
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver a seamless user experience on any device.",
    details: ["iOS & Android Apps", "Cross-platform Solutions", "UI/UX Design", "API Integration"]
  },
  {
    icon: Server,
    title: "Backend Solutions",
    description: "Scalable and secure server-side applications powered by modern technologies and best practices.",
    details: ["API Development", "Database Design", "Cloud Infrastructure", "Security Implementation"]
  },
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your business requirements and growth objectives.",
    details: ["Custom Applications", "Legacy System Upgrades", "Integration Services", "Maintenance & Support"]
  },
  {
    icon: PenTool,
    title: "IT Consulting",
    description: "Strategic technology consulting to help businesses leverage the right tools and processes.",
    details: ["Technology Assessment", "Digital Transformation", "IT Strategy", "Process Optimization"]
  },
  {
    icon: Users,
    title: "Training Programs",
    description: "Expert-led training programs to empower your team with the latest technical skills and knowledge.",
    details: ["Developer Training", "Technical Workshops", "Team Upskilling", "Customized Learning Paths"]
  }
];

const Services = ({ limit = 6 }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const displayServices = limit ? serviceItems.slice(0, limit) : serviceItems;
  
  return (
    <section id="services" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in animate-once">
        <h2 className="mb-4 heading-gradient">Our Services</h2>
        <p className="text-lg text-foreground/80">
          We provide end-to-end IT solutions tailored to your specific business needs.
          Our expertise covers a wide range of services designed to help you succeed.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayServices.map((service, index) => (
          <div 
            key={service.title}
            className="glass-card p-6 h-full flex flex-col justify-between animate-fade-in animate-once"
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/70 mb-4">{service.description}</p>
              
              {hoveredIndex === index && (
                <ul className="mt-4 space-y-2 animate-fade-in animate-once">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-foreground/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* <Link 
              to="/services" 
              className="inline-flex items-center mt-4 pt-4 border-t border-border text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Learn more
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link> */}
          </div>
        ))}
      </div>
      
      {limit && limit < serviceItems.length && (
        <div className="mt-12 text-center">
          <Link to="/services" className="button-secondary">
            View All Services
          </Link>
        </div>
      )}
    </section>
  );
};

export default Services;
