
import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, User, Clock, Search, Tag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { toast } from "../hooks/use-toast";

const blogPosts = [
  {
    id: 1,
    slug: "web-development-trends-2023",
    title: "The Future of Web Development: Trends to Watch in 2023",
    excerpt: "Explore the emerging technologies and methodologies that are reshaping the web development landscape this year.",
    image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: "David Johnson",
    date: "June 15, 2023",
    readTime: "8 min read",
    category: "Web Development",
    tags: ["JavaScript", "React", "Frontend"]
  },
  {
    id: 2,
    slug: "mobile-app-design-principles",
    title: "Building Scalable Mobile Applications with React Native",
    excerpt: "Learn the best practices for developing cross-platform mobile apps that can grow with your user base.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: "Sarah Miller",
    date: "May 22, 2023",
    readTime: "10 min read",
    category: "Mobile Development",
    tags: ["React Native", "Mobile", "Cross-platform"]
  },
  {
    id: 3,
    title: "Database Design Principles for Modern Applications",
    excerpt: "A comprehensive guide to designing efficient, scalable, and maintainable databases for today's applications.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80",
    author: "Michael Chen",
    date: "April 10, 2023",
    readTime: "12 min read",
    category: "Backend Development",
    tags: ["Database", "SQL", "NoSQL"]
  },
  {
    id: 4,
    title: "Implementing Effective UI/UX Design in Your Web Projects",
    excerpt: "Discover how thoughtful design choices can significantly enhance user experience and drive engagement.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2136&q=80",
    author: "Emily Rodriguez",
    date: "March 5, 2023",
    readTime: "9 min read",
    category: "Design",
    tags: ["UI/UX", "Design Thinking", "User Experience"]
  },
  {
    id: 5,
    title: "Security Best Practices for Web Applications",
    excerpt: "Essential security measures to protect your web applications from common vulnerabilities and threats.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    author: "David Johnson",
    date: "February 18, 2023",
    readTime: "11 min read",
    category: "Security",
    tags: ["Cybersecurity", "Authentication", "Data Protection"]
  },
  {
    id: 6,
    title: "The Role of AI in Modern Software Development",
    excerpt: "How artificial intelligence is transforming the way we build, test, and deploy software applications.",
    image: "https://images.unsplash.com/photo-1677442135136-760c813028c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    author: "Sarah Miller",
    date: "January 30, 2023",
    readTime: "14 min read",
    category: "Technology",
    tags: ["AI", "Machine Learning", "Automation"]
  }
];

const categories = ["All", "Web Development", "Mobile Development", "Backend Development", "Design", "Security", "Technology"];

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState("");
  
  const postsPerPage = 6;
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscription Successful",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
    } else {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Blog | GeniusTech Solutions</title>
        <meta name="description" content="Stay updated with the latest technology trends, insights, and best practices in web development, mobile applications, and IT solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-32">
          <section className="container mx-auto px-6 pb-16">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in animate-once">
              <h1 className="mb-4 heading-gradient">Our Blog</h1>
              <p className="text-lg text-foreground/80">
                Insights, tutorials, and industry updates from our team of experts.
              </p>
            </div>
            
            {/* Search and Filters */}
            <div className="mb-12">
              <div className="relative max-w-xl mx-auto mb-8 animate-fade-in animate-once">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/50" />
              </div>
              
              <div className="flex flex-wrap justify-center gap-3 animate-fade-in animate-once animate-delay-200">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeCategory === category
                        ? "bg-primary text-white"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Blog Posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post, index) => (
                <article 
                  key={post.id}
                  className="glass-card overflow-hidden flex flex-col h-full animate-fade-in animate-once"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-primary/80 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-xs text-foreground/60 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center mr-4">
                        <User className="h-3 w-3 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 line-clamp-2">
                      <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-foreground/70 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="flex items-center text-xs px-2 py-1 bg-secondary rounded text-foreground/70"
                        >
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className="mt-auto inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16 animate-fade-in animate-once">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto">
                    <Search className="h-8 w-8 text-foreground/50" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">No posts found</h3>
                <p className="text-foreground/70 mb-6">
                  We couldn't find any posts matching your search criteria.
                </p>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory("All");
                  }} 
                  variant="secondary"
                >
                  Clear Filters
                </Button>
              </div>
            )}
            
            {/* Pagination */}
            {filteredPosts.length > 0 && (
              <div className="flex justify-center mt-16 animate-fade-in animate-once animate-delay-500">
                <nav className="flex items-center space-x-2">
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    &lt;
                  </Button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button 
                      key={page}
                      variant={page === currentPage ? "default" : "secondary"}
                      size="icon"
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </Button>
                  ))}
                  
                  <Button
                    variant="secondary"
                    size="icon"
                    onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    &gt;
                  </Button>
                </nav>
              </div>
            )}
          </section>
          
          {/* Newsletter */}
          <section className="bg-secondary py-24">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto text-center animate-fade-in animate-once">
                <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-foreground/80 mb-8">
                  Stay updated with our latest articles, tutorials, and industry insights.
                </p>
                
                <form className="max-w-md mx-auto flex" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="px-6 py-3 rounded-r-lg"
                  >
                    Subscribe
                  </Button>
                </form>
                
                <p className="text-xs text-foreground/60 mt-4">
                  We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
