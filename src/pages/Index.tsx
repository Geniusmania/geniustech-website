
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll to top when the component mounts
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>GeniusTech Solutions | IT Freelance Agency</title>
        <meta name="description" content="GeniusTech Solutions is a premier IT freelance agency specializing in web development, mobile apps, and IT consulting. Transform your business with our innovative solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-background animate-fade-in animate-once">
        <Navbar />
        
        <main>
          <Hero />
          
          <Services limit={3} />
          
          <About />
          
          {/* <Portfolio limit={3} /> */}
          
          <Testimonials />
          
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
