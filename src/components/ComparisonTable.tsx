import React from 'react';
import { Check, X } from 'lucide-react';

interface ComparisonFeature {
  name: string;
  ai: boolean;
  traditional: boolean;
  highlight?: boolean;
}

const ComparisonTable: React.FC = () => {
  const features: ComparisonFeature[] = [
    { name: '24/7 Availability', ai: true, traditional: true },
    { name: 'Instant Response', ai: true, traditional: false, highlight: true },
    { name: 'Natural Conversation', ai: true, traditional: true },
    { name: 'Lead Qualification', ai: true, traditional: false, highlight: true },
    { name: 'Appointment Scheduling', ai: true, traditional: true },
    { name: 'Personalized Responses', ai: true, traditional: false },
    { name: 'Unlimited Concurrent Calls', ai: true, traditional: false, highlight: true },
    { name: 'No Hold Times', ai: true, traditional: false },
    { name: 'Detailed Call Analytics', ai: true, traditional: false },
    { name: 'CRM Integration', ai: true, traditional: true },
    { name: 'Multilingual Support', ai: true, traditional: false, highlight: true },
    { name: 'Scalable Pricing', ai: true, traditional: false },
  ];
  
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left py-4 px-6 bg-gray-50 font-semibold text-gray-700 border-b">
              Feature
            </th>
            <th className="py-4 px-6 bg-blue-50 font-semibold text-blue-700 border-b text-center">
              RealCallAI
            </th>
            <th className="py-4 px-6 bg-gray-50 font-semibold text-gray-700 border-b text-center">
              Traditional Answering Service
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr 
              key={index} 
              className={feature.highlight ? 'bg-blue-50' : (index % 2 === 0 ? 'bg-white' : 'bg-gray-50')}
            >
              <td className="py-3 px-6 border-b border-gray-200">
                {feature.name}
                {feature.highlight && (
                  <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                    Key Difference
                  </span>
                )}
              </td>
              <td className="py-3 px-6 border-b border-gray-200 text-center">
                {feature.ai ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                )}
              </td>
              <td className="py-3 px-6 border-b border-gray-200 text-center">
                {feature.traditional ? (
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                ) : (
                  <X className="h-5 w-5 text-red-500 mx-auto" />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;