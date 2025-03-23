
import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "100+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "8", label: "Industry Awards" }
];

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Portfolio | GeniusTech Solutions</title>
        <meta name="description" content="Explore our portfolio of successful IT projects including web applications, mobile apps, and enterprise solutions delivered to clients across various industries." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32">
          <section className="container mx-auto px-6 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in animate-once">
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  Our <span className="heading-gradient">Portfolio</span>
                </h1>
                
                <p className="text-lg text-foreground/80 mb-8">
                  Explore our collection of successful projects delivered across various industries. 
                  Each project represents our commitment to excellence and innovation.
                </p>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="text-center p-4 glass-card animate-fade-in animate-once"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-foreground/70">{stat.label}</p>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact" 
                  className="button-primary inline-flex items-center animate-fade-in animate-once animate-delay-500"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="relative hidden lg:block animate-fade-in animate-once animate-delay-200">
                <div className="relative z-10">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                      alt="Portfolio Projects" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="absolute -top-6 -left-6 glass-card p-4 rounded-xl shadow-md border border-white/20 animate-fade-in animate-once animate-delay-300">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <div className="h-5 w-5 rounded-md bg-primary text-white flex items-center justify-center text-xs font-bold">
                          +
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Award Winning</p>
                        <p className="text-xs text-foreground/70">Design & Development</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background Elements */}
                <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
                <div className="absolute -z-10 -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
              </div>
            </div>
          </section>
          
          {/* Portfolio Items */}
          <Portfolio limit={0} />
          
          {/* CTA Section */}
          <section className="bg-secondary py-24 mt-16">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center animate-fade-in animate-once">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Ready to transform your business with technology?
                </h2>
                
                <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
                  Contact us today to discuss your project needs and discover how our expertise can help you achieve your goals.
                </p>
                
                <Link to="/contact" className="button-primary">
                  Get in Touch
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

export default PortfolioPage;
