
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { toast } from "../hooks/use-toast";

// This would typically come from a CMS or API
const getBlogPost = (slug: string) => {
  // This is mock data - in a real app, you'd fetch from an API
  const posts = [
    {
      id: 1,
      slug: "web-development-trends-2023",
      title: "Top Web Development Trends to Watch in 2023",
      author: "Alex Morgan",
      date: "June 15, 2023",
      readTime: "8 min read",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      excerpt: "Explore the latest trends shaping the future of web development in 2023 and beyond.",
      content: `
        <p>The web development landscape continues to evolve at a rapid pace. As we move through 2023, several key trends are shaping how websites and applications are built, deployed, and experienced by users.</p>
        
        <h3>1. AI-Powered Development Tools</h3>
        <p>Artificial intelligence is revolutionizing how developers work. From code completion to automated testing, AI tools are enhancing productivity and code quality. GitHub Copilot and similar AI pair programmers are becoming essential parts of the modern developer's toolkit.</p>
        
        <h3>2. WebAssembly (Wasm) Adoption</h3>
        <p>WebAssembly continues to gain traction, allowing high-performance applications to run in the browser. This technology enables developers to use languages like C, C++, and Rust to create web applications with near-native speed.</p>
        
        <h3>3. Jamstack Architecture</h3>
        <p>The Jamstack approach (JavaScript, APIs, and Markup) continues to grow in popularity due to its performance benefits, improved security, and developer experience. Static site generators and headless CMS solutions are key components of this architecture.</p>
        
        <h3>4. Progressive Web Apps (PWAs)</h3>
        <p>PWAs remain relevant in 2023, offering app-like experiences through web browsers. With improved offline capabilities and installation features, PWAs bridge the gap between web and native applications.</p>
        
        <h3>5. API-First Development</h3>
        <p>More companies are adopting an API-first approach to development, designing APIs before implementing user interfaces. This strategy promotes better separation of concerns and enables more flexible frontend development.</p>
        
        <p>As we continue through the year, these trends will likely evolve further, shaping the future of web development and creating new opportunities for businesses and developers alike.</p>
      `
    },
    {
      id: 2,
      slug: "mobile-app-design-principles",
      title: "Essential Mobile App Design Principles for Better UX",
      author: "Sarah Chen",
      date: "May 28, 2023",
      readTime: "6 min read",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      excerpt: "Learn the fundamental design principles that create exceptional mobile user experiences.",
      content: `
        <p>Creating a successful mobile app requires more than just functionality—it demands a thoughtful design that puts users first. Here are the essential mobile app design principles that lead to better user experiences.</p>
        
        <h3>1. Simplicity and Clarity</h3>
        <p>Mobile screens have limited real estate, making simplicity crucial. Focus on essential features, use clear language, and maintain a clean interface that guides users naturally through your app.</p>
        
        <h3>2. Intuitive Navigation</h3>
        <p>Users should always know where they are in your app and how to get to where they want to go. Implement familiar navigation patterns like tab bars (iOS) or navigation drawers (Android) to create an intuitive experience.</p>
        
        <h3>3. Consistent Design Language</h3>
        <p>Consistency in colors, typography, buttons, and other UI elements helps users learn your interface faster. Follow platform guidelines (Material Design for Android or Human Interface Guidelines for iOS) while maintaining your brand identity.</p>
        
        <h3>4. Responsive Touch Targets</h3>
        <p>Ensure buttons and interactive elements are large enough (at least 44×44 pixels) to be easily tapped with a finger. Provide adequate spacing between touch targets to prevent accidental taps.</p>
        
        <h3>5. Efficient Onboarding</h3>
        <p>First impressions matter. Create a smooth onboarding process that quickly demonstrates your app's value. Consider progressive onboarding that teaches users as they navigate the app naturally.</p>
        
        <p>By implementing these design principles, you can create mobile apps that not only look good but also provide meaningful, enjoyable experiences that keep users coming back.</p>
      `
    }
  ];
  
  return posts.find(post => post.slug === slug) || null;
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPost(slug || "");
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!post) {
    return (
      <>
        <Helmet>
          <title>Post Not Found | GeniusTech Solutions Blog</title>
        </Helmet>
        <div className="min-h-screen bg-background">
          <Navbar />
          <div className="container mx-auto px-6 py-24 text-center">
            <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
            <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
            <Link to="/blog" className="button-primary">
              Back to Blog
            </Link>
          </div>
          <Footer />
        </div>
      </>
    );
  }
  
  const handleShare = (platform: string) => {
    const url = window.location.href;
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url)
          .then(() => {
            setCopied(true);
            toast({
              title: "Link Copied",
              description: "The link has been copied to your clipboard.",
            });
            setTimeout(() => setCopied(false), 3000);
          })
          .catch(err => {
            toast({
              title: "Copy Failed",
              description: "Failed to copy the link. Please try again.",
              variant: "destructive",
            });
          });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
  };
  
  return (
    <>
      <Helmet>
        <title>{post.title} | GeniusTech Solutions Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="container mx-auto px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
            
            <div className="mb-8">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl" 
              />
            </div>
            
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                <div className="flex items-center">
                  <User className="mr-1.5 h-4 w-4 text-primary" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="mr-1.5 h-4 w-4 text-primary" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <Clock className="mr-1.5 h-4 w-4 text-primary" />
                  {post.readTime}
                </div>
                <div className="flex items-center">
                  <Tag className="mr-1.5 h-4 w-4 text-primary" />
                  {post.category}
                </div>
              </div>
            </div>
            
            <div className="prose prose-blue max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-semibold mb-4">Share this article</h3>
              <div className="flex gap-4">
                <Button variant="secondary" onClick={() => handleShare('twitter')}>
                  Share on Twitter
                </Button>
                <Button variant="secondary" onClick={() => handleShare('linkedin')}>
                  Share on LinkedIn
                </Button>
                <Button variant="secondary" onClick={() => handleShare('copy')}>
                  {copied ? "Copied!" : "Copy Link"}
                </Button>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
