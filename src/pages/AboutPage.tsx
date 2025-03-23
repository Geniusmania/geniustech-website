
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import { Users, Lightbulb, Clock, Award } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions that keep our clients ahead of the curve."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, fostering transparent communication and genuine partnerships to achieve exceptional results."
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "We deliver on our promises, meeting deadlines and exceeding expectations with consistent quality and reliability."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We are committed to excellence in everything we do, from code quality to client service and continuous improvement."
  }
];

const team = [
  {
    name: "David Johnson",
    position: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    description: "With over 15 years of experience in technology and business leadership, David founded GeniusTech Solutions with a vision to help businesses leverage technology for growth and innovation."
  },
  {
    name: "Sarah Miller",
    position: "CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80",
    description: "A brilliant technologist with expertise in multiple programming languages and frameworks, Sarah leads our technical strategy and ensures the delivery of high-quality solutions."
  },
  {
    name: "Michael Chen",
    position: "Lead Developer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    description: "Michael's exceptional coding skills and problem-solving abilities have been instrumental in developing some of our most complex and successful projects."
  },
  {
    name: "Emily Rodriguez",
    position: "UX/UI Designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80",
    description: "With a keen eye for design and a deep understanding of user experience, Emily creates intuitive and visually appealing interfaces that delight users."
  }
];

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us | GeniusTech Solutions</title>
        <meta name="description" content="Learn about GeniusTech Solutions, our mission, values, and the dedicated team behind our innovative IT solutions and services." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-24">
          <section className="container mx-auto px-6 py-16">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in animate-once">
              <h1 className="mb-4 heading-gradient">About GeniusTech Solutions</h1>
              <p className="text-lg text-foreground/80">
                We're a team of passionate technology experts dedicated to helping businesses thrive in the digital landscape.
              </p>
            </div>
            
            {/* About Section */}
            <About isHomepage={false} />
            
            {/* Our History */}
            <div className="mt-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 animate-fade-in animate-once animate-delay-200">
                  <h2 className="text-3xl font-bold mb-6">Our <span className="heading-gradient">Journey</span></h2>
                  
                  <div className="space-y-8">
                    <div className="relative pl-8 border-l-2 border-primary/30 pb-8">
                      <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
                      <h3 className="text-xl font-semibold mb-2">2018 - Foundation</h3>
                      <p className="text-foreground/70">
                        GeniusTech Solutions was founded with a vision to provide innovative technology solutions to businesses of all sizes.
                      </p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-primary/30 pb-8">
                      <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
                      <h3 className="text-xl font-semibold mb-2">2019 - Growth & Expansion</h3>
                      <p className="text-foreground/70">
                        We expanded our team and service offerings, including mobile app development and advanced backend solutions.
                      </p>
                    </div>
                    
                    <div className="relative pl-8 border-l-2 border-primary/30 pb-8">
                      <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
                      <h3 className="text-xl font-semibold mb-2">2021 - Innovation Hub</h3>
                      <p className="text-foreground/70">
                        Launched our Innovation Hub, focusing on emerging technologies like AI, IoT, and blockchain applications.
                      </p>
                    </div>
                    
                    <div className="relative pl-8">
                      <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary"></div>
                      <h3 className="text-xl font-semibold mb-2">Present - Global Impact</h3>
                      <p className="text-foreground/70">
                        Today, we serve clients globally, maintaining our commitment to excellence and innovation in everything we do.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 relative animate-fade-in animate-once">
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80" 
                      alt="GeniusTech Journey" 
                      className="w-full h-auto"
                    />
                  </div>
                  
                  {/* Background Elements */}
                  <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
                  <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
                </div>
              </div>
            </div>
            
            {/* Our Values */}
            <div className="mt-24">
              <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in animate-once">
                <h2 className="mb-4 heading-gradient">Our Core Values</h2>
                <p className="text-lg text-foreground/80">
                  These principles guide our work and relationships with clients, partners, and each other.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div 
                    key={index}
                    className="glass-card p-8 h-full animate-fade-in animate-once"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-foreground/70">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Our Team */}
            <div className="mt-24">
              <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in animate-once">
                <h2 className="mb-4 heading-gradient">Meet Our Team</h2>
                <p className="text-lg text-foreground/80">
                  The passionate professionals behind GeniusTech Solutions' success. 
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <div 
                    key={index}
                    className="glass-card overflow-hidden animate-fade-in animate-once"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary text-sm mb-4">{member.position}</p>
                      <p className="text-sm text-foreground/70">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
