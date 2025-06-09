
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { CheckCircle } from "lucide-react";

const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer: "We work with businesses of all sizes across various industries, from startups to large enterprises. Our solutions are tailored to meet the specific needs and challenges of each client."
  },
  {
    question: "How long does it typically take to complete a project?",
    answer: "Project timelines vary depending on the scope and complexity. A basic website might take 4-6 weeks, while more complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes, we offer various maintenance and support packages to ensure your digital solutions continue to perform optimally. These can include regular updates, security patches, feature enhancements, and technical support."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer both project-based and retainer pricing models. The cost depends on the scope, complexity, and timeline of your project. We provide detailed quotes after understanding your specific requirements."
  },
  {
    question: "Do you sign NDAs for project confidentiality?",
    answer: "Absolutely. We understand the sensitive nature of many projects and are happy to sign non-disclosure agreements to protect your intellectual property and business information."
  },
  {
    question: "Can you help with an existing project that needs improvements?",
    answer: "Yes, we regularly work on existing projects that need updates, redesigns, or performance improvements. Our team can evaluate your current solution and recommend the best approach."
  }
];

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Yiedze Digital Solutions</title>
        <meta name="description" content="Get in touch with Yiedze Digital Solutions for all your IT service needs. Contact us today to discuss your project or request a quote." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main>
          <Contact isContactPage={true} />
          
          {/* FAQs Section */}
          <section className="bg-secondary py-24">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in animate-once">
                <h2 className="mb-4 heading-gradient">Frequently Asked Questions</h2>
                <p className="text-lg text-foreground/80">
                  Find answers to common questions about our services and process.
                </p>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index}
                      className="glass-card p-6 animate-fade-in animate-once"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <h3 className="text-lg font-semibold mb-3 flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-foreground/70 ml-7">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
