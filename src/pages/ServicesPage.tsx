
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We begin by understanding your business, goals, and requirements through in-depth consultations."
  },
  {
    number: "02",
    title: "Planning",
    description: "We develop a comprehensive roadmap with timelines, milestones, and deliverables tailored to your needs."
  },
  {
    number: "03",
    title: "Design",
    description: "Our designers create wireframes and prototypes focused on usability, accessibility, and visual appeal."
  },
  {
    number: "04",
    title: "Development",
    description: "Our developers build your solution using modern technologies and best practices for optimal performance."
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous quality assurance ensures your solution works flawlessly across all devices and scenarios."
  },
  {
    number: "06",
    title: "Deployment",
    description: "We handle the launch process, ensuring a smooth transition and minimal disruption."
  },
  {
    number: "07",
    title: "Support",
    description: "Our relationship continues with ongoing maintenance, updates, and support to keep your solution running optimally."
  }
];

const packages = [
  {
    name: "Starter",
    description: "Perfect for small businesses just getting started with their digital presence.",
    price: "$1,999",
    features: [
      "Responsive Website Design",
      "Up to 5 Pages",
      "Basic SEO Setup",
      "Contact Form",
      "Mobile Optimization",
      "3 Rounds of Revisions",
      "2 Months Support"
    ],
    popular: false
  },
  {
    name: "Professional",
    description: "Comprehensive solution for growing businesses with more complex requirements.",
    price: "$4,999",
    features: [
      "Advanced Website with CMS",
      "Up to 15 Pages",
      "Comprehensive SEO",
      "Blog Setup",
      "Analytics Integration",
      "E-commerce Functionality",
      "Social Media Integration",
      "5 Rounds of Revisions",
      "6 Months Support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    description: "Tailored solutions for large organizations with specific needs and integrations.",
    price: "Custom",
    features: [
      "Custom Web Application",
      "Unlimited Pages",
      "Advanced Functionality",
      "Custom Integrations",
      "Performance Optimization",
      "Security Hardening",
      "Database Design",
      "API Development",
      "Unlimited Revisions",
      "12 Months Support"
    ],
    popular: false
  }
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | GeniusTech Solutions</title>
        <meta name="description" content="Explore our comprehensive range of IT services including web development, mobile app development, backend solutions, and IT consulting." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32">
          <section className="container mx-auto px-6 pb-16">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in animate-once">
              <h1 className="mb-4 heading-gradient">Our Services</h1>
              <p className="text-lg text-foreground/80">
                We offer a comprehensive range of technology solutions designed to help businesses thrive in the digital landscape.
              </p>
            </div>
          </section>
          
          {/* All Services - Fixed by removing the showFilters prop */}
          <Services limit={0} />
          
          {/* Our Process */}
          <section className="bg-secondary py-24 mt-16">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in animate-once">
                <h2 className="mb-4 heading-gradient">Our Process</h2>
                <p className="text-lg text-foreground/80">
                  We follow a systematic approach to ensure the successful delivery of every project.
                </p>
              </div>
              
              <div className="mt-16 relative">
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary/20 -translate-x-1/2"></div>
                
                {processSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`flex flex-col md:flex-row items-center gap-8 mb-16 relative animate-fade-in animate-once ${
                      index % 2 === 0 ? 'md:flex-row-reverse' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`md:w-1/2 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <div className="bg-primary/10 text-primary inline-block rounded-lg px-3 py-1 text-sm font-medium mb-3">
                        {step.number}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-foreground/70">{step.description}</p>
                    </div>
                    
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-white items-center justify-center z-10">
                      {step.number}
                    </div>
                    
                    <div className="md:w-1/2">
                      <div className="w-full aspect-video bg-secondary/50 rounded-2xl flex items-center justify-center">
                        <img 
                          src="/placeholder.svg" 
                          alt={step.title} 
                          className="w-16 h-16 opacity-30"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Pricing */}
          <section className="py-24">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in animate-once">
                <h2 className="mb-4 heading-gradient">Our Packages</h2>
                <p className="text-lg text-foreground/80">
                  Choose the perfect package for your business needs or contact us for a custom quote.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <div 
                    key={index}
                    className={`glass-card p-8 flex flex-col h-full relative overflow-hidden animate-fade-in animate-once ${
                      pkg.popular ? 'ring-2 ring-primary shadow-lg' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {pkg.popular && (
                      <div className="absolute top-5 right-0 bg-primary text-white text-xs py-1 px-3 transform rotate-45 translate-x-6">
                        Popular
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-foreground/70 text-sm mb-4">{pkg.description}</p>
                    <div className="mb-6">
                      <span className="text-3xl font-bold">{pkg.price}</span>
                      {pkg.price !== "Custom" && <span className="text-foreground/70 ml-1">/ project</span>}
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-foreground/80 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-auto">
                      <Link 
                        to="/contact" 
                        className={`w-full inline-block text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                          pkg.popular
                            ? "bg-primary text-white hover:bg-primary/90"
                            : "bg-secondary text-foreground hover:bg-secondary/80"
                        }`}
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 text-center animate-fade-in animate-once">
                <p className="text-foreground/70 mb-6">
                  Need a customized solution tailored to your specific requirements?
                </p>
                <Link to="/contact" className="button-primary inline-flex items-center">
                  Request a Custom Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
