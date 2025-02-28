import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Calendar, Tag } from 'lucide-react';
import { BlogPost } from '../types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 border border-gray-100" itemScope itemType="https://schema.org/BlogPosting">
      <Link to={`/blog/${post.slug}`}>
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-48 object-cover"
          itemProp="image"
        />
      </Link>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 2).map((tag, index) => (
            <span 
              key={index}
              className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
            >
              <Tag className="inline h-3 w-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
        
        <Link to={`/blog/${post.slug}`}>
          <h2 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors" itemProp="headline">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-4" itemProp="description">
          {post.excerpt}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center mr-4">
            <Calendar className="h-4 w-4 mr-1" />
            <time itemProp="datePublished" dateTime={post.date}>{post.date}</time>
          </div>
          <div className="flex items-center mr-4">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime} min read</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span itemProp="author">{post.author}</span>
          </div>
        </div>
        
        <Link 
          to={`/blog/${post.slug}`}
          className="text-blue-600 font-medium hover:text-blue-800 text-sm inline-flex items-center"
          aria-label={`Read more about ${post.title}`}
        >
          Read Full Article
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        
        {/* Hidden schema metadata */}
        <meta itemProp="mainEntityOfPage" content={`https://realestateblog.com/blog/${post.slug}`} />
        <meta itemProp="keywords" content={post.tags.join(', ')} />
      </div>
    </article>
  );
};

export default BlogCard;