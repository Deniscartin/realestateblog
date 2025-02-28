import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, X } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true);
      }
    }, 5000);

    const scrollHandler = () => {
      if (window.scrollY > 300 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-white rounded-lg shadow-xl p-4 max-w-xs animate-fade-in-up">
      <button 
        onClick={handleDismiss}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        aria-label="Close"
      >
        <X className="h-4 w-4" />
      </button>
      
      <div className="flex items-start mb-3">
        <div className="bg-blue-100 p-2 rounded-full mr-3">
          <Phone className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-1">Never miss another lead</h3>
          <p className="text-sm text-gray-600">
            See how RealCallAI can transform your real estate business.
          </p>
        </div>
      </div>
      
      <Link 
        to="/schedule-demo" 
        className="btn btn-cta w-full text-center text-sm"
      >
        Schedule a Free Demo
      </Link>
    </div>
  );
};

export default FloatingCTA;