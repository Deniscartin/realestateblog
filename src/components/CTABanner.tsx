import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTABanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              Ready to never miss another lead?
            </h2>
            <p className="text-blue-100 text-lg">
              Schedule a demo today and see how RealCallAI can transform your real estate business.
            </p>
          </div>
          <Link 
            to="/schedule-demo" 
            className="btn bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold flex items-center"
          >
            Schedule Your Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;