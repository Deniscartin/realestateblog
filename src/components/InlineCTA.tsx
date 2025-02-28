import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface InlineCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'primary' | 'secondary';
}

const InlineCTA: React.FC<InlineCTAProps> = ({
  title = "Ready to transform your real estate business?",
  description = "Schedule a demo today and see how RealCallAI can help you never miss another lead.",
  buttonText = "Schedule a Demo",
  buttonLink = "/schedule-demo",
  variant = 'primary',
}) => {
  const bgClass = variant === 'primary' 
    ? 'bg-blue-50 border border-blue-100' 
    : 'bg-gray-50 border border-gray-200';
  
  const buttonClass = variant === 'primary'
    ? 'btn-cta'
    : 'btn-primary';
  
  return (
    <div className={`rounded-lg ${bgClass} p-6 my-8`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link to={buttonLink} className={`btn ${buttonClass} flex items-center justify-center`}>
        {buttonText}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

export default InlineCTA;