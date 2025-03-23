
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in animate-once">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm border border-primary/20 animate-fade-in animate-once animate-delay-200">
              IT Services & Digital Solutions
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="heading-gradient">Innovative</span> Tech Solutions for Your Business
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-xl animate-fade-in animate-once animate-delay-300">
              We build cutting-edge digital solutions to transform your business. From web development to IT consulting, we turn your vision into reality.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2 animate-fade-in animate-once animate-delay-400">
              <Link to="/contact" className="button-primary">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link to="/services" className="button-secondary">
                Our Services
              </Link>
            </div>
            
            <div className="flex items-center space-x-6 pt-4 animate-fade-in animate-once animate-delay-500">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-xs text-primary font-medium">99%</div>
                <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center text-xs text-primary-foreground font-medium">24/7</div>
                <div className="w-10 h-10 rounded-full bg-primary/40 flex items-center justify-center text-xs text-primary-foreground font-medium">+5y</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Client satisfaction with 24/7 support & 5+ years experience
              </p>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-3xl"></div>
            <div className="relative animate-float">
              <div className="relative z-10 glass overflow-hidden rounded-2xl shadow-lg animate-scale-up animate-once">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                    alt="Digital Solutions" 
                    className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl"></div>
              </div>
              
              <div className="absolute top-5 -left-12 glass p-4 rounded-xl shadow-md border border-white/20 animate-fade-in animate-once animate-delay-300">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <div className="h-6 w-6 rounded-md bg-primary text-white flex items-center justify-center text-xs font-bold">
                      +
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">New Project</p>
                    <p className="text-xs text-foreground/70">Web Development</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-10 right-10 glass p-4 rounded-xl shadow-md border border-white/20 animate-fade-in animate-once animate-delay-400">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">100+</p>
                  <p className="text-sm text-foreground/70">Projects Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl"></div>
    </section>
  );
};

export default Hero;
