import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { blogPosts } from '../data/blogPosts';

const NotFound: React.FC = () => {
  // Get a few popular posts to suggest
  const suggestedPosts = blogPosts.slice(0, 3);
  
  return (
    <>
      <SEOHead 
        title="Page Not Found | Real Estate Blog"
        description="The page you are looking for does not exist. Browse our articles on real estate technology, AI solutions, and business growth strategies."
        canonicalUrl="/404"
      />
      
      <div className="min-h-[70vh] flex items-center justify-center py-12">
        <div className="text-center max-w-2xl px-4">
          <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link 
              to="/" 
              className="btn btn-primary inline-flex items-center justify-center"
            >
              <Home className="mr-2 h-5 w-5" />
              Return to Homepage
            </Link>
            
            <Link 
              to="/" 
              className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 inline-flex items-center justify-center"
            >
              <Search className="mr-2 h-5 w-5" />
              Browse Articles
            </Link>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Popular Articles You Might Like</h3>
            <ul className="space-y-2">
              {suggestedPosts.map(post => (
                <li key={post.slug}>
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;