import React, { useState, useEffect } from 'react';
import { X, MessageSquare, ArrowRight } from 'lucide-react';

interface FloatingCTAModalProps {
  scrollTriggerPoints?: number[];
}

const FloatingCTAModal: React.FC<FloatingCTAModalProps> = ({ 
  scrollTriggerPoints = [25, 50, 75] // Default trigger points at 25%, 50%, and 75% of page scroll
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [lastShownTime, setLastShownTime] = useState(0);
  const [currentTriggerIndex, setCurrentTriggerIndex] = useState(0);
  
  useEffect(() => {
    // Calculate document height for percentage-based triggers
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    
    // Convert percentage triggers to pixel values
    const pixelTriggers = scrollTriggerPoints.map(
      percentage => (percentage / 100) * documentHeight
    );
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const currentTime = Date.now();
      
      // Only check if not already visible and not recently dismissed
      if (!isVisible && !isDismissed && currentTime - lastShownTime > 30000) {
        // Check if we've passed the next trigger point
        if (currentTriggerIndex < pixelTriggers.length && 
            scrollPosition >= pixelTriggers[currentTriggerIndex]) {
          setIsVisible(true);
          setCurrentTriggerIndex(currentTriggerIndex + 1);
          setLastShownTime(currentTime);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, isDismissed, lastShownTime, currentTriggerIndex, scrollTriggerPoints]);
  
  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    
    // Reset dismissal after 2 minutes to allow future triggers
    setTimeout(() => {
      setIsDismissed(false);
    }, 120000);
  };
  
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full md:w-96 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden animate-fade-in-up">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-3 text-white flex justify-between items-center">
        <div className="flex items-center">
          <MessageSquare className="h-5 w-5 mr-2" />
          <h3 className="font-semibold">Never Miss Another Lead</h3>
        </div>
        <button 
          onClick={handleDismiss}
          className="text-white hover:text-blue-100 transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="p-5">
        <p className="text-gray-700 mb-4">
          Discover how AI-powered virtual receptionists can help you capture every lead, even when you're unavailable.
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <span className="bg-green-100 rounded-full w-2 h-2 mr-2"></span>
            <span>24/7 Availability</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span className="bg-green-100 rounded-full w-2 h-2 mr-2"></span>
            <span>No Setup Fees</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span className="bg-green-100 rounded-full w-2 h-2 mr-2"></span>
            <span>Free Trial</span>
          </div>
        </div>
        
        <a 
          href="https://realcallai.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors flex items-center justify-center"
          onClick={handleDismiss}
        >
          Try a Free AI Assistant Today
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default FloatingCTAModal;