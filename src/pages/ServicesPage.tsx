import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Footer from "../components/Footer";
import { Check, ArrowRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "We begin by understanding your business, goals, and requirements through in-depth consultations.",
    icon: "🔍"
  },
  {
    number: "02",
    title: "Planning",
    description: "We develop a comprehensive roadmap with timelines, milestones, and deliverables tailored to your needs.",
    icon: "📝"
  },
  {
    number: "03",
    title: "Design",
    description: "Our designers create wireframes and prototypes focused on usability, accessibility, and visual appeal.",
    icon: "🎨"
  },
  {
    number: "04",
    title: "Development",
    description: "Our developers build your solution using modern technologies and best practices for optimal performance.",
    icon: "💻"
  },
  {
    number: "05",
    title: "Testing",
    description: "Rigorous quality assurance ensures your solution works flawlessly across all devices and scenarios.",
    icon: "🔍"
  },
  {
    number: "06",
    title: "Deployment",
    description: "We handle the launch process, ensuring a smooth transition and minimal disruption.",
    icon: "🚀"
  },
  {
    number: "07",
    title: "Support",
    description: "Our relationship continues with ongoing maintenance, updates, and support to keep your solution running optimally.",
    icon: "🛡️"
  }
];

const benefits = [
  "Custom-tailored solutions for your unique business needs",
  "Transparent communication throughout the project lifecycle",
  "Industry-leading technologies and best practices",
  "Ongoing support and maintenance",
  "Scalable architecture that grows with your business",
  "Competitive pricing with flexible engagement models"
];

const ServicesPage = () => {
  useEffect(() => {
    // Simple scroll animation for elements with data-animate attribute
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Our Services | Yiedze Digital Solutions</title>
        <meta name="description" content="Explore our comprehensive range of IT services including web development, mobile app development, backend solutions, and IT consulting." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
         
          
          {/* Services Section */}
          <section className="py-10">
            <div className="container mx-auto px-6">
              <Services limit={0} />
            </div>
          </section>
          
          {/* Our Process Section */}
          <section className="py-10 bg-gradient-to-b from-transparent to-secondary/30">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16" data-animate>
                <h2 className="text-4xl font-bold mb-4 heading-gradient">Our Process</h2>
                <p className="text-lg text-foreground/80">
                  We follow a systematic approach to ensure the successful delivery of every project
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.slice(0, 4).map((step, index) => (
                  <div 
                    key={index}
                    className="bg-background/50 backdrop-blur-sm rounded-xl p-8 transition-all hover:shadow-xl hover:transform hover:-translate-y-1"
                    data-animate
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-5xl opacity-80">{step.icon}</span>
                      <span className="bg-primary text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processSteps.slice(4).map((step, index) => (
                  <div 
                    key={index + 4}
                    className="bg-background/50 backdrop-blur-sm rounded-xl p-8 transition-all hover:shadow-xl hover:transform hover:-translate-y-1"
                    data-animate
                    style={{ animationDelay: `${(index + 4) * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-5xl opacity-80">{step.icon}</span>
                      <span className="bg-primary text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Benefits Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/2" data-animate>
                  <h2 className="text-4xl font-bold mb-6 heading-gradient">Why Choose Us</h2>
                  <p className="text-lg text-foreground/80 mb-8">
                    When you partner with Yiedze Digital Solutions, you're not just hiring a service provider; 
                    you're collaborating with a team dedicated to your success.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="mt-1 bg-primary/10 rounded-full p-1">
                          <Check size={16} className="text-primary" />
                        </div>
                        <p>{benefit}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10">
                    <Link to="/contact" className="btn-primary px-6 py-3 rounded-full font-medium inline-flex items-center gap-2">
                      Schedule a Consultation <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
                
                <div className="lg:w-1/2 flex items-center justify-center" data-animate>
                  <div className="w-full aspect-square max-w-md bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-1">
                    <div className="w-full h-full bg-background/80 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <img 
                        src="/placeholder.svg" 
                        alt="Why choose us" 
                        className="w-3/4 h-3/4 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-6">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-12 text-center" data-animate>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Digital Presence?</h2>
                <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our tailored solutions can address your specific business challenges and drive growth.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="btn-primary px-8 py-3 rounded-full font-medium">
                    Contact Us Today
                  </Link>
                  <Link to="/portfolio" className="btn-secondary px-8 py-3 rounded-full font-medium">
                    Explore Our Work
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
      
      <style>{`
        .btn-primary {
          background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
          color: white;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          box-shadow: 0 10px 20px -10px var(--color-primary);
          transform: translateY(-2px);
        }
        
        .btn-secondary {
          background: var(--color-secondary-light);
          color: var(--color-foreground);
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background: var(--color-secondary);
        }
        
        .heading-gradient {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        }
        
        [data-animate] {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        [data-animate].animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
};

export default ServicesPage;