import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, BarChart, Shield, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import BlogCard from '../components/BlogCard';
import TestimonialCard from '../components/TestimonialCard';
import { blogPosts } from '../data/blogPosts';

const Home: React.FC = () => {
  // Get the latest 3 blog posts to feature
  const featuredPosts = blogPosts.slice(0, 3);
  
  // Get the real estate focused posts (using the new articles)
  const realEstateFocusedPosts = blogPosts.filter(post => 
    post.slug === 'market-value-maximizer' || 
    post.slug === 'negotiation-mastery'
  );
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RealCallAI",
    "url": "https://realcallai.com",
    "logo": "https://realcallai.com/logo.png",
    "description": "AI-powered call handling for real estate professionals",
    "sameAs": [
      "https://facebook.com/realcallai",
      "https://twitter.com/realcallai",
      "https://linkedin.com/company/realcallai"
    ]
  };
  
  return (
    <>
      <SEOHead 
        title="RealCallAI - Never Miss Another Real Estate Lead with AI Call Handling"
        description="RealCallAI provides 24/7 AI-powered call handling for real estate agents, brokers, and agencies. Never miss another lead with our virtual receptionist service."
        schema={schema}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Never Miss Another Real Estate Lead
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                RealCallAI provides 24/7 AI-powered call handling for real estate professionals. Convert more leads, close more deals, and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/schedule-demo" className="btn bg-white text-blue-700 hover:bg-blue-50">
                  Schedule a Demo
                </Link>
                <Link to="/blog/never-miss-another-lead" className="btn bg-blue-600 text-white border border-blue-500 hover:bg-blue-700">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" 
                alt="Real estate professional using RealCallAI" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Real Estate Professionals Choose RealCallAI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered call handling solution is designed specifically for the real estate industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
              <p className="text-gray-600">
                Never miss a call, even after hours or during busy periods. Capture every potential lead.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Response</h3>
              <p className="text-gray-600">
                No hold times or callbacks. Our AI answers immediately and engages callers naturally.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Lead Qualification</h3>
              <p className="text-gray-600">
                Automatically qualify leads so you can focus your time on serious buyers and sellers.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Spam Protection</h3>
              <p className="text-gray-600">
                Filter out spam calls and time-wasters, ensuring you only deal with legitimate inquiries.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* New Real Estate Focused Articles Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Real Estate Expertise
              </h2>
              <p className="text-xl text-gray-600">
                Practical strategies to enhance your real estate business.
              </p>
            </div>
            <Link 
              to="/blog" 
              className="mt-4 md:mt-0 flex items-center text-blue-600 font-medium hover:text-blue-800"
            >
              View All Articles
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {realEstateFocusedPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Real Estate Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our clients have to say about RealCallAI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="RealCallAI has transformed my business. I never miss a lead now, even when I'm showing properties or in meetings."
              author="Sarah Johnson"
              role="Real Estate Agent"
              company="Century 21"
              rating={5}
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
            />
            
            <TestimonialCard 
              quote="The lead qualification feature alone has saved me countless hours. Now I only speak with serious buyers and sellers."
              author="Michael Rodriguez"
              role="Broker"
              company="RE/MAX Elite"
              rating={5}
            />
            
            <TestimonialCard 
              quote="Our agency has seen a 40% increase in converted leads since implementing RealCallAI. The ROI is incredible."
              author="Jennifer Williams"
              role="Agency Owner"
              company="Coastal Properties"
              rating={5}
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
            />
          </div>
        </div>
      </section>
      
      {/* Latest Blog Section */}
      <section id="blog" className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Latest from Our Blog
              </h2>
              <p className="text-xl text-gray-600">
                Insights and strategies for real estate professionals.
              </p>
            </div>
            <Link 
              to="/blog" 
              className="mt-4 md:mt-0 flex items-center text-blue-600 font-medium hover:text-blue-800"
            >
              View All Articles
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Never Miss Another Lead?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Schedule a demo today and see how RealCallAI can transform your real estate business.
            </p>
            <Link 
              to="/schedule-demo" 
              className="btn btn-cta text-lg px-8 py-4"
            >
              Schedule Your Free Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;