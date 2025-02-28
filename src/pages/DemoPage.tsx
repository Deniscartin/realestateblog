import React, { useState } from 'react';
import { Check, Phone } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import TestimonialCard from '../components/TestimonialCard';

const DemoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    agentCount: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "RealCallAI Demo",
    "description": "Schedule a demo of RealCallAI's virtual receptionist service for real estate professionals",
    "provider": {
      "@type": "Organization",
      "name": "RealCallAI",
      "url": "https://realcallai.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };
  
  return (
    <>
      <SEOHead 
        title="Schedule a Demo | RealCallAI"
        description="Schedule a free demo of RealCallAI's virtual receptionist service for real estate professionals. See how our AI-powered call handling can help you never miss another lead."
        canonicalUrl="/schedule-demo"
        schema={schema}
      />
      
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Schedule Your Free Demo
            </h1>
            <p className="text-xl text-gray-600">
              See how RealCallAI can transform your real estate business with AI-powered call handling.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form Section */}
            <div className="bg-white rounded-lg shadow-md p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company/Agency Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="agentCount" className="block text-sm font-medium text-gray-700 mb-1">
                        Number of Agents
                      </label>
                      <select
                        id="agentCount"
                        name="agentCount"
                        value={formData.agentCount}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select...</option>
                        <option value="1">Just me (1 agent)</option>
                        <option value="2-5">2-5 agents</option>
                        <option value="6-20">6-20 agents</option>
                        <option value="21-50">21-50 agents</option>
                        <option value="50+">50+ agents</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      What are your biggest challenges with call handling?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn btn-cta py-3 text-lg"
                  >
                    Schedule My Demo
                  </button>
                  
                  <p className="text-sm text-gray-500 mt-4 text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy-policy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="bg-green-100 text-green-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Your demo request has been received. One of our team members will contact you shortly to schedule your personalized demo.
                  </p>
                  <p className="text-gray-600">
                    In the meantime, feel free to explore our{' '}
                    <a href="/#blog" className="text-blue-600 hover:underline">
                      blog articles
                    </a>{' '}
                    to learn more about AI in real estate.
                  </p>
                </div>
              )}
            </div>
            
            {/* Info Section */}
            <div>
              <div className="bg-blue-50 rounded-lg p-8 mb-8">
                <div className="flex items-center mb-4">
                  <Phone className="h-6 w-6 text-blue-600 mr-2" />
                  <h2 className="text-2xl font-bold">What to Expect</h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <p>
                      <strong>Personalized Demo:</strong> See RealCallAI in action with scenarios tailored to your business.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <p>
                      <strong>ROI Analysis:</strong> Understand exactly how much revenue you're currently losing from missed calls.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <p>
                      <strong>Integration Overview:</strong> Learn how RealCallAI works with your existing systems and workflows.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <p>
                      <strong>Custom Pricing:</strong> Get a pricing plan that fits your specific needs and budget.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                      <Check className="h-4 w-4 text-blue-600" />
                    </div>
                    <p>
                      <strong>Q&A Session:</strong> Get all your questions answered by our real estate AI experts.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">What Our Clients Say</h3>
                <TestimonialCard 
                  quote="The demo was eye-opening. I had no idea how many leads I was missing until I saw the data. After implementing RealCallAI, my business increased by 30% in just three months."
                  author="David Chen"
                  role="Independent Agent"
                  company="Keller Williams"
                  rating={5}
                  image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DemoPage;