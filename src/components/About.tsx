
import { CheckCircle, TrendingUp, Zap, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";

const statsItems = [
  { value: "5+", label: "Years Experience" },
  { value: "100+", label: "Projects Completed" },
  { value: "30+", label: "Happy Clients" },
  { value: "4", label: "Industry Awards" }
];

const valueItems = [
  {
    icon: TrendingUp,
    title: "Innovation",
    description: "We stay at the forefront of technological advancements to deliver cutting-edge solutions."
  },
  {
    icon: CheckCircle,
    title: "Quality",
    description: "We're committed to delivering high-quality work that exceeds expectations and stands the test of time."
  },
  {
    icon: Zap,
    title: "Efficiency",
    description: "We value your time and resources, focusing on efficient processes and timely delivery."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in transparent communication and collaboration throughout the project lifecycle."
  }
];

const About = ({ isHomepage = true }) => {
  return (
    <section id="about" className={`${isHomepage ? 'section-container' : 'py-12'}`}>
      {isHomepage && (
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in animate-once">
          <h2 className="mb-4 heading-gradient">About Us</h2>
          <p className="text-lg text-foreground/80">
            GeniusTech Solutions is a team of passionate IT professionals dedicated to helping businesses thrive in the digital landscape.
          </p>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1 animate-fade-in animate-once">
          <div className="relative z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="GeniusTech Team" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-card p-4 rounded-xl">
                  <div className="grid grid-cols-4 divide-x divide-border">
                    {statsItems.map((stat, index) => (
                      <div key={index} className="px-2 text-center">
                        <p className="text-xl sm:text-2xl font-bold text-primary">{stat.value}</p>
                        <p className="text-xs sm:text-sm text-foreground/70">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 glass-card p-4 rounded-xl shadow-md border border-white/20 hidden md:block animate-fade-in animate-once animate-delay-300">
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm font-medium">Certified Excellence</p>
                  <p className="text-xs text-foreground/70">Industry Recognition</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="order-1 lg:order-2 animate-fade-in animate-once animate-delay-200">
          <h3 className="text-3xl font-bold mb-6">
            {isHomepage ? (
              <>Turning <span className="heading-gradient">Ideas</span> into Digital Excellence</>
            ) : (
              <>Our <span className="heading-gradient">Mission</span> & Vision</>
            )}
          </h3>
          
          <p className="text-foreground/80 mb-6">
            Founded in 2018, GeniusTech Solutions has been at the forefront of digital innovation, 
            helping businesses of all sizes harness the power of technology to grow and succeed.
          </p>
          
          <p className="text-foreground/80 mb-8">
            Our team combines technical expertise with creative problem-solving to deliver solutions 
            that not only meet your current needs but also support your future growth. We believe in 
            building long-term relationships based on trust, transparency, and exceptional results.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {valueItems.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {isHomepage && (
            <Link to="/about" className="button-primary">
              Learn More About Us
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
