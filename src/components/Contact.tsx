
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "../supabaseClient";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+233 596 605-771", "+233 201 515-815"],
    delay: 100
  },
  {
    icon: Mail,
    title: "Email",
    details: ["geniustechsolutions01@gmail.com"],
    delay: 200
  },
  
];

const Contact = ({ isContactPage = false }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
const [isSubmitting, setIsSubmitting] = useState(false);

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const { name, email, subject, message } = formData;

  const { error } = await supabase.from("contacts").insert([
    { name, email, subject, message }
  ]);

  if (error) {
    toast.error("Failed to send message", {
      description: "Please try again later.",
    });
  } else {
    toast.success("Message sent successfully!", {
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }

  setIsSubmitting(false);
};

  
  return (
    <section id="contact" className={`${isContactPage ? 'section-container' : 'section-container'}`}>
      {!isContactPage && (
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in animate-once">
          <h2 className="mb-4 heading-gradient">Get in Touch</h2>
          <p className="text-lg text-foreground/80">
            Have a project in mind or questions about our services? We'd love to hear from you.
          </p>
        </div>
      )}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="order-2 lg:order-1 animate-fade-in animate-once">
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                placeholder="How can we help you?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                placeholder="Tell us about your project or questions..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="button-primary w-full flex items-center justify-center"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
        
        <div className="order-1 lg:order-2">
          <div className="relative">
            <div className="relative z-10 space-y-8">
              <div className="animate-fade-in animate-once">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-foreground/80 mb-8">
                  Whether you have a question, want to start a project, or simply want to connect, we're here for you.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start glass-card p-5 rounded-xl animate-fade-in animate-once"
                    style={{ animationDelay: `${item.delay}ms` }}
                  >
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold mb-2">{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-foreground/70">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
             
            </div>
            
            {/* Background Elements */}
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
      
      
    </section>
  );
};

export default Contact;
