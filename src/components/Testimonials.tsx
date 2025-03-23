
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, RetailTech Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    quote: "GeniusTech Solutions transformed our digital presence with a stunning e-commerce platform that has significantly boosted our online sales. Their team's attention to detail and commitment to quality is exceptional.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CTO, FitLife Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    quote: "The mobile application developed by GeniusTech has exceeded our expectations in every way. Our users love the intuitive interface and seamless functionality, which has led to exceptional growth in user engagement.",
    rating: 5
  },
  {
    id: 3,
    name: "Jennifer Patel",
    position: "COO, Global Enterprises Ltd.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    quote: "GeniusTech's CRM solution has revolutionized how we manage customer relationships. Their team's expertise and dedication to understanding our specific needs resulted in a system that has significantly improved our operational efficiency.",
    rating: 4
  },
  {
    id: 4,
    name: "Robert Martinez",
    position: "Director, HomeFind Realty",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    quote: "Working with GeniusTech has been a game-changer for our real estate business. Their innovative approach and technical prowess delivered a platform that has given us a significant edge in a competitive market.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="bg-secondary py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in animate-once">
          <h2 className="mb-4 heading-gradient">Client Testimonials</h2>
          <p className="text-lg text-foreground/80">
            Don't just take our word for it. Here's what our clients have to say about working with GeniusTech Solutions.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-12 relative z-10 animate-fade-in animate-once">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="md:w-1/3 flex flex-col items-center md:items-start">
                <div className="relative w-24 h-24 mb-4 animate-fade-in animate-once">
                  <div className="absolute inset-0 rounded-full bg-primary/10 animate-float"></div>
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-md relative z-10"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-1 animate-fade-in animate-once animate-delay-100">
                  {testimonials[activeIndex].name}
                </h3>
                
                <p className="text-sm text-foreground/70 mb-4 animate-fade-in animate-once animate-delay-200">
                  {testimonials[activeIndex].position}
                </p>
                
                <div className="flex space-x-1 animate-fade-in animate-once animate-delay-300">
                  {[...Array(5)].map((_, idx) => (
                    <Star 
                      key={idx} 
                      className={`h-4 w-4 ${
                        idx < testimonials[activeIndex].rating ? "text-primary fill-primary" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/3 relative">
                <div className="absolute -top-4 -left-2 text-5xl text-primary/20 font-serif">"</div>
                
                <blockquote className="relative z-10 pt-4 animate-fade-in animate-once animate-delay-200">
                  <p className="text-lg md:text-xl italic text-foreground/90 leading-relaxed">
                    {testimonials[activeIndex].quote}
                  </p>
                </blockquote>
                
                <div className="absolute -bottom-3 -right-2 text-5xl text-primary/20 font-serif">"</div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors duration-200 ${
                    idx === activeIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
