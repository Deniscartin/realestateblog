import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <BookOpen className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">Real Estate Blog</span>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-2 text-center md:text-left">Popular Articles</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/blog/never-miss-another-lead" className="text-gray-400 hover:text-white transition-colors">
                  Never Miss Another Lead
                </Link>
              </li>
              <li>
                <Link to="/blog/true-cost-of-missed-calls" className="text-gray-400 hover:text-white transition-colors">
                  The True Cost of Missed Calls
                </Link>
              </li>
              <li>
                <Link to="/blog/ai-vs-traditional-answering-services" className="text-gray-400 hover:text-white transition-colors">
                  AI vs. Traditional Answering Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <p className="text-gray-500 text-sm text-center">
            &copy; {currentYear} Real Estate Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;