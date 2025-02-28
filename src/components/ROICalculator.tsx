import React, { useState, useEffect } from 'react';
import { Calculator, DollarSign, Phone, Users } from 'lucide-react';

const ROICalculator: React.FC = () => {
  const [missedCalls, setMissedCalls] = useState(10);
  const [leadConversionRate, setLeadConversionRate] = useState(20);
  const [averageDealValue, setAverageDealValue] = useState(10000);
  const [monthlyLostRevenue, setMonthlyLostRevenue] = useState(0);
  const [yearlyLostRevenue, setYearlyLostRevenue] = useState(0);
  
  useEffect(() => {
    // Calculate lost revenue
    const monthlyDealsLost = (missedCalls * (leadConversionRate / 100));
    const calculatedMonthlyLostRevenue = monthlyDealsLost * averageDealValue;
    const calculatedYearlyLostRevenue = calculatedMonthlyLostRevenue * 12;
    
    setMonthlyLostRevenue(calculatedMonthlyLostRevenue);
    setYearlyLostRevenue(calculatedYearlyLostRevenue);
  }, [missedCalls, leadConversionRate, averageDealValue]);
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 my-8">
      <div className="flex items-center mb-4">
        <Calculator className="h-6 w-6 text-blue-600 mr-2" />
        <h3 className="text-xl font-bold">Calculate Your Lost Revenue</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              <span>Missed Calls Per Month</span>
            </div>
          </label>
          <input
            type="range"
            min="1"
            max="50"
            value={missedCalls}
            onChange={(e) => setMissedCalls(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">1</span>
            <span className="text-sm font-medium">{missedCalls}</span>
            <span className="text-xs text-gray-500">50</span>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>Lead Conversion Rate (%)</span>
            </div>
          </label>
          <input
            type="range"
            min="1"
            max="50"
            value={leadConversionRate}
            onChange={(e) => setLeadConversionRate(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">1%</span>
            <span className="text-sm font-medium">{leadConversionRate}%</span>
            <span className="text-xs text-gray-500">50%</span>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 mr-1" />
              <span>Average Deal Value ($)</span>
            </div>
          </label>
          <input
            type="range"
            min="1000"
            max="50000"
            step="1000"
            value={averageDealValue}
            onChange={(e) => setAverageDealValue(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">$1k</span>
            <span className="text-sm font-medium">${(averageDealValue/1000).toFixed(0)}k</span>
            <span className="text-xs text-gray-500">$50k</span>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Monthly Lost Revenue</p>
          <p className="text-2xl font-bold text-red-600">
            ${monthlyLostRevenue.toLocaleString()}
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Yearly Lost Revenue</p>
          <p className="text-2xl font-bold text-red-600">
            ${yearlyLostRevenue.toLocaleString()}
          </p>
        </div>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>
          <strong>How this is calculated:</strong> Missed Calls × Lead Conversion Rate × Average Deal Value = Lost Revenue
        </p>
        <p className="mt-2">
          With RealCallAI, you can capture these missed opportunities and turn them into revenue.
        </p>
      </div>
    </div>
  );
};

export default ROICalculator;