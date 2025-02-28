import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Clock, User, Calendar, ArrowLeft, Share2, ExternalLink, Tag } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { BlogPost as BlogPostType } from '../types';
import { blogPosts } from '../data/blogPosts';
import FloatingCTAModal from '../components/FloatingCTAModal';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  const navigate = useNavigate();
  
  // Find related posts (posts with similar tags, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => 
      p.slug !== post.slug && 
      p.tags.some(tag => post.tags.includes(tag))
    )
    .slice(0, 3);
  
  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [post.slug]);
  
  // Format date for schema
  const formatSchemaDate = (dateString: string) => {
    // Simple conversion assuming format like "June 12, 2023"
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? dateString : date.toISOString().split('T')[0];
  };
  
  // Extract headings from content for table of contents
  const extractHeadings = (content: string) => {
    const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h\1>/g;
    const headings = [];
    let match;
    
    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1];
      const text = match[2].replace(/<[^>]*>/g, ''); // Remove any HTML tags inside heading
      const id = text.toLowerCase().replace(/[^\w]+/g, '-');
      
      headings.push({
        level,
        text,
        id
      });
    }
    
    return headings;
  };
  
  // Extract headings from both content parts
  const headings = [
    ...extractHeadings(post.content),
    ...(post.contentPart2 ? extractHeadings(post.contentPart2) : [])
  ];
  
  // Generate schema for the blog post
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.coverImage,
    "wordCount": (post.content + (post.contentPart2 || "")).length / 5, // Rough estimate
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Real Estate Blog",
      "logo": {
        "@type": "ImageObject",
        "url": "https://realestateblog.com/logo.png"
      }
    },
    "datePublished": formatSchemaDate(post.date),
    "dateModified": formatSchemaDate(post.lastUpdated || post.date),
    "description": post.excerpt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://realestateblog.com/blog/${post.slug}`
    },
    "keywords": post.tags.join(", ")
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": post.title,
        "item": `https://realestateblog.com/blog/${post.slug}`
      }
    ]
  };
  
  // If the post has FAQ, add FAQ schema
  let faqSchema = null;
  if (post.faq && post.faq.length > 0) {
    faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": post.faq.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };
  }
  
  // Combine all schemas
  const schemas = [articleSchema, breadcrumbSchema];
  if (faqSchema) schemas.push(faqSchema);
  
  // Process content to add IDs to headings for table of contents
  const processContent = (content: string) => {
    return content.replace(
      /<h([2-3])>(.*?)<\/h\1>/g, 
      (match, level, text) => {
        const id = text.toLowerCase().replace(/[^\w]+/g, '-');
        return `<h${level} id="${id}">${text}</h${level}>`;
      }
    );
  };
  
  const processedContent = processContent(post.content);
  const processedContentPart2 = post.contentPart2 ? processContent(post.contentPart2) : null;
  
  return (
    <>
      <SEOHead 
        title={`${post.title} | Real Estate Technology Blog`}
        description={post.excerpt}
        canonicalUrl={`/blog/${post.slug}`}
        ogImage={post.coverImage}
        ogType="article"
        schema={schemas}
        keywords={post.tags.join(", ") + ", real estate technology, AI for real estate, real estate agents"}
        author={post.author}
        publishedDate={formatSchemaDate(post.date)}
        modifiedDate={formatSchemaDate(post.lastUpdated || post.date)}
      />
      
      <article className="py-8 md:py-12" itemScope itemType="https://schema.org/BlogPosting">
        <div className="container-custom">
          {/* Breadcrumbs */}
          
          
          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-3 mb-4">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
                >
                  <Tag className="inline h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" itemProp="headline">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-gray-600 gap-4 md:gap-6">
              
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <time itemProp="datePublished" dateTime={formatSchemaDate(post.date)}>{post.date}</time>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{post.readTime} min read</span>
              </div>
             
            </div>
          </header>
          
          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-auto rounded-lg shadow-md"
              itemProp="image"
            />
          </div>
          
          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              {/* Main content with structured data attributes */}
              <div 
                className="blog-content prose prose-lg max-w-none" 
                dangerouslySetInnerHTML={{ __html: processedContent }}
                itemProp="articleBody"
              />
              
              {/* Subtle CTA after first content section */}
              <div className="my-8 p-4 bg-gray-50 border border-gray-100 rounded-lg">
                <p className="text-gray-700 text-sm mb-2">
                  Interested in implementing AI solutions for your real estate business?
                </p>
                <a 
                  href="https://realcallai.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Learn more about AI-powered call handling
                  <ExternalLink className="ml-1 h-3 w-3" />
                </a>
              </div>
              
              {/* Continue with more content */}
              {processedContentPart2 && (
                <div 
                  className="blog-content prose prose-lg max-w-none" 
                  dangerouslySetInnerHTML={{ __html: processedContentPart2 }}
                />
              )}
              
              {/* FAQ Section if available */}
              {post.faq && post.faq.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {post.faq.map((item, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Author Bio */}
              <div className="mt-12 bg-gray-50 rounded-lg p-6 flex items-start">
               
              </div>
              
              {/* Tags */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-3">Related Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-sm bg-gray-100 text-gray-800 px-3 py-1 rounded-full hover:bg-gray-200 cursor-pointer"
                    >
                      <Tag className="inline h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                {/* Table of Contents */}
                {headings.length > 0 && (
                  <div className="bg-white rounded-lg shadow-sm p-5 mb-6 border border-gray-100">
                    <h3 className="text-base font-medium text-gray-900 mb-3">Table of Contents</h3>
                    <nav>
                      <ul className="space-y-2 text-sm">
                        {headings.map((heading, index) => (
                          <li key={index} className={heading.level === '3' ? 'ml-4' : ''}>
                            <a 
                              href={`#${heading.id}`} 
                              className="text-gray-700 hover:text-blue-600 flex items-start"
                            >
                              <span className="mr-2">•</span>
                              <span>{heading.text}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                )}
                
                {/* Subtle CTA in sidebar */}
                <div className="bg-gray-50 rounded-lg p-5 mb-6 border border-gray-100">
                  <h3 className="text-base font-medium text-gray-900 mb-2">Explore AI Solutions</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Discover how AI technology can help real estate professionals capture more leads and grow their business.
                  </p>
                  <a 
                    href="https://realcallai.com/schedule-demo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 inline-flex items-center"
                  >
                    Schedule a free consultation
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
                
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                    <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <div key={relatedPost.slug} className="flex items-start">
                          <img 
                            src={relatedPost.coverImage} 
                            alt={relatedPost.title} 
                            className="w-16 h-16 object-cover rounded mr-3"
                          />
                          <div>
                            <Link 
                              to={`/blog/${relatedPost.slug}`}
                              className="font-medium text-gray-900 hover:text-blue-600 line-clamp-2"
                            >
                              {relatedPost.title}
                            </Link>
                            <p className="text-sm text-gray-500 mt-1">
                              {relatedPost.readTime} min read
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
      
      {/* Floating CTA Modal that appears at different scroll points */}
      <FloatingCTAModal scrollTriggerPoints={[20, 50, 80]} />
    </>
  );
};

export default BlogPost;