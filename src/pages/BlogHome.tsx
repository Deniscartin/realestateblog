import React, { useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

const BlogHome: React.FC = () => {
  // Generate article list schema
  const articleListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": blogPosts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.coverImage,
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "datePublished": post.date,
        "url": `https://realestateblog.com/blog/${post.slug}`
      }
    }))
  };
  
  // Generate organization schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Real Estate Blog",
    "url": "https://realestateblog.com",
    "logo": "https://realestateblog.com/logo.png",
    "description": "Articles and insights for real estate professionals"
  };
  
  // Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://realestateblog.com"
      }
    ]
  };
  
  // Combine all schemas
  const schemas = [articleListSchema, organizationSchema, breadcrumbSchema];
  
  // Generate keywords from all blog post tags
  const allTags = new Set<string>();
  blogPosts.forEach(post => post.tags.forEach(tag => allTags.add(tag)));
  const keywordString = Array.from(allTags).join(', ') + ', real estate blog, real estate technology, real estate AI, real estate agents, real estate professionals';
  
  // Ensure meta tags are updated when component mounts
  useEffect(() => {
    // Force a re-render of SEOHead when component mounts
    const metaTitle = document.querySelector('title');
    if (metaTitle) {
      metaTitle.textContent = 'Real Estate Blog - AI Technology & Strategies for Real Estate Professionals';
    }
  }, []);
  
  // Group posts by category
  const aiTechnologyPosts = blogPosts.filter(post => 
    post.tags.includes('AI technology') || 
    post.tags.includes('virtual receptionist')
  );
  
  const realEstateStrategyPosts = blogPosts.filter(post => 
    post.tags.includes('real estate strategy') || 
    post.tags.includes('property pricing') ||
    post.tags.includes('negotiation strategies')
  );
  
  const leadGenerationPosts = blogPosts.filter(post => 
    post.tags.includes('lead generation') || 
    post.tags.includes('digital marketing') ||
    post.tags.includes('client acquisition')
  );
  
  const virtualReceptionistPosts = blogPosts.filter(post => 
    post.tags.includes('virtual receptionist') || 
    post.tags.includes('answering services')
  );
  
  const businessGrowthPosts = blogPosts.filter(post => 
    post.tags.includes('business growth') || 
    post.tags.includes('real estate strategy')
  );
  
  return (
    <>
      <SEOHead 
        title="Real Estate Blog - AI Technology & Strategies for Real Estate Professionals"
        description="Discover how AI technology is transforming real estate. Articles on lead generation, call handling, and business growth strategies for agents, brokers, and agencies."
        canonicalUrl="/"
        ogType="website"
        schema={schemas}
        keywords={keywordString}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Real Estate Technology & AI Blog
            </h1>
            <p className="text-xl text-blue-100">
              Insights, strategies, and guides for modern real estate professionals
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Topics */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#ai-technology" className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors">
              AI Technology
            </a>
            <a href="#real-estate-strategy" className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors">
              Real Estate Strategy
            </a>
            <a href="#lead-generation" className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors">
              Lead Generation
            </a>
            <a href="#virtual-receptionist" className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors">
              Virtual Receptionist
            </a>
            <a href="#business-growth" className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full hover:bg-blue-200 transition-colors">
              Business Growth
            </a>
          </div>
        </div>
      </section>
      
      {/* Lead Generation Section */}
      <section id="lead-generation" className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Lead Generation Strategies
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover proven techniques to consistently attract high-quality prospects to your real estate business
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadGenerationPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Real Estate Strategy Section */}
      <section id="real-estate-strategy" className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Real Estate Strategy & Expertise
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Practical techniques and strategies to enhance your real estate business performance
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {realEstateStrategyPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* AI Technology Section */}
      <section id="ai-technology" className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            AI Technology for Real Estate
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover how artificial intelligence is transforming the real estate industry
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiTechnologyPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Virtual Receptionist Section */}
      <section id="virtual-receptionist" className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Virtual Receptionist Solutions
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Learn how AI-powered call handling can help you capture every lead and never miss an opportunity
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {virtualReceptionistPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Business Growth Section */}
      <section id="business-growth" className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Business Growth Strategies
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Comprehensive approaches to scaling your real estate business and increasing profitability
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessGrowthPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* All Articles Section */}
      <section id="articles" className="py-12 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            All Articles for Real Estate Professionals
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How can AI technology help real estate agents?</h3>
              <p className="text-gray-700">
                AI technology helps real estate agents by automating routine tasks, providing 24/7 availability for client inquiries, qualifying leads, and enabling agents to focus on high-value activities like closing deals and building relationships.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What is a virtual receptionist for real estate?</h3>
              <p className="text-gray-700">
                A virtual receptionist for real estate is an AI-powered solution that answers calls, engages with potential clients, provides property information, qualifies leads, and schedules appointments—all without human intervention and with 24/7 availability.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How much revenue do real estate agents lose from missed calls?</h3>
              <p className="text-gray-700">
                Real estate agents can lose significant revenue from missed calls. With an average of 25-30 missed calls monthly, a 25% lead conversion rate, and an $8,000 average commission, agents could be losing upwards of $400,000 annually in potential revenue.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">What are the most effective lead generation strategies for real estate?</h3>
              <p className="text-gray-700">
                The most effective lead generation strategies for real estate include hyper-local content marketing, strategic social media campaigns, targeted digital advertising, geographic farming, optimized website lead capture, and systematic referral programs. The key is implementing these strategies consistently and measuring results to continuously improve.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">How do I maximize my property's market value?</h3>
              <p className="text-gray-700">
                To maximize your property's market value, use strategic pricing based on comprehensive market analysis, highlight unique selling points, ensure excellent presentation, time your listing strategically, and work with an agent who understands value-based negotiation techniques.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogHome;